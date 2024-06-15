import {useEffect, useState} from "react";
import axios from "axios";

export default function IndexPage(){
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get("/places").then((response) => {
            setPlaces(response.data);
        });
    }, []);
    return (
        <div className="mt-8 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length > 0 && places.map(place => (
                <div>
                    <div className= "bg-gray-500 mb-3 rounded-2xl flex">
                        {place.photos?.[0] && (
                            <img className="rounded-xl object-cover aspect-square" src ={"http://localhost:4000/uploads"+place.photos?.[0]} alt="" />
                        )}
                    </div>
                    <h3 className="font-bold text-center ">{place.title}</h3>
                    <h2 className="text-sm text-gray-600 text-center "> {place.address}</h2>
                    <div className="text-center">
                        <span className="font-bold">{place.maxGuests}€</span>
                    </div>
                </div>
            ))}
        </div>
    );
}