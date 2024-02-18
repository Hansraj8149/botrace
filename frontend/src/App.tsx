import Signin from "./components/Signin"


import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";

const firebaseConfig = {
  apiKey: "AIzaSyAHib3rDfec1lWuM59gmhK3vclbQgdONQ0",
  authDomain: "botrace-3da3b.firebaseapp.com",
  projectId: "botrace-3da3b",
  storageBucket: "botrace-3da3b.appspot.com",
  messagingSenderId: "976300951061",
  appId: "1:976300951061:web:8833f18c11e05664d4701c",
  measurementId: "G-TYKE4ZDSKM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const App = () => { 
  const setUser = useSetRecoilState(userAtom);
  
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, [])
  return (
    <div >
      <Signin/>
    </div>
  )
}

export default App
