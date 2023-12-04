import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBaSCSmL1r9gjnCD16Ar2ld1fCYZ6P6R7c",
  authDomain: "component-chat.firebaseapp.com",
  projectId: "component-chat",
  storageBucket: "component-chat.appspot.com",
  messagingSenderId: "231189496751",
  appId: "1:231189496751:web:bfb5aef074bcb3c5d0255a",
  measurementId: "G-5KG4PN4CYX"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);

