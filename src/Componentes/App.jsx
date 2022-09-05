import './App.css';
import Navbar from "./NavAndFooter/Navbar"
import Footer from './NavAndFooter/Footer';
import { ItemsListContainer } from './Item/ItemsListContainer';
import ItemDetailContainer from './Item/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
import { GaleryContainer } from './Galery/GaleryContainter';
import GaleryCategoryContainer from './Galery/GaleryCategoryContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path='/productos' element={<ItemsListContainer />} />
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path="/galeria" element={<GaleryContainer/>}/>
          <Route path="/galeria/:category" element={<GaleryCategoryContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
