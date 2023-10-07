import { useLoaderData } from "react-router-dom";
import Aboutus from "../../sublayouts/Aboutus";
import Banner from "../../sublayouts/Banner";
import Faq from "../../sublayouts/FAQ";
import Footer from "../../sublayouts/Footer";
import Products from "../../sublayouts/Products";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Products services={services}></Products>
            <Aboutus></Aboutus>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;