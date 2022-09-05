import './App.css';
import Navbar from "./Navbar"
import Footer from './Footer';
import {ItemsListContainer} from './ItemsListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path='/productos' element={<ItemsListContainer
          greetings="Bienvenidos a Via Villate"
          />} />
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
