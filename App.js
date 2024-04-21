import React, { useState, useEffect } from 'react';
import './App.css';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      ) : (
        <div>
          <p>User email: {user.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
}
