import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const ProductList = () => {
    const ProductLists = useLoaderData();
    console.log(ProductLists);
    return (
        <div>
            <Helmet>
                <title>Product List</title>
            </Helmet>
            <div className="p-3">
                <h2 className="font-bold text-center p-3">Our Products {ProductLists.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        ProductLists.map((ProductList) => (

                            <div key={ProductList._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img className="w-screen h-60"
                                        src={ProductList.photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {ProductList.name}
                                        <div className="badge badge-secondary"> {ProductList.rating}</div>
                                    </h2>
                                    <p>Price:  {ProductList.price}-<br></br> Description: {ProductList.discription}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline"> {ProductList.price}</div>
                                        <div className="badge badge-outline"> {ProductList.category}</div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/productdetails/${ProductList._id}`}><button className="btn btn-sm btn-primary">View Products</button> </Link>
                                    </div>
                                </div>
                            </div>

                        ))

                    }
                </div>

            </div>
        </div>
    );
};

export default ProductList;