import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";

export default function PurchaseWidget({place}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [redirect, setRedirect] = useState("");
    const {user} = useContext(UserContext);

    useEffect(() => {
        if(user){
            setName(user.name);
        }
    }, [user]);

    async function purchaseThisItem() {
        const response = await axios.post('/bookings', {
            name,phone,
            place:place._id,
            price:place.price,
        });
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if(redirect){
        return <Navigate to={redirect} />
    }
    return(
        <>
            <div className="bg-white shadow rounded-2xl w-fit p-4">
                <div className="text-2xl text-center">
                    Price: {place.price}€
                </div>
                <div className="">
                    <label>Full name:</label>
                    <input type="text"
                           value={name}
                           onChange={(ev) => setName(ev.target.value)}/>
                    <label>Phone number:</label>
                    <input type="tel"
                           value={phone}
                           onChange={(ev) => setPhone(ev.target.value)}/>
                </div>
                <button onClick={purchaseThisItem} className="primary">Purchase</button>
            </div>
        </>
    )
}