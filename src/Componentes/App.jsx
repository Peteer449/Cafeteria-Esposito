import './App.css';
import Navbar from "./Navbar"
import Footer from './Footer';
import ItemsListContainer from './ItemsListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer
      greetings="Bienvenidos a Via Villate"
      />
      <Footer/>
    </div>
  );
}

export default App;
