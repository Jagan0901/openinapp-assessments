import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmmQNf-iScyp0ppx_eeo8elDLAw3SGudc",
  authDomain: "openinapp-assessment.firebaseapp.com",
  projectId: "openinapp-assessment",
  storageBucket: "openinapp-assessment.appspot.com",
  messagingSenderId: "153126705822",
  appId: "1:153126705822:web:400266e4b6e653e67b398f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// const signInWithGoogle = ()=>{
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;
//         const profilePic = result.user.photoURL;

//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         localStorage.setItem("profilePic", profilePic);
//       })
//       .catch((error) => {
//         console.log(error);
//         window.alert(error);
//       });
// };
