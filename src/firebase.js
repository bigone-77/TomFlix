// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB12iI94WCHKk9QcCvlAiTBX0ZSXIB_Whw",
    authDomain: "tommyflix-68c63.firebaseapp.com",
    projectId: "tommyflix-68c63",
    storageBucket: "tommyflix-68c63.appspot.com",
    messagingSenderId: "818402862346",
    appId: "1:818402862346:web:c1ac834302e7e405ea46f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;