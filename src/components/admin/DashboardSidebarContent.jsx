import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaUsers,
  FaEnvelope,
  FaSignOutAlt,
  FaPenAlt,
} from "react-icons/fa";
import { AuthContextLogin } from "../../provider/AuthProvider";


const DashboardSidebarContent = () => {
  const { user, logOutUser } = useContext(AuthContextLogin);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="p-4">
      {/* User Profile Info */}
      <div className="flex flex-row lg:flex-col items-start gap-2">
        <img
          src={user?.photoUrl}
          alt="User Profile"
          className="w-16 rounded-full"
        />
        <span>{user?.displayName}</span>
        <span className="text-xs">{user?.email}</span>
      </div>
      <hr className="my-4" />

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-4">
        {/* Profile Link */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }
        >
          <FaUser className="inline mr-2" />
          Profile
        </NavLink>

        <NavLink
         to={`/getcustomerpurchaseself/${user?.uid}`}
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }
        >
          <FaUser className="inline mr-2" />
          Purchase History
        </NavLink>

        {!user?.isBlocked && (
          <>
            {" "}
            {/* Admin Links */}
            {user?.isAdmin && (
              <>
                <NavLink
                  to="/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaUsers className="inline mr-2" />
                  All Users
                </NavLink>
                <NavLink
                  to="/createMessage"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaPenAlt className="inline mr-2" />
                  Create Message
                </NavLink>
              </>
            )}
            {/* User Links */}
            {!user?.isAdmin && (
              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                <FaEnvelope className="inline mr-2" />
                Messages
              </NavLink>
            )}
          </>
        )}
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-600 text-sm hover:underline flex items-center"
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebarContent;