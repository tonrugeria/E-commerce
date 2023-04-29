import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy_lEmqJuNx6icfje5eKZ7jRNkpGbZI5o",
  authDomain: "crwn-clothing-db-40183.firebaseapp.com",
  projectId: "crwn-clothing-db-40183",
  storageBucket: "crwn-clothing-db-40183.appspot.com",
  messagingSenderId: "125131057215",
  appId: "1:125131057215:web:3e6b111f0d5a4d1bdf708a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithGooglePopup(auth, provider);
