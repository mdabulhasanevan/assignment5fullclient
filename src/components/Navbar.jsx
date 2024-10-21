import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContextLogin } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContextLogin);
  console.log(user);
  const handleLogout = () => {
    logOutUser();
    Navigate("/login")
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/product">All Products</Link></li>
              {/* <li><Link to="/about">about</Link></li> */}
            </ul>
          </div>
          <Link to="/" className="btn bg-white hover:bg-white text-xl">BuyMe
          <img src="\src\assets\logo.jpg" className="hidden sm:block w-14"/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/product">All Products</Link></li>
            {/* <li><Link to="/about">about</Link></li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2 ">
                {/* <img src={`${user?.photoURL}`} /> */}
                
                {/* <img src={user?.photoURL} className="w-7 rounded-full " /> */}
                <Link to="/dashboard"> 
                {/* <span>{user?.displayName}</span> */}
                <span>Dashboard</span>
                </Link>
                {/* <button onClick={handleLogout} className="btn">Logout </button> */}
              </div>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;