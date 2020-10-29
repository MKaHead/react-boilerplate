import { configure } from 'mobx';
import StoreA from './a.store';
import StoreB from './b.store';

configure({
  enforceActions: 'observed',
  computedRequiresReaction: true,
});

class RootStore {
  public storeA: StoreA;
  public storeB: StoreB;

  constructor() {
    this.storeA = new StoreA();
    this.storeB = new StoreB();
  }
}

export default RootStore;
