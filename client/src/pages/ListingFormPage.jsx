import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import {Navigate, useParams} from "react-router-dom";

export default function ListingFormPage(){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [price, setPrice] = useState(70);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id){
            return;
        }
        axios.get("/places/"+id).then(response => {
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setPrice(data.price);
        })
    }, [id]);
    function inputHeader(text){
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {title, address, addedPhotos,
            description, perks, extraInfo, price,};
        if (id){
            await axios.put("/places/", {id, ...placeData});
            setRedirect(true);
        } else {
            await axios.post("/places", placeData);
            setRedirect(true);
        }

    }

    if(redirect){
        return <Navigate to={"/account/places"} />
    }

    return(
            <div>
                <AccountNav />
                <form onSubmit={savePlace}>
                    {inputHeader("Item Title")}
                    <input type="text" value={title} onChange={ev => setTitle(ev.target.value)}
                           placeholder="Title for your place"/>
                    {inputHeader("Your Address")}
                    <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}
                           placeholder="Address for the accommodation"/>
                    {inputHeader("Item Photos")}
                    <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    {inputHeader("Item Description")}
                    <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
                    {inputHeader("State")}
                    <Perks selected={perks} onChange={setPerks} />
                    {inputHeader("Extra Info")}
                    <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
                    {inputHeader("Price")}
                    <div className="grid">
                        <div>
                            <h3 className="mt-2 -mb-1">Price</h3>
                            <input type="number" value={price} onChange={ev => setPrice(ev.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <button className="primary my-4">Save</button>
                    </div>
                </form>
            </div>
    );
}