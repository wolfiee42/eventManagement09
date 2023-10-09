import { AiFillFacebook,AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-200 to-gray-700 footer footer-center p-5 text-primary-content">
            <aside>
                <img className="w-[200px] h-[100px]" src="https://i.ibb.co/L0GXprK/Screenshot-239-removebg-preview.png" alt="" />
                <p className="font-semibold text-black">
                    Wolfie Industries Ltd.
                    <br />
                    Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/JhankarMahbub"><AiFillFacebook className="w-8 h-8"></AiFillFacebook></a>
                    <a href="https://www.youtube.com/@JhankarMahbub/featured"><AiFillYoutube className="w-8 h-8"></AiFillYoutube></a>
                    <a href="https://twitter.com/jhankar_mahbub"><AiFillTwitterSquare className="w-8 h-8"></AiFillTwitterSquare></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;