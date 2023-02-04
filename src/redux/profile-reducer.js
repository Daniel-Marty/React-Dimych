const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });

let initialState = {
    posts: [
        { id: 1, post: "What up", likesCount: 3 },
        { id: 2, post: "It's my second fucking post", likesCount: 2 },
        { id: 3, post: "Well, it's coming", likesCount: 5 },
        { id: 4, post: "you didn't see it's coming", likesCount: 0 },
        { id: 5, post: "Cock", likesCount: 7 },
        { id: 6, post: "AssEater", likesCount: 5 },
    ],
    newPostText: 'what the fuck man?'
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            post: state.newPostText,
            likesCount: 0,
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_TEXT_POST) {
        state.newPostText = action.newText;
    }
    return state;
}

export default profileReducer;