import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { saveItems } from "../../uilities/utilities";

const ServiceDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [user, setUser] = useState([]);

    useEffect(() => {
        information()
    }, []);


    const information = async () => {
        const response = await fetch('/service.json');
        const data = await response.json();
        setUser(data);
    }


    const service = user.find(item => item.id === idInt);
    const { image, name, short_description, long_description, price } = service || {}
    const handleBookBtn = () => {
        saveItems(idInt)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, book event!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Booked!',
                    'An event has been booked.',
                    'success'
                )
            }
        })
    }


    return (
        <div className="bg-gradient-to-r from-gray-200 to-gray-700 lg:min-h-[680px]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center p-5 ">
                <div className="flex-1 lg:p-20">
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div className="flex-1 my-5 lg:my-0 lg:p-20">
                    <h2 className="lg:text-2xl font-bold">{name}</h2>
                    <p className="text-sm lg:text-base font-semibold my-3">{short_description}</p>
                    <p className="mb-3 text-sm lg:text-base">{long_description}</p>
                    <div>
                        <span className="font-bold lg:text-xl mr-3">Price:</span>
                        <button onClick={handleBookBtn} className="py-2 lg:px-4 lg:py-3 w-28 lg:w-40 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">{price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;