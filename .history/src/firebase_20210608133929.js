import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDV-7ly9RvRDbrGZ4V549QUL2sgqX26avI",
    authDomain: "todo-8287b.firebaseapp.com",
    projectId: "todo-8287b",
    storageBucket: "todo-8287b.appspot.com",
    messagingSenderId: "606482463201",
    appId: "1:606482463201:web:65f9c9d7b8bd9372247aa0",
    measurementId: "G-SGEYY6EL5W"
})

const db = firebase.firestore();
const storage = firebase.storage();

export {db} 