import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../uilities/utilities";
import { useEffect, useState } from "react";

const PurchasedService = () => {
    const [items, setItem] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        const savedData = getStoredData();
        const purchased = data.filter(datum => savedData.includes(datum.id))
        setItem(purchased)
    }, [data])
    console.log(items);

    return (
        <div  data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="grid lg:grid-cols-2">
            {
                items.map(item => <>
                    <div>
                        <div className="m-3 lg:m-20 rounded-lg bg-gradient-to-r from-slate-200 to-gray-700">
                            <div className="max-w-[450px] mx-auto flex flex-col lg:flex-row items-center p-5 ">
                                <div className="flex-1">
                                    <img className="rounded-lg" src={item.image} alt="" />
                                </div>
                                <div className="flex-1 text-center mt-7 lg:mt-0">
                                    <h2 className="font-bold">{item.name}</h2>
                                    <p className="text-sm font-semibold my-3">{item.short_description}</p>
                                    <div>
                                        <button className="py-2 lg:px-4 lg:py-3 w-28 lg:w-40 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">{item.price}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default PurchasedService;