import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbngudQAV5KcUt5jUojN2xkwb5-qw9K64",
  authDomain: "mars-sample01.firebaseapp.com",
  projectId: "mars-sample01",
  storageBucket: "mars-sample01.firebasestorage.app",
  messagingSenderId: "901144516061",
  appId: "1:901144516061:web:658d6f44111398b916d234",
  measurementId: "G-RQQ9P9YL78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

// Configure Google Auth Provider with scopes
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, provider).catch((error) => {
    console.error("Auth Error:", error);
    throw error;
  });
};