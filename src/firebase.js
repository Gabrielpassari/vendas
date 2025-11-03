// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2g2QVN21vF7iMN2FKqtsibhCXtZ-D9QA",
  authDomain: "projetofront-41275.firebaseapp.com",
  projectId: "projetofront-41275",
  storageBucket: "projetofront-41275.firebasestorage.app",
  messagingSenderId: "843550232311",
  appId: "1:843550232311:web:47d18e9156b576067d0df2",
  measurementId: "G-YV6X99EGGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//provedor google
const googleProvider = new GoogleAuthProvider();

//funcao login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithGooglePopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//funcao para logout
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };