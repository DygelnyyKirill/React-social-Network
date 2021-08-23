// const posts = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 12},
//     {id: 2, message: 'It is my first post.', likesCount: 20},
//     {id: 3, message: 'All wery good', likesCount: 25},
//     {id: 4, message: 'Bla', likesCount: 25},
//     {id: 5, message: 'BlaBla', likesCount: 30},
//     {id: 6, message: 'BlaBlaBla', likesCount: 35},
// ]

// const dialogs = [
//     {id: 1, name: 'Kiril'},
//     {id: 2, name: 'Alex'},
//     {id: 3, name: 'Anton'},
//     {id: 4, name: 'Oleg'},
//     {id: 5, name: 'Evgen'},
//     {id: 6, name: 'Kate'},
// ]

// const messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'Happy'},
//     {id: 4, message: 'yo'},
//     {id: 5, message: 'yoyo'},
//     {id: 6, message: 'yoyoyoy'},
// ]

const state = {
    contentPage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post.', likesCount: 20},
            {id: 3, message: 'All wery good', likesCount: 25},
            {id: 4, message: 'Bla', likesCount: 25},
            {id: 5, message: 'BlaBla', likesCount: 30},
            {id: 6, message: 'BlaBlaBla', likesCount: 35},
        ]
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Kiril'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Anton'},
            {id: 4, name: 'Oleg'},
            {id: 5, name: 'Evgen'},
            {id: 6, name: 'Kate'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Happy'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yoyo'},
            {id: 6, message: 'yoyoyoy'},
        ],
    },
    friendPage: {
        friends: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'Evgen'},
        ]
    }
}

export default state