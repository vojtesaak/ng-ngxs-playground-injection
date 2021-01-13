import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  imports: [
    BrowserModule,
    CounterModule,
    NgxsModule.forRoot([], {selectorOptions: {suppressErrors: false}})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
