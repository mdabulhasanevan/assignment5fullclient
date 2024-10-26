import { useContext, useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContextLogin } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const ProductDetails = () => {
    const Navigate = useNavigate();
    
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const productDetails = useLoaderData();
    //const { id } = useParams();
    // console.log(id);
    console.log(productDetails);
    const { user } = useContext(AuthContextLogin);
    //const { title, image_url, rating, details, category_id } = productDetails;

    
    function handleCustomerPurchase(event) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const productname = productDetails.name;
        const productid = productDetails._id;
        const category = productDetails.category;

        const price = productDetails.price;

        const customer = user.displayName;
        const customerid = user.uid;
        const mobile = user.phone;
        const email = user.email;

        const isgift = form.get("isgift");
        const address = form.get("address");
        const quantity = form.get("quantity");

        const paymentstatus = false;


        const purchase = { productname, paymentstatus, productid, category, mobile, customer, email, customerid, isgift, address, price, quantity };
        console.log(purchase);

        fetch("http://localhost:5000/addCustomerPurchase", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(purchase),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Purchase Order Submited Successfully", {
                        position: "top-right",
                    });
                }
                event.target.reset();
                document.getElementById('my_modal_3').close();

            });
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className=''>
                    <img className=' '
                        src={productDetails.photo}
                        alt="Shoes" />

                </figure>
                <div className="p-10 grid grid-cols-1 md:grid-cols-2">
                    <div className=''>
                        <h2 className="card-title">{productDetails.name}</h2>
                        <p><span className='text-center font-bold'>category:     </span>{productDetails.category}</p>
                        <p>{productDetails.discription}</p>
                        <hr></hr>
                        <p><span className='font-bold'>rating:    </span>{productDetails.rating}</p>

                        <p><span className='font-bold'>price:      </span>{productDetails.price}</p>



                        <p><span className='font-bold'>ratings:    </span>{productDetails.rating}</p>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>



                    </div>

                </div>

                <div className="card-actions justify-center mb-5">
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Buy Now</button>
                </div>

            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Checkout!</h3>

                    {user ? (
                        <>
                            <form onSubmit={handleCustomerPurchase} className="w-full ">
                                <div className="">
                                    {/* <img src={`${user?.photoURL}`} /> */}
                                    <h1 className="font-bold">Product</h1>
                                    <h1 className="font-bold">Product Name: {productDetails.name}  - Price ({productDetails.price} .tk)</h1>

                                    <br></br>
                                    <hr></hr>
                                    <h1 className="font-bold">Customer Detail</h1>
                                    <img src={user?.photo} className="w-7 rounded-full" />
                                    <span className="font-bold">{user?.displayName}</span>
                                    <p>Mobile:{user?.phone}</p>
                                    <p>Email:{user?.email}</p>
                                    <label className="mt-3 input input-bordered flex items-center gap-2">
                                        Addrss
                                        <input type="text" name="address" id="address" className="grow" placeholder="Dhaka" />
                                    </label>

                                    <label className="mt-3 input input-bordered flex items-center gap-2">
                                        Quantity
                                        <input type="number" defaultValue={1} name="quantity" id="quantity" className="grow" placeholder="1" />
                                    </label>
                                    <div className="form-control w-40">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Is For Gift</span>
                                            <input type="checkbox" name="isgift" id="isgift" className="toggle toggle-primary" />
                                        </label>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : (
                        <Link to="/login" className="btn">
                            Login
                        </Link>
                    )}


                </div>
            </dialog>
        </div>



    );
};

export default ProductDetails;