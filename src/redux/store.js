const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });

// const ADD_MESSAGE = 'ADD_MESSAGE';
// const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';
// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
// export const updateNewMessageActionCreator = (text) => {
//     return { type: UPDATE_NEW_TEXT_MESSAGE, newMessageBody: text };
// }
let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, post: "What up", likesCount: 3 },
                { id: 2, post: "It's my second fucking post", likesCount: 2 },
                { id: 3, post: "Well, it's coming", likesCount: 5 },
                { id: 4, post: "you didn't see it's coming", likesCount: 0 },
                { id: 5, post: "Cock", likesCount: 7 },
                { id: 6, post: "AssEater", likesCount: 5 },
            ],
            newPostText: 'what the fuck man?'
        },
        // messagesPage: {
        //     dialogs: [
        //         { id: 1, name: "Bitch" },
        //         { id: 2, name: "FUck" },
        //         { id: 3, name: "Fahuk" },
        //         { id: 4, name: "Cunt" },
        //         { id: 5, name: "Cock" },
        //         { id: 6, name: "AssEater" },
        //     ],
        //     messages: [
        //         { id: 1, message: "What the fuck, man?" },
        //         { id: 2, message: "I'll finish you off" },
        //         { id: 3, message: "Don't make me run" },
        //         { id: 4, message: "I want some coffee" },
        //         { id: 5, message: "Gimme a break" },
        //         { id: 6, message: "I hope you like the words 'pick up the cell'" },
        //     ],
        //     newMessageBody: 'go to the fucking gym'
        // },
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TEXT_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        // } else if (action.type === UPDATE_NEW_TEXT_MESSAGE) {
        //     this._state.messagesPage.newMessageBody = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === ADD_MESSAGE) {
        //     let body = this._state.messagesPage.newMessageBody;
        //     let newMessage = {
        //         id: 7,
        //         message: body
        //     };
        //     this._state.messagesPage.messages.push(newMessage);
        //     this._state.messagesPage.newMessageBody = '';
        //     this._callSubscriber(this._state);
        // }
    }
};
export default store;
window.store = store;