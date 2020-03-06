import React from 'react';
import RootStore from './stores/root.store';
import StoreA from './stores/a.store';
import StoreB from './stores/b.store';

const StoreContext = React.createContext<RootStore | null>(null);

type StoreProviderProps = {
  children?: React.ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const rootStore = new RootStore();

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

function useStore(): RootStore {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore: !store, did you forget StoreProvider?');
  }
  return store;
}

export function useStoreA(): StoreA {
  return useStore().storeA;
}

export function useStoreB(): StoreB {
  return useStore().storeB;
}

export default StoreProvider;
