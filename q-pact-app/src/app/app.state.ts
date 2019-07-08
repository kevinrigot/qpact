import { Cv } from '@api/models';

export interface State{
    cvs: Cv[];
    selectedCvId?: string;

}

export const defaultState: State = {
    cvs: []
}