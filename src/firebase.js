import firebase from "firebase";

// !!!! YOU NEED TO INSERT YOUR FIREBASE CONFIG HERE
const firebaseConfig = {};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
