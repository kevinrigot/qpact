import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from '@qpact-app/app.state';
import { selectCvs } from '@qpact-app/app.selector';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent {

  cvs$ = this.store.pipe(select(selectCvs));

  constructor(private store: Store<State>) { }

}
