import { action, observable, makeObservable } from 'mobx';

class StoreA {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action.bound,
      decrement: action.bound,
    });
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}

export default StoreA;
