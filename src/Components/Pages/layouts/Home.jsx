import Aboutus from "../../sublayouts/Aboutus";
import Banner from "../../sublayouts/Banner";
import Faq from "../../sublayouts/FAQ";
import Footer from "../../sublayouts/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;