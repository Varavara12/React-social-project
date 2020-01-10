let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hi', likesCount: 34},
                {id: 2, post: 'Its my first project React', likesCount: 20},
                {id: 3, post: 'I like coding of Webstorm', likesCount: 18}
            ],
            newPostText: '65767'
        },
        dialogsPage: {
             dialogs: [
                {id: 1, name: 'Vitalik', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg' },
                {id: 2, name: 'Nikita', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-3.jpg'},
                {id: 3, name: 'Igor', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-4.jpg'},
                {id: 4, name: 'Andrey', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/event-view/user-5.jpg'},
                {id: 5, name: 'Alexa', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-2.jpg'}
            ],

            usersDialogs :{
                 leftUser: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your name'},
                {id: 3, message: 'I live in Ukraine'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 5, message: 'Yo6666'}
            ],
                rightUser: [
                {id: 1, message: 'Hi434'},
                {id: 2, message: 'How is yo34343ur name'},
                {id: 3, message: 'I live in Uk4343434raine'},
                {id: 4, message: 'Yo343434343'},
                {id: 5, message: 'Yo3434'}
            ]
            }
            ,
            newMessageText: '3434'
        },
        UserPage: {
             users: [
                {id: "user_1", name: 'Vitalii Kropotkin', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
                {id: "user_2", name: 'Nikita Voskov', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-3.jpg'},
                {id: "user_3", name: 'Igor Krasilia', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-4.jpg'},
                {id: "user_4", name: 'Andrey Belych', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/event-view/user-5.jpg'},
                {id: "user_5", name: 'Alexa Gold', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-2.jpg'}
            ]
        }
    },
    renderedEntireTree() {
    console.log('rer')
    },
    addPost () {
    let newPost ={
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderedEntireTree(state);
},
    updateNewPostText (newText) {
    state.profilePage.newPostText = newText;
    renderedEntireTree(state);
},
    addMessage  () {
    let newMessage ={
        id: 5,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.usersDialogs.rightUser.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderedEntireTree(state);
},
    updateNewMessageText (newTextMessage) {
    state.dialogsPage.newMessageText = newTextMessage;
    renderedEntireTree(state);
},
    subscribe (observer) {
    renderedEntireTree = observer
}

};

export default state     