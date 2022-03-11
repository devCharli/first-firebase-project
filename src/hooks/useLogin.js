import { useEffect, useRef, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogin = (email, password) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // let isCanceled = useRef(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { login, isPending, error };
};

export default useLogin;
