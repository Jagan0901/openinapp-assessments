import {signInWithPopup} from "firebase/auth";
import { auth,provider } from "../../config/authentication";
import { useNavigate } from 'react-router-dom';

export const Login = ({nav}) => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.photoURL;

          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("profilePic", profilePic);
          navigate("/dashboard")
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    };
  return (
    <div className="login">
      <h1>Sign In</h1>
      <p>Sign in to your account</p>
      <div className="login-auth">
        <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
