import { State } from '../app.state';
import { cvs } from './cvs';
import { selectedCvId } from './selected-cv-id';
import { ActionReducerMap } from '@ngrx/store';


export const reducers: ActionReducerMap<State> = {
    cvs,
    selectedCvId
}
