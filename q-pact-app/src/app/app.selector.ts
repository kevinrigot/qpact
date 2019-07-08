import { State } from './app.state';
import { createSelector } from '@ngrx/store';
import { Cv } from '@api/models';
import { find } from 'lodash/fp';


export const selectCvs = (state: State) => state.cvs;
const selectSelectedCvId = (state: State) => state.selectedCvId;
export const selectSelectedCv = createSelector(
    selectCvs,
    selectSelectedCvId,
    (cvs: Cv[], id: string) => find({id}, cvs)
);
