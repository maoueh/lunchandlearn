// import * as firebase from 'firebase'
// const firebaseConfig = {
//   apiKey: 'AIzaSyCXsi0LFNya2nrbwA9pXfGWhkKIKhvaTEw',
//   authDomain: 'lunch-and-learn-43785.firebaseapp.com',
//   databaseURL: 'https://lunch-and-learn-43785.firebaseio.com',
//   projectId: 'lunch-and-learn-43785',
//   storageBucket: 'lunch-and-learn-43785.appspot.com',
//   messagingSenderId: '451959020698'
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const googleProvider = new firebase.auth.GoogleAuthProvider()
const BASE_URL = 'https://rallycoding.herokuapp.com/api';
export const api = {
    login: () => `${BASE_URL}/login`,
    talks: () => `${BASE_URL}/music_albums`
};
// export const api = {
//   login: () => firebaseApp.auth().signInWithPopup(googleProvider)
// } 
//# sourceMappingURL=api.js.map