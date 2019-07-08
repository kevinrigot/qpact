import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { defaultState, State } from './app.state';
import { AppEffect } from './app.effects';
import { EffectsModule } from '@ngrx/effects';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from '@api/api-configuration';
import { ApiModule } from '@api/api.module';

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => { config.rootUrl = 'http://localhost:4200/q-pact'; };
}
export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};


@NgModule({
  declarations: [
    AppComponent,
    ResumeListComponent
  ],
  imports: [
    ApiModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([AppEffect]),
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot<State>(reducers, {initialState: defaultState}),
    StoreDevtoolsModule.instrument({name: 'Q-Pact App'})
  ],
  providers: [
    INIT_API_CONFIGURATION
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
