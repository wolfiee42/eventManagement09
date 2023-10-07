import Product from "./Product";
import PropTypes from 'prop-types';


const Products = ({ services }) => {
    return (
        <div className="max-w-7xl mx-auto my-20 grid grid-cols-3 gap-10">
            {
                services.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};
Products.propTypes = {
    services: PropTypes.object
}
export default Products;