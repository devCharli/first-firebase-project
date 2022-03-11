import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className="flex justify-between items-center p-2 pr-10">
      <Link to="/" className="text-3xl font-bold p-4">
        <h1>My Wallet</h1>
      </Link>
      <ul>
        {!user && (
          <>
            <Link to="/login" className="p-2">
              <button className="text-slate-600 border-solid rounded-full border-2 border-indigo-600 p-1 pr-2 pl-2 hover:bg-indigo-600 hover:text-white">
                Login
              </button>
            </Link>
            <Link to="/signup" className="p-2">
              <button className="text-slate-600 border-solid rounded-full border-2 border-indigo-600 p-1 pr-2 pl-2 hover:bg-indigo-600 hover:text-white">
                Signup
              </button>
            </Link>
          </>
        )}
        {user && (
          <div className="flex items-center">
            <li className="pr-4 text-xl">Hello, {user.displayName}</li>
            <li>
              <button
                className="border-solid rounded-full border-2 border-indigo-600 p-1 pr-2 pl-2 hover:bg-indigo-600 hover:text-white"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
