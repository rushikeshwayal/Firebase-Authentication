import React, { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAuth } from "./firebase/firebase";

function AfterLogin() {
  const navigate = useNavigate();
  const currentUser = useAuth(); // Directly use the returned value from useAuth()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("SignOut Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Check user auth state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to home if the user is not logged in
        navigate("/");
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      {currentUser ? (
        <div className="flex justify-center gap-10 items-center min-h-screen">
          <h1 className="text-6xl text-bold">Welcome</h1>
          <button
            className="bg-black text-white text-bold text-xl px-5 py-3"
            onClick={handleLogout}
          >
            Log-out
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default AfterLogin;
