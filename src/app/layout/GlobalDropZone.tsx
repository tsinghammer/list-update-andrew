import { mergeStyleSets } from '@fluentui/react';
import { SharedColors } from '@uifabric/fluent-theme';
import clsx from 'clsx';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { addCardToWindowLayoutAction } from '../actions';
import { AppContext } from '../AppContext';
import {
  CARD_DROPPED_IN_NEW_WINDOW,
  layoutBroadcastChannel,
} from './communication';

export interface Props {
  children: ReactNode | ReactNode[];
}

const classes = mergeStyleSets({
  root: {
    height: '100%',
    width: '100%',
  },
  dragOver: {
    border: '2px dashed',
    backgroundColor: SharedColors.orange10,
  },
});

export const GlobalDropZone: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { children } = props;
  const [dropZoneClass, setDropZoneClass] = useState<string | undefined>(
    undefined
  );
  const [{ showGlobalDropFocus }, dispatch] = useContext(AppContext);

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setDropZoneClass(classes.dragOver);
  };

  const onDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    dispatch(addCardToWindowLayoutAction(cardId));
    layoutBroadcastChannel.postMessage(
      `${CARD_DROPPED_IN_NEW_WINDOW}:${cardId}`
    );
    setDropZoneClass(undefined);
  };

  useEffect(() => {
    if (showGlobalDropFocus) {
      setDropZoneClass(classes.dragOver);
    } else {
      setDropZoneClass(undefined);
    }
  }, [showGlobalDropFocus]);

  return (
    <div
      className={clsx(classes.root, dropZoneClass)}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};
