export const CARD_DROPPED_IN_NEW_WINDOW = 'CARD_DROPPED_IN_NEW_WINDOW';
export const LAYOUT_CHANGED_CHANNEL = 'layout_changed';
export const layoutBroadcastChannel = new BroadcastChannel(
  LAYOUT_CHANGED_CHANNEL
);
