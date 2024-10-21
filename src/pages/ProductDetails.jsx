import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContextLogin } from "../provider/AuthProvider";


const ProductDetails = () => {
    const productDetails = useLoaderData();
    //const { id } = useParams();
    // console.log(id);
    console.log(productDetails);
    const { user } = useContext(AuthContextLogin);
    //const { title, image_url, rating, details, category_id } = productDetails;
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
                    <div >
                       


                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Buy Now</button>
                        </div>

                    </div>
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
                    <p className="py-4">
                        {user ? (
                            <>
                                <div className="">
                                    {/* <img src={`${user?.photoURL}`} /> */}
                                    <h1 className="font-bold">Product</h1>
                                    <h1>Product Name: {productDetails.name}</h1>
                                    <div className="form-control w-40">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Is For Gift</span>
                                            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                        </label>
                                    </div>
                                    <select className="select select-primary ">
                                    <option disabled selected>Quentity</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <br></br>
                                    <hr></hr>
                                    <h1 className="font-bold">Customer Detail</h1>
                                    <img src={user?.photo} className="w-7 rounded-full" />
                                    <span className="font-bold">{user?.displayName}</span>
                                    <p>Mobile:{user?.mobile}</p>
                                    <p>Email:{user?.email}</p>
                                    <label className="mt-3 input input-bordered flex items-center gap-2">
                                        Addrss
                                        <input type="text" className="grow" placeholder="Dhaka" />
                                    </label>
                                    <div className="card-actions justify-end">
                                        <button className="mt-3 btn btn-primary" onClick={() => {}}>Submit</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Link to="/login" className="btn">
                                Login
                            </Link>
                        )}

                    </p>
                </div>
            </dialog>
        </div>



    );
};

export default ProductDetails;