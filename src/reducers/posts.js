import {ACTION_CREATE_POST} from '../actions';
import { generateId } from '../utils';

// A reducer is a function that accepts the current state and action,
// then calculates/returns the next new version of state.
export default function posts(state={}, action={type: ''}) {
    switch(action.type){
        case ACTION_CREATE_POST:
            // create a post!
            const id = generateId();
            console.log(`the new id is ${id}`);
            // console.log(`Sounds like you wanna create a post`);
            const newState = {
                ...state,
                // to use a variable as a key in an abject literal,
                //wrap the vaiable in square brackets.
                [id]: action.payload
            };
            // to get the equivalent result, you can use the familar assignment syntax:
            // newState[id] = action.payload;
            return newState;
        break;
        default:
            return state;
        break;
    }
}