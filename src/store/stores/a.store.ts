import { action, observable } from 'mobx';

class StoreA {
  @observable counter = 0;

  @action.bound
  increment() {
    this.counter++;
  }

  @action.bound
  decrement() {
    this.counter--;
  }
}

export default StoreA;
