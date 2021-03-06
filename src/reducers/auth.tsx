import { AUTH_USER, AUTH_ERROR, EDIT_USER } from '../actions/types';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default function (state = INITIAL_STATE, action: any) {   
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        case EDIT_USER:
            return { ...state, authenticated: action.payload }
        default:
            return state;
    };
};