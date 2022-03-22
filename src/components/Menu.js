import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Menu = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <ul className="hidden md:flex">
      {!user && (
        <>
          <Link to="/login" className="p-2">
            <button className="nav-btn">Login</button>
          </Link>
          <Link to="/signup" className="p-2">
            <button className="nav-btn">Signup</button>
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
  );
};

export default Menu;
