import { FaHandshake } from "react-icons/fa6";
import { GrPlan } from "react-icons/gr";
import { BiSolidNetworkChart, BiTask, BiSolidPaperPlane } from "react-icons/bi";


const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-gray-700 to-gray-300 text-black mb-3 rounded-md">
                <div className="collapse-title flex items-center gap-3 text-base md:text-xl font-medium">
                    <FaHandshake className="text-black"></FaHandshake>
                    <h2>First meeting</h2>
                </div>
                <div className="collapse-content">
                    <p className="font-normal text-xs lg:text-base lg:font-medium">The main agenda of our initial meeting is to gather information: the more, the merrier! We will discuss all the technical questions related to your esports event goals such as target audience, size, budget, and deadlines. This meeting is a two-way street of information with the goal of both parties feeling confident in the project.</p>
                </div>
            </div>
            <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="1500" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-gray-700 to-gray-300 text-black mb-3 rounded-md">
                <div className="collapse-title text-base md:text-xl flex items-center gap-3 font-medium">
                    <GrPlan></GrPlan>
                    <h2>Preparation & planning</h2>
                </div>
                <div className="collapse-content">
                    <p className="font-normal text-xs lg:text-base lg:font-medium">After the initial discussion, Goexanimo will begin the planning phase. This includes pre-production such as project team assembly, creation of the project timeline, game research, processing of visual and marketing materials, scenario draft, competition rulebook, and registration flow creation: all of which are going to be presented to you in a project plan.</p>
                </div>
            </div>
            <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-gray-700 to-gray-300 text-black mb-3 rounded-md">
                <div className="collapse-title text-base md:text-xl flex items-center gap-3 font-medium">
                    <BiSolidNetworkChart className="text-black"></BiSolidNetworkChart>
                    <h2>Production begins</h2>
                </div>
                <div className="collapse-content">
                    <p className="font-normal text-xs lg:text-base lg:font-medium">Once the agreement is signed and budgets are approved, your event will begin to take shape as we put plans into action! Our project managers will make sure that everything goes according to the project plan hitting all the milestones along the way. The best part? You will literally see your esports event transform from an idea to reality!</p>
                </div>
            </div>
            <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="2500" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-gray-700 to-gray-300 text-black mb-3 rounded-md">
                <div className="collapse-title text-base md:text-xl flex items-center gap-3 font-medium">
                    <BiTask className="text-black"></BiTask>
                    <h2>The big moment</h2>
                </div>
                <div className="collapse-content">
                    <p className="font-normal text-xs lg:text-base lg:font-medium">Your event date has finally arrived! Goexanimo will bring the world-class experience of over 400 events to ensure that your event is both amazing and flawless. Our team will execute the event plan down to the smallest of details: and you will be able to see all the project operations first-hand!</p>
                </div>
            </div>
            <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-gray-700 to-gray-300 text-black mb-3 rounded-md">
                <div className="collapse-title text-base md:text-xl flex items-center gap-3 font-medium">
                    <BiSolidPaperPlane className="text-black"></BiSolidPaperPlane>
                    <h2>Prize delivery & reporting</h2>
                </div>
                <div className="collapse-content">
                    <p className="font-normal text-xs lg:text-base lg:font-medium">After the event has officially concluded, we will take care of delivering the prizes if necessary while all the social media accounts will be updated with post-event messaging. Finally, our project managers will conduct a thorough information gathering and analysis about the event and compile it into a post-event report that is going to be presented to you.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;