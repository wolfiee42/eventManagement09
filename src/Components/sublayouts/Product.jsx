import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Product = ({ product }) => {
    const { id, image, name, short_description, price } = product
    return (
        <div data-aos="fade-down">
            <div className="card w-60 m-5 lg:w-96 mx-auto bg-gradient-to-r from-gray-200 to-gray-500 shadow-xl">
                <figure><img className="w-[250px] h-[125px] lg:w-[400px] lg:h-[250px]" src={image} alt="" /></figure>
                <div className="lg:card-body p-3">
                    <h2 className="font-semibold lg:text-xl">{name}</h2>
                    <p>{short_description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions mt-3">
                        <Link to={`/service/${id}`}>
                            <button className="btn text-xs btn-outline ">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object
}
export default Product;