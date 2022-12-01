import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
//use ../ to go back to parent folder to access smt (firebaseConfig is in parent folder here)
import { auth } from "../firebaseConfig";

export function SignIn() {
  return (
    <button
      className="Header_Button"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Sign In
    </button>
  );
}

export function SignOut() {
  return (
    <div>
      Hello, {auth.currentUser.displayName} &nbsp;
      <button className="Header_Button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
