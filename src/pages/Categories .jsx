import { Helmet } from "react-helmet";
import { MdFiberNew } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";


const Categories  = () => {
    const Categories = useLoaderData();
    console.log(Categories);
    return (
        <div>
             <Helmet>
                <title>Category List</title>
            </Helmet>
           <div className="p-3">
                <h2 className="font-bold text-center p-3">Product's Categories- {Categories.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {
                        Categories.map((Category) => (

                            <div key={Category._id} className="card bg-base-100 shadow-xl
                            transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                                <figure>
                                    <img className="w-screen h-60 relative"
                                        src={Category.photo}
                                        alt="Shoes" />
                                        <MdFiberNew className="text-blue-400 absolute top-0 right-0 w-10 h-10" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {Category.name}
                                        <div className="badge badge-secondary"> 5/5</div>
                                    </h2>
                                   
                                    <div className="card-actions justify-end">
                                        <Link to={`/productlistbycategory/${Category._id}`}><button className="btn btn-sm btn-primary">View Products</button> </Link>
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

export default Categories ;