import "./App.css";
import HomeView from "./containers/HomeView";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OfferView from "./containers/Offer/OfferView";
import BannersView from "./containers/Banner/BannersView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffers } from './redux/offer/offerSlice';

function App() {
  const { selectedIndex } = useSelector((state) => state.brand)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchOffers())
    
  }, [selectedIndex]);
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/offer" element={<OfferView />} />
            <Route path="/banners" element={<BannersView />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
