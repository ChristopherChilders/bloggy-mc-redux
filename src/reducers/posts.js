import {ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST} from '../actions';
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
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            }
            delete deleteState[action.payload.id];
            return deleteState;
        break;
        case ACTION_UPDATE_POST:
        // const { id, title, content } = action.payload;
        const postToUpdate = state[action.payload.id];
        if (postToUpdate){
            return {
                ...state,
                [action.payload.id]: {
                    title: action.payload.title || postToUpdate.title,
                    content: action.payload.content || postToUpdate.content,
                }
            };
        } else {
            return state;
        }
        break;
        default:
            return state;
        break;
    }
}