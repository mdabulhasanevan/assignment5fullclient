
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import ProductList from './ProductList';

const ProductListCategoryWise = () => {
    const ProductLists = useLoaderData();
    console.log(ProductLists);
    return (
        <div>
             <Helmet>
                <title>Product List</title>
            </Helmet>
         <ProductList/>
        </div>
    );
};

export default ProductListCategoryWise;