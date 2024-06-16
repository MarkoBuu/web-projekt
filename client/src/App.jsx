import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import {UserContextProvider} from "./UserContext.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MyListingsPage from "./pages/MyListingsPage.jsx";
import ListingFormPage from "./pages/ListingFormPage.jsx";
import ListingInfoPage from "./pages/ListingInfoPage.jsx";
import AllPurchasesPage from "./pages/AllPurchasesPage.jsx";
import PurchasePage from "./pages/PurchasePage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials= true;

function App() {
  return (
      <UserContextProvider>
        <Routes>
          <Route path ="/" element={<Layout />}>
              <Route index element={<IndexPage/>} />
              <Route path="/login" element ={<LoginPage/>} />
              <Route path="/register" element ={<RegisterPage/>} />
              <Route path ="/account" element ={<ProfilePage/>} />
              <Route path ="/account/places" element ={<MyListingsPage/>} />
              <Route path ="/account/places/new" element ={<ListingFormPage/>} />
              <Route path ="/account/places/:id" element ={<ListingFormPage/>} />
              <Route path ="/place/:id" element={<ListingInfoPage/>} />
              <Route path ="/account/bookings" element ={<AllPurchasesPage/>} />
              <Route path ="/account/bookings/:id" element ={<PurchasePage/>} />
          </Route>
        </Routes>
      </UserContextProvider>
  )
}

export default App
