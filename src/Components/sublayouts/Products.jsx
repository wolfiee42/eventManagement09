import Product from "./Product";
import PropTypes from 'prop-types';


const Products = ({ services }) => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-xl mb-3 font-medium lg:text-3xl lg:font-semibold lg:my-5 text-center">Our Services</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
            {
                services.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
        </div>
    );
};
Products.propTypes = {
    services: PropTypes.array
}
export default Products;