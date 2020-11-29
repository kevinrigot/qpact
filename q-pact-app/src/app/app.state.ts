import { Cv } from '@api';

export interface State{
    cvs: Cv[];
    selectedCvId?: string;

}

export const defaultState: State = {
    cvs: []
}
