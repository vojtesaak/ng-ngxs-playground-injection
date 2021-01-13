import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector } from "@ngxs/store";
import { timer, Observable } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import {
  Decrement,
  Increment,
  Initialize,
  Override
} from "../counter/counter.actions";

import { CounterStateModel } from "../counter/counter.state.model";

@State<CounterStateModel>({
  name: "counter2",
  defaults: { count: 0, isLoading: true }
})
@Injectable()
export class CounterState {
  @Selector()
  static count(state: CounterStateModel) {
    return state.count;
  }

  @Selector()
  static isLoading(state: CounterStateModel) {
    return state.isLoading;
  }

  @Action(Initialize)
  initialize(
    context: StateContext<CounterStateModel>,
    { payload }: Initialize
  ) {
    return timer(2000).pipe(tap(() => context.dispatch(new Override(payload))));
  }

  @Action(Increment)
  increment(context: StateContext<CounterStateModel>, { payload }: Increment) {
    const state = context.getState();
    context.patchState({ count: state.count + payload });
    console.log("COUNTER 2 INCREMENT");
  }

  @Action(Decrement)
  decrement(context: StateContext<CounterStateModel>, { payload }: Decrement) {
    const state = context.getState();
    context.patchState({ count: state.count - payload });
  }
}
