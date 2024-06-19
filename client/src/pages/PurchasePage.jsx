import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceGallery from "../PlaceGallery";

export default function PurchasePage() {
    const {id} = useParams();
    const [booking,setBooking] = useState(null);
    useEffect(() => {
        if (id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            });
        }
    }, [id]);

    if (!booking) {
        return '';
    }

    return (
        <div className="my-8 py-4 px-8 bg-gray-100">
            <h1 className="text-3xl">{booking.place.title}</h1>
            <a className="flex gap-1 my-3 font-semibold underline" target="_blank"
               href={"https://maps.google.com/?q=" + booking.place.address}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                </svg>
                {booking.place.address}</a>
            <div className=" my-6 rounded-2xl flex items-center justify-between">
                <div className="bg-primary p-6 text-white rounded-2xl text-center text-3xl">
                    <div>Price</div>
                    <div className="text-3xl">${booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place}/>
        </div>
    );
}