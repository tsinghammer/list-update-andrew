import { AppContext } from '../AppContext';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { ViewLayout } from '../types';
import {
  changeViewAction,
  changeWindowLayoutAction,
  setShowGlobalDropFocus,
} from '../actions';
import useEventListener from '@use-it/event-listener';
import { WindowLayout } from './types';
import { getLayoutsFromLocalStore, saveLayoutToLocalStore } from './localStore';
import {
  CARD_DROPPED_IN_NEW_WINDOW,
  layoutBroadcastChannel,
} from './communication';
import { getWindowName } from './utils';
import { presets } from './presets';

export const useKeyboardControl = () => {
  const [{ viewLayout }, dispatch] = useContext(AppContext);

  const onKeyDown = (event: KeyboardEvent) => {
    let nextLayout = viewLayout;
    if (event.ctrlKey && event.keyCode === 39) {
      switch (viewLayout) {
        case ViewLayout.Overview:
          nextLayout = ViewLayout.ExternalTrades;
          break;
        case ViewLayout.ExternalTrades:
          nextLayout = ViewLayout.TradingPosition;
          break;
        case ViewLayout.TradingPosition:
          nextLayout = ViewLayout.Overview;
          break;
        default:
          break;
      }

      dispatch(changeViewAction(nextLayout));
    }
  };

  useEventListener('keydown', onKeyDown, document);
};

export const useRestoreWindows = () => {
  const restored = useRef(false);
  const [, dispatch] = useContext(AppContext);
  const windowName = getWindowName();
  const isMasterWindow = windowName === '';

  const restoreWindows = useCallback(async () => {
    const storedLayouts = await getLayoutsFromLocalStore();
    if (!storedLayouts || storedLayouts?.[0].cards.length === 0) {
      dispatch(changeWindowLayoutAction(presets.overview));
      return;
    }
    for (const layout of storedLayouts) {
      const isMyLayout = layout.name === windowName;
      if (isMyLayout) {
        dispatch(changeWindowLayoutAction(layout));
      }

      if (isMasterWindow && !isMyLayout) {
        window.open(
          'http://localhost:3000',
          layout.name,
          'toolbar=0,location=0,menubar=0',
          true
        );
      }
    }
    restored.current = true;
  }, [isMasterWindow, windowName, dispatch]);

  useEffect(() => {
    if (!restored.current) {
      restoreWindows();
    }
  }, [restored, restoreWindows]);
};

const saveLayoutOnExit = async (layout: WindowLayout) => {
  // layout.restored = false;
  await saveLayoutToLocalStore(layout);
};

const handleBeforeUnload = async (layout: WindowLayout | undefined) => {
  if (!layout) {
    return;
  }
  await saveLayoutOnExit(layout);
};

export const useSaveLayout = () => {
  const [{ windowLayout }] = useContext(AppContext);

  const saveLayout = useCallback(async () => {
    if (!windowLayout) {
      return;
    }

    await saveLayoutToLocalStore(windowLayout);
  }, [windowLayout]);

  useEffect(() => {
    saveLayout();
  }, [saveLayout]);

  useEffect(() => {
    window.addEventListener('beforeunload', () =>
      handleBeforeUnload(windowLayout)
    );

    return () => {
      window.removeEventListener('beforeunload', () =>
        handleBeforeUnload(windowLayout)
      );
    };
  }, [windowLayout]);
};

export const useLayoutChangeNotification = (
  onMessage?: (event: MessageEvent) => void
): void => {
  const [, dispatch] = useContext(AppContext);

  layoutBroadcastChannel.onmessage = (event: MessageEvent) => {
    if (onMessage) {
      onMessage(event);
    }

    if (event.data.indexOf(CARD_DROPPED_IN_NEW_WINDOW) >= 0) {
      dispatch(setShowGlobalDropFocus(false));
    }
  };
};
