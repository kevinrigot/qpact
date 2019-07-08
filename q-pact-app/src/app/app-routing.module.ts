import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeListComponent } from './resume-list/resume-list.component';

const routes: Routes = [
  { path: '', component: ResumeListComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    //, { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
