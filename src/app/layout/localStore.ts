import { WindowLayout } from './types';
import localForage from 'localforage';
import { getWindowName } from './utils';

const LAYOUT_STORAGE = 'layouts';

export const getLayoutsFromLocalStore = async () => {
  const storedLayouts = await localForage.getItem<WindowLayout[]>(
    LAYOUT_STORAGE
  );
  return Promise.resolve(storedLayouts);
};

export const getLayoutFromLocalStore = async (
  windowName: string
): Promise<WindowLayout> => {
  const storedLayouts = await getLayoutsFromLocalStore();

  const storedLayout = storedLayouts?.find((x) => x.name === windowName);
  if (storedLayout) {
    return Promise.resolve(storedLayout);
  }

  const newLayout = {
    name: windowName,
    cards: [],
  };

  return Promise.resolve(newLayout);
};

export const getMyLayoutFromLocalStore = async () => {
  const windowName = getWindowName();
  return await getLayoutFromLocalStore(windowName);
};

export const getLayoutsExcept = async (
  windowName: string
): Promise<WindowLayout[]> => {
  let storedLayouts = await localForage.getItem<WindowLayout[]>(LAYOUT_STORAGE);
  if (!storedLayouts) {
    return [];
  }

  const filteredLayouts = storedLayouts.filter((x) => x.name !== windowName);

  return filteredLayouts;
};

export const saveLayoutToLocalStore = async (
  layout: WindowLayout
): Promise<void> => {
  const layoutsToUpdate = await getLayoutsExcept(layout.name);
  layoutsToUpdate.push(layout);
  await localForage.setItem(LAYOUT_STORAGE, layoutsToUpdate);
};

export const resetLayoutInLocalStore = async (): Promise<void> => {
  await localForage.removeItem(LAYOUT_STORAGE);
};
