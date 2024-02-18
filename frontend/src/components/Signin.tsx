import { signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const Signin = () => {

    async function onSignin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) {
                    return;
                }
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch(() => {
                alert("erorr while signing in");
            });


    }

  return (
    <div>
      {/* <input type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)}/> */}
      <button onClick={onSignin}>signin</button>
    </div>
  )
}

export default Signin
