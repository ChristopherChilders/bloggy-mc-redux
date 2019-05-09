// Action Types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';


// Action Creators
export function createPost(data){
    // assumes that the `data` argument looks like this:
    // {
    //     title: 'loremipsum',
    //     content: 'dolor oakley set',
    // }
    return{
        type: ACTION_CREATE_POST,
        payload
    };
};

export function updatePost(){

};

export function deletePost(){

};