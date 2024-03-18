import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/Button';
import { InputSearch } from './components/InputSearch/InputSearch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ListActiviti } from './components/ListActivity/ListActiviti';


function App() {
  
  return (
    <div className="App">
     <div className='container'>
        <ListActiviti />
     </div>
    </div>
  );
}

export default App;
