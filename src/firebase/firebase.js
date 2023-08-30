import {auth, db} from './firebase.config'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

export function entrar (email, password){
signInWithEmailAndPassword(auth, email, password)

.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Deu certo!!")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Deu errado!!")
    // ..
  });
};

export function cadastrar (name, email, password){
createUserWithEmailAndPassword(auth, name, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}