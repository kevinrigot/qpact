import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddCvComponent } from './add-cv/add-cv.component';

const routes: Routes = [
  { path: '', component: AddCvComponent }
];

@NgModule({
  declarations: [AddCvComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
