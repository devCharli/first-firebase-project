import { useEffect, useState, useRef } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  let isCanceled = useRef(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();

      dispatch({ type: "LOGOUT" });

      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => (isCanceled.current = true);
  }, []);

  return { logout, isPending, error };
};

export default useLogout;
