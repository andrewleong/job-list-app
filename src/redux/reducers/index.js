import {
    SET_KEYWORDS,
} from '../actions';

const INITIAL_STATE = {
    keywords: '',
}

export default function Reducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case SET_KEYWORDS: {
            const { keywords } = action;
            return {
                ...state,
                keywords
            }
        }
        default:
            return state;
    }
}
