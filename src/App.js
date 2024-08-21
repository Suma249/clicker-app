import './App.css';
import Clicker from './Components/Clicker';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const [title]=useState("Clicker")
  return (
    <div className="App container">
      <Header title={title} />
      <Clicker/>
    </div>
  );
}

export default App;
