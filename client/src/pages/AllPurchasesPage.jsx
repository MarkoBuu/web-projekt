import AccountNav from "../AccountNav.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg.jsx";
import {Link} from "react-router-dom";

export default function AllPurchasesPage() {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        axios.get("/bookings").then((response) => {
            setPurchases(response.data);
        });
    }, []);
    return(
        <div className="py-4 px-8">
            <AccountNav />
            <div>
                {purchases?.length > 0 && purchases.map((purchase) => (
                    <Link to={`/account/bookings/${purchase._id}`} className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden items-center mb-4">
                        <div className="w-48">
                            <PlaceImg place = {purchase.place} />
                        </div>
                        <div className="py-3 pr-3 grow">
                            <h2 className="text-xl">{purchase.place.title}</h2>
                            Price: {purchase.price}€
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}