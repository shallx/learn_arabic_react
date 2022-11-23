import './App.css';
import HomeView from './containers/HomeView';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BannerView from './containers/Banner/BannerView';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/banner" element={<BannerView />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;