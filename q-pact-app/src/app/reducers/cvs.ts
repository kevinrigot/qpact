import { Cv } from '@api/models';
import { LoadCvSuccess, LOAD_CV_SUCCESS } from '@qpact-app/actions/loadcv.action';

export function cvs(state: Cv[] = [], action: LoadCvSuccess){
    if ( action.type === LOAD_CV_SUCCESS){
        return action.payload;
    }else{
        return state;
    }
}