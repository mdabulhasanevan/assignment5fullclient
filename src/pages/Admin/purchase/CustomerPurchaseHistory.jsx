import { useState } from "react";
import toast from "react-hot-toast";
import { ImBlocked } from "react-icons/im";
import { IoMdRemoveCircle } from "react-icons/io";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { MdPaid } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const CustomerPurchaseHistory = () => {

    const navigate = useNavigate();

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(loadedUsers);

    const TotalAmount = users.reduce((acc, user) => acc + (user.price * user.quantity), 0);


    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/deleteCustomerPurchase/${_id}`, {
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

    const handleClickedSetPaid = async (selected) => {
        try {
            console.log({ selected });
    
            const updatedSelected = {
                ...selected,
                paymentstatus: !selected?.paymentstatus,
            };
            console.log({ updatedSelected });
    
            const response = await fetch(
                `http://localhost:5000/paymentCustomerPurchase/${selected._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedSelected),
                }
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
    
            if (data.modifiedCount) {
                toast.success("Updated Successfully", {
                    position: "top-right",
                });
    
                // Update local state to reflect the change
                setUsers((prevPurchases) =>
                    prevPurchases.map((purchase) =>
                        purchase._id === selected._id
                            ? { ...purchase, paymentstatus: updatedSelected.paymentstatus }
                            : purchase
                    )
                );
            } else {
                toast.error("No changes were made", {
                    position: "top-right",
                });
            }
        } catch (error) {
            console.error("Error updating payment status:", error);
            toast.error("Failed to update payment status", {
                position: "top-right",
            });
        }
    
        // Optionally navigate after the operation
        navigate("/getcustomerpurchase");
    };
    

    return (
        <div className="mt-14">
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    All Ordered List: {users.length}
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
            <table className="border-collapse w-3/3 mx-auto">
            <caption> <b>Totlal Amount :  ${TotalAmount}/-</b></caption>
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Product
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Customer
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Others
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Payment Status
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
                                    Product
                                </span>
                                <span className='font-bold'>Product Name</span>  : {user.productname}<br></br>
                                <span className='font-bold'>Category</span>  : {user.categoryDetails[0].name}<br></br>

                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Customer
                                </span>
                                <span className='font-bold'>Name</span>  : {user.customer} <br></br>
                                <span className='font-bold'>Mobile</span> : {user.mobile} <br></br>
                                <span className='font-bold'>Email</span> : {user.email} <br></br>
                                <span className='font-bold'>Address</span> : {user.address} <br></br>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Others
                                </span>
                                <span className='font-bold'>isGift:</span>  {user.isgift} <br></br>
                                <span className='font-bold'>Price: </span>  {user.price} <br></br>
                                <span className='font-bold'>Quantity:</span>   {user.quantity} <br></br>
                                <span className='font-bold'>Total:</span> {user.price * user.quantity}/-
                            </td>
                            <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Pay Status
                                </span>
                                <span className='font-bold' >   {user.paymentstatus ? "Paid" : "Not Paid"}</span>
                            </td>

                            <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    Actions
                                </span>
                                <button
                                    onClick={() => handleClickedSetPaid(user)}
                                    className={`p-2 rounded-full bg-green-500 text-white `}
                                    title="Paid"

                                >
                                    <MdPaid />
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    className="p-2 rounded-full bg-rose-300 hover:bg-orange-700 text-white "
                                >
                                    <IoMdRemoveCircle />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerPurchaseHistory;