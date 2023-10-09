import Marquee from "react-fast-marquee";

const Surved = () => {
    return (
        <div className="py-10 my-8 bg-gradient-to-r from-gray-700 to-gray-200">
            <h2 className="text-xl lg:text-3xl text-center mb-5 text-white">We hosted event of</h2>
            <div className="max-w-7xl mx-auto">
                <Marquee>
                    <img className="w-[100px] lg:w-[200px] mr-40" src="https://i.ibb.co/pds7XJd/fifa-removebg-preview.png" alt="" />
                    <img className="w-[100px] lg:w-[200px] mr-40" src="https://i.ibb.co/302chb3/hp-removebg-preview.png" alt="" />
                    <img className="w-[100px] lg:w-[200px] mr-40" src="https://i.ibb.co/wMJf3rZ/op-removebg-preview.png" alt="" />
                    <img className="w-[100px] lg:w-[200px] mr-40" src="https://i.ibb.co/rdqvBfW/valo-removebg-preview.png" alt="" />
                    <img className="w-[100px] lg:w-[200px] mr-40" src="https://i.ibb.co/s1B3q8d/pubg-removebg-preview.png" alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Surved;





