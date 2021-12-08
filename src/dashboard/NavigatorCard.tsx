import React, { useContext } from 'react';
import { mergeStyleSets, DefaultEffects } from '@fluentui/react';
import { NeutralColors } from '@uifabric/fluent-theme';
import { NavigatorCardProps } from './types';
import { AppContext } from '../app/AppContext';
import {
  removeCardFromWindowLayoutAction,
  setShowGlobalDropFocus,
} from '../app/actions';
import { useLayoutChangeNotification } from '../app/layout/hooks';
import { CARD_DROPPED_IN_NEW_WINDOW } from '../app/layout/communication';

export type Props = NavigatorCardProps;

const classes = mergeStyleSets({
  card: {
    backgroundColor: NeutralColors.white,
    display: 'flex',
    position: 'relative',
    width: '100%',
    minWidth: 0,
    boxShadow: DefaultEffects.elevation4,
  },
});

export const NavigatorCard: React.FunctionComponent<Props> = (props: Props) => {
  const { cardId, children } = props;
  const [, dispatch] = useContext(AppContext);

  const handleCardDropped = (message: MessageEvent) => {
    if (message.data.indexOf(CARD_DROPPED_IN_NEW_WINDOW) >= 0) {
      const droppedCardId = message.data.split(':')[1];
      dispatch(removeCardFromWindowLayoutAction(droppedCardId));
    }
  };

  useLayoutChangeNotification(handleCardDropped);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>): void => {
    event.dataTransfer.setData('text/plain', cardId);
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>): void => {
    dispatch(setShowGlobalDropFocus(true));
  };

  return (
    <div
      className={classes.card}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  );
};
