import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
//accessible VIA CONSOLE.FIREBASE.GOOGLE.COM (17JORDOSHIU@GMAIL.COM)
//FIREBASE CONTENTS :
//  https://console.firebase.google.com/u/0/project/blog-starter-app-jordan-base/firestore/data/~2Farticles~2F0CmxPTfc15XH33IJZTQ9
const firebaseConfig = {
  apiKey: "AIzaSyCy8k-vRXTUfXsoQ3PqZBPUAEzyXv67GM0",
  authDomain: "blog-starter-app-jordan-base.firebaseapp.com",
  projectId: "blog-starter-app-jordan-base",
  storageBucket: "blog-starter-app-jordan-base.appspot.com",
  messagingSenderId: "579389293870",
  appId: "1:579389293870:web:c870136fc08037c975e6bf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
