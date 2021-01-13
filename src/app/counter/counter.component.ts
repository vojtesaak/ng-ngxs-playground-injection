import { Component, Inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { 
  CounterState,
  Initialize,
  Increment,
  Decrement
} from './store/counter';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Select(CounterState.count) count$: Observable<number>;
  @Select(CounterState.isLoading) isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private counter: CounterState,
  ) {}

  ngOnInit() {
    this.store.dispatch(new Initialize(10));
  }

  increment() {
    this.store.dispatch(new Increment(1));
  }

  decrement() {
    this.store.dispatch(new Decrement(1));
  }
}