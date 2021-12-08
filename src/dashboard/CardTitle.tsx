import React, { useContext } from 'react';
import { FontSizes, IconButton, mergeStyles, Stack } from '@fluentui/react';
import { saveLayoutToLocalStore } from '../app/layout/localStore';
import { removeCardFromWindowLayoutAction } from '../app/actions';
import { AppContext } from '../app/AppContext';

export interface Props {
  cardId: string;
  title: string;
}

const titleClass = mergeStyles({
  fontSize: FontSizes.mediumPlus,
  margin: 15,
});

export const CardTitle: React.FunctionComponent<Props> = (props: Props) => {
  const { cardId, title } = props;
  const [, dispatch] = useContext(AppContext);

  const handlePopOut = async (): Promise<void> => {
    const layoutForPopOut = {
      name: cardId,
      cards: [cardId],
      restored: true,
    };
    await saveLayoutToLocalStore(layoutForPopOut);
    dispatch(removeCardFromWindowLayoutAction(cardId));
    window.open('http://localhost:3000', cardId, undefined, true);
  };

  return (
    <Stack horizontal horizontalAlign="space-between">
      <div className={titleClass}>{title}</div>
      <div className={titleClass}>
        <IconButton
          iconProps={{ iconName: 'OpenInNewWindow' }}
          title="Pop out"
          ariaLabel="Pop out"
          onClick={handlePopOut}
        />
      </div>
    </Stack>
  );
};
