
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { State } from './app.state';
import { switchMap, catchError, map, delay } from 'rxjs/operators';
import { CvService } from '@api';
import { LoadCvSuccess, LoadCvError } from './actions/loadcv.action';

@Injectable()
export class AppEffect {
    constructor(private store: Store<State>,
        private action$: Actions,
        private api: CvService){ }

    @Effect()
    loadAllCvs = this.action$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        delay(1),
        switchMap(() => this.api.getCv().pipe(
            map((response) => new LoadCvSuccess(response))
        ) )
    )

}
