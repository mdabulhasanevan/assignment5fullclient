import React, { useContext, useState } from 'react';
import { AuthContextLogin } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useContext(AuthContextLogin);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    phone: "",
    photoURL: "",
    address: "",
  });

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...user,
        displayName: formData.displayName,
        phone: formData.phone,
        photoUrl: formData.photoUrl,
        address: formData.address,
      };

      // Make API call to update user information
      const response = await fetch(
        `https://the-master-full-stack-project-server.vercel.app/user/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user information");
      }

      // Close the modal upon successful update
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("There was an error updating the user. Please try again.");
    }
  };

  // Open the edit modal with the user's current details
  const handleOpenEditModal = () => {
    setFormData({
      displayName: user.displayName || "",
      phone: user.phone || "",
      photoUrl: user.photoUrl || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg relative">


      <div>
        <Helmet>
          <title>  Dashboard</title>
        </Helmet>
      </div>


      <div className="flex flex-col items-center">
        <img
          src={user?.photoUrl}
          alt="Profile"
          className="w-36 h-36 object-cover rounded-full shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
        <div>
          <strong
            className={!user?.isBlocked ? "text-green-500" : "text-red-500"}
          >
            {!user?.isBlocked ? "Active" : "Blocked"}
          </strong>
        </div>
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold text-gray-700">Profile Details</h3>
        <hr />
        <ul className="mt-3 text-gray-600 space-y-2">
          <li>
            <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Phone:</strong> {user?.phone || "N/A"}
          </li>
          <li>
            <strong>Address:</strong> {user?.address || "N/A"}
          </li>
          <hr />
          <li>
            <strong>Unique ID:</strong> {user?.uid}
          </li>
        </ul>
      </div>
    </div>

  )
};

export default Dashboard;