import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

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
        <div className="bg-gradient-to-r from-gray-200 to-gray-700 min-h-[680px]">
            <div className="max-w-7xl mx-auto flex items-center p-5 ">
                <div className="flex-1 p-20">
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div className="flex-1 p-20">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="font-semibold my-3">{short_description}</p>
                    <p className="mb-3">{long_description}</p>
                    <div>
                        <span className="font-bold text-xl mr-3">Price:</span>
                        <button onClick={handleBookBtn} className="px-4 py-3 w-40 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">{price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;