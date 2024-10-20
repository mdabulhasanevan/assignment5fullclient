import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const courseDetails = useLoaderData();
    //const { id } = useParams();
   // console.log(id);
    console.log(courseDetails);

    //const { title, image_url, rating, details, category_id } = courseDetails;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className=''>
                    <img className=' '
                        src={courseDetails.img_url}
                        alt="Shoes" />

                </figure>
                <div className="p-10 grid grid-cols-1 md:grid-cols-2">
                    <div className=''>
                        <h2 className="card-title">{courseDetails.title}</h2>
                        <p><span className='text-center font-bold'>author:     </span>{courseDetails.author}</p>
                        <p>{courseDetails.details}</p>
                        <hr></hr>
                        <p><span className='font-bold'>lession:    </span>{courseDetails.lession}</p>
                        <p><span className='font-bold'>student:    </span>{courseDetails.student}</p>
                        <p><span className='font-bold'>duration:   </span>{courseDetails.duration}</p>
                        <p><span className='font-bold'>price:      </span>{courseDetails.price}</p>
                        <p><span className='font-bold'>assessments:</span>{courseDetails.assessments}</p>


                        <p><span className='font-bold'>level:      </span>{courseDetails.level}</p>
                        <p><span className='font-bold'>ratings:    </span>{courseDetails.ratings}</p>

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

                        <p><span className='font-bold'>assessments:</span>{courseDetails.assessments}</p>
                        

                    </div>
                    <div >
                        <div className='flex items-center justify-center '>
                        <img className=' w-10/12 rounded-full' src={courseDetails.author_img_url} alt="author_img_url" />
                        </div>
                      

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;