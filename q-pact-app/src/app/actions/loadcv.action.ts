import { Action } from '@ngrx/store';
import { Cv } from '@api/models';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_CV_SUCCESS = '[CV] Load success';
export const LOAD_CV_ERROR = '[CV] Load error';

export class LoadCvSuccess implements Action {
    readonly type = LOAD_CV_SUCCESS;
    
    constructor(public payload: Cv[]){ }
}

export class LoadCvError implements Action {
    readonly type = LOAD_CV_ERROR;
    
    constructor(public error: HttpErrorResponse){ }
}
