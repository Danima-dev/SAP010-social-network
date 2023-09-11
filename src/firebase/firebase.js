import {auth, db} from './firebase.config'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,  } from "firebase/auth";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";



// https://firebase.google.com/docs/web/setup#available-libraries

export function entrar (email, password){
return signInWithEmailAndPassword(auth, email, password)

.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Deu certo!!")
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Deu errado!!")
    throw error;
  });
};

export function cadastrar (name, email, password){
createUserWithEmailAndPassword(auth, email, password)
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

  
