import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [user, setUser] = useState([]);

    
    useEffect(() => {
        information()
    }, []);


    const information = async () => {
        const response = await fetch('service.json');
        const data = await response.json();
        console.log(data);
        setUser(data);
    }


    const service = user.find(item => item.id === idInt);
    const { image, name, short_description, long_description, price } = service

    return (
        <div className="max-w-7xl mx-auto flex">
            <div className="flex-1">
                <img src={image} alt="" />
            </div>
            <div className="flex-1">
                <h2>{name}</h2>
                <p>{short_description}</p>
                <p>{long_description}</p>
                <button>{price}</button>
            </div>
        </div>
    );
};

export default ServiceDetails;