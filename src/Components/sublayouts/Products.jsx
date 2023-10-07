import Product from "./Product";

const Products = ({ services }) => {
    return (
        <div className="max-w-7xl mx-auto my-20 grid grid-cols-3 gap-10">
            {
                services.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;