import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import ItemsListContainer from './ItemsListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer
      greetings="Bienvenidos a Via Villate"
      />
    </div>
  );
}

export default App;
