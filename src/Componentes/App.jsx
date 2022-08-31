import './App.css';
import Navbar from "./Navbar"
import Footer from './Footer';
import {ItemsListContainer} from './ItemsListContainer';
import ItemDetailContainer from './ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer
      greetings="Bienvenidos a Via Villate"
      />
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
