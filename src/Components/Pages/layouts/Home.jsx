import { useLoaderData } from "react-router-dom";
import Aboutus from "../../sublayouts/Aboutus";
import Banner from "../../sublayouts/Banner";
import Faq from "../../sublayouts/FAQ";
import Footer from "../../sublayouts/Footer";
import Products from "../../sublayouts/Products";
import Surved from "../../sublayouts/surved";

const Home = () => {
    const services = useLoaderData();
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <Products services={services}></Products>
            <Aboutus></Aboutus>
            <Surved></Surved>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;