
import './App.css';
import Searchbar from './Components/Searchbar';
import Newscontent from './Components/Newscontent';
import { useState } from 'react';
var sdata;

function App() {
  const [sdata, setData] = useState('us');
  
  function searchData(entered){
      console.log(entered);
      setData(entered);
  }
  return (
    <div className="App">
     <Searchbar onSearchEnter={searchData}></Searchbar>
     <Newscontent linkData = {sdata}></Newscontent>
    </div>
  );
}

export default App;
