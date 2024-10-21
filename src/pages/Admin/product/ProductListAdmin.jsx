import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';


const ProductListAdmin = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    //console.log(loadedUsers);
  
    const handleDelete = (_id) => {
      console.log(_id);
      fetch(`http://localhost:5000/productdelete/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success(" Deleted Successfully", {
              position: "top-right",
            });
            const remainingUsers = users.filter((user) => user._id !== _id);
            setUsers(remainingUsers);
          }
        });
    }; 
  
    return (
      <div className="mt-14">
        <div className="flex justify-center justify-items-center">
          <h1 className="text-3xl font-bold text-center mb-10">
            All Product List: {users.length}
          </h1>
          &nbsp;&nbsp;&nbsp;
          <Link to="/addproduct">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
            py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
            >
              Add Product
            </button>
          </Link>
        </div>
        <table className="border-collapse w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                 Category
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                 Name
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Others
              </th>
  
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    name
                  </span>
                  {user.category}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    category
                  </span>
                  {user.name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    photo
                  </span>
                 <span className='font-bold'>Rating:</span>  {user.rating} <br></br>
                 <span className='font-bold'>Price: </span>  {user.price} <br></br>
                 <span className='font-bold'>description:</span>   {user.discription} <br></br>
                </td>
  
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Actions
                  </span>
                  <Link to={`/editproduct/${user._id}`}>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
            border border-blue-500 hover:border-transparent rounded-none"
                    >
                      Edit
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 
            border border-blue-500 hover:border-transparent rounded-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ProductListAdmin;