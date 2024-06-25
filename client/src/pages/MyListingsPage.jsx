import {Form, Link, Navigate, useParams} from "react-router-dom";
import AccountNav from "../AccountNav.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg.jsx";

export default function MyListingsPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get("/user-places").then(({data}) =>{
            setPlaces(data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/places/${id}`);
            //await axios.delete(`/purchases/${id}`);
            setPlaces(places.filter(place => place._id !== id));
        } catch (error) {
            console.error("Failed to delete the listing:", error);
        }
    };

    return (
        <div className="py-4 px-8">
            <AccountNav />
            <div className="text-center">
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    Add a listing
                </Link>
            </div>
            <div className="mt-4">
                {places.length > 0 && places.map(place => (
                    <div className="flex">
                  <Link to={"/account/places/"+ place._id} className="flex cursor-pointer gap-8 bg-gray-100 p-4 rounded-2xl mb-4">
                      <div className="flex w-32 h-32 bg-gray-300 shrink-0" >
                         <PlaceImg place={place} />
                      </div>
                      <div className="grow-0 shrink">
                          <h2 className="text-xl font-bold">{place.title}</h2>
                          <p className="text-sm mt-2">{place.description}</p>
                      </div>
                  </Link>
                      <div className="flex h-fit relative top-16 right-0">
                          <button onClick={() => handleDelete(place._id)} className="inline-flex gap-1 bg-transparent text-black py-2 px-6 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       strokeWidth={1.5}
                                       stroke="currentColor" className="size-6">
                                      <path strokeLinecap="round" strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                  </svg>
                          </button>
                      </div>
                </div>
                ))}
            </div>
        </div>
    );
}