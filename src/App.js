import "./App.css";
import HomeView from "./containers/HomeView";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OfferView from "./containers/Offer/OfferView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/offer" element={<OfferView />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
