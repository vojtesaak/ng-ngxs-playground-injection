import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { CounterComponent } from './counter.component';
import { CounterState } from './store/counter';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      CounterState
    ])],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }