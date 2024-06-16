import AccountNav from "../AccountNav.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg.jsx";
import {Link} from "react-router-dom";

export default function AllPurchasesPage() {
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
                    <Link to={`/account/bookings/${booking._id}`} className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden items-center">
                        <div className="w-48">
                            <PlaceImg place = {booking.place} />
                        </div>
                        <div className="py-3 pr-3 grow">
                            <h2 className="text-xl">{booking.place.title}</h2>
                            Price: {booking.price}€
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}