import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
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


@NgModule({
  declarations: [
    AppComponent,
    ResumeListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([AppEffect]),
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot<State>(reducers, {initialState: defaultState}),
    StoreDevtoolsModule.instrument({name: 'Q-Pact App'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
