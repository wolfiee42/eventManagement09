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
        <div className="grid grid-cols-2">
            {
                items.map(item => <>
                    <div className="">
                        <div className="m-20 rounded-lg bg-gradient-to-r from-slate-200 to-gray-700">
                            <div className="max-w-[450px] mx-auto flex items-center p-5 ">
                                <div className="flex-1">
                                    <img className="rounded-lg" src={item.image} alt="" />
                                </div>
                                <div className="flex-1 text-center">
                                    <h2 className="font-bold">{item.name}</h2>
                                    <p className="text-sm font-semibold my-3">{item.short_description}</p>
                                    <div>
                                        <button className="px-4 py-3 w-40 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">{item.price}</button>
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