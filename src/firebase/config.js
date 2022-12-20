import firebase from 'firebase';

import 'firebase/auth'
import 'firebase/firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkdQZ_n-IVh5mPnriWwZzTt2j_Yk9KHRg",
  authDomain: "olx-clone-1ad1b.firebaseapp.com",
  projectId: "olx-clone-1ad1b",
  storageBucket: "olx-clone-1ad1b.appspot.com",
  messagingSenderId: "141764055003",
  appId: "1:141764055003:web:0f8140011ca4f6d4ee21fe"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);



