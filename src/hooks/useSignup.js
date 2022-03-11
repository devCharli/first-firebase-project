import { useEffect, useState, useRef } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // const [isCanceled, setIsCanceled] = useState(false);
  let isCanceled = useRef(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("could not complete signup");
      }

      await res.user.updateProfile({ displayName });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCanceled) {
        setIsPending(false);
        setError(null);
        // isCanceled = false, !isCanceled = false
      } else {
      }
    } catch (err) {
      if (!isCanceled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    // return () => setIsCanceled(true);
    return () => {
      isCanceled.current = true;
    };
  }, []);
  return { error, isPending, signup };
};
