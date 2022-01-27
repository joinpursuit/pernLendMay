import firebase from "firebase/compat/app";
import "firebase/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdbu246r7mt2WIClASHIGMVHADAPetna4",
    authDomain: "lend-c5ba0.firebaseapp.com",
    projectId: "lend-c5ba0",
    storageBucket: "lend-c5ba0.appspot.com",
    messagingSenderId: "509488275653",
    appId: "1:509488275653:web:b61088ad322c9ac2bd50ac",
    measurementId: "G-CTLWP9LSTW"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
// export const signup = async (email, password) => {
//     await auth.createUserWithEmailAndPassword(email, password);
// };
// export const login = async (email, password) => {
//     await auth.signInWithEmailAndPassword(email, password);
// };
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err.message);
    return <div>Help</div>;
  }
};