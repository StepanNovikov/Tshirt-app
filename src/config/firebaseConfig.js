import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA6M4xVrgvnKkKiGjVO1pkLdw_SlGr5WSI",
    authDomain: "tshirtapp-545c4.firebaseapp.com",
    databaseURL: "https://tshirtapp-545c4.firebaseio.com",
    projectId: "tshirtapp-545c4",
    storageBucket: "tshirtapp-545c4.appspot.com",
    messagingSenderId: "769502874605",
    appId: "1:769502874605:web:44e2e74251a87a369e35e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
    storage, firebase as default
}
