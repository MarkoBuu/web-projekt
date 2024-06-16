import AccountNav from "../AccountNav.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg.jsx";

export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get("/bookings").then((response) => {
            setBookings(response.data);
        });
    }, []);
    return(
        <div>
            <AccountNav />
            <div>
                {bookings?.length > 0 && bookings.map((booking) => (
                    <div className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="w-48">
                            <PlaceImg place = {booking.place} />
                        </div>
                        <div className="oy-3">
                            <h2 className="text-xl">{booking.place.title}</h2>
                            {booking.maxGuests}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}