import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyARqaWrAkRlUezZFB9lgQ-HSCOkYRDCGdA",
  authDomain: "nextfire-5ce32.firebaseapp.com",
  projectId: "nextfire-5ce32",
  storageBucket: "nextfire-5ce32.appspot.com",
  messagingSenderId: "350417974378",
  appId: "1:350417974378:web:69e21cf5fe124325394613",
  measurementId: "G-CKME9X1NZT"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
