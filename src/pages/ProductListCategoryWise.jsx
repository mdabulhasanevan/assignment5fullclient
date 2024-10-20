
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const ProductListCategoryWise = () => {
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
                                        src={ProductList.img_url}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {ProductList.title}
                                        <div className="badge badge-secondary"> {ProductList.ratings}</div>
                                    </h2>
                                    <p>Lession:  {ProductList.lession}- Duration: {ProductList.duration}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline"> {ProductList.level}</div>
                                        <div className="badge badge-outline"> {ProductList.author}</div>
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

export default ProductListCategoryWise;