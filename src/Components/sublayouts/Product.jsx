import { Link } from "react-router-dom";

const Product = ({ product }) => {
    console.log(product);
    const { id, image, name, short_description, price } = product
    return (
        <div>
            <div className="card w-96 mx-auto bg-gradient-to-r from-gray-200 to-gray-500 shadow-xl">
                <figure><img className="w-[400px] h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions mt-3">
                        <Link to={`/service/${id}`}>
                            <button className="btn  btn-outline ">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;