import "./App.css";
import Searchbar from "./Components/Searchbar";
import Newscontent from "./Components/Newscontent";
import { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Bycountry from "./Components/Bycountry";

function App() {
  const [sdata, setData] = useState({country:'in', newsSearch:''});
  const [navBtn, setNavBtn] = useState('nav1');

  function searchData(entered) {
    console.log(entered);
    setData({...sdata, newsSearch: entered});
  }

  function countrySelect(selectedCountry) {
    console.log(selectedCountry);
    setData({...sdata, country: selectedCountry});
  }
  console.log(sdata)
  console.log(navBtn)
  return (
    <div className="App">
      <h1 className="headtilte">The News</h1>
      <div className="navcon">
      <span className={`navbtn ${navBtn === 'nav1'? 'active':''}`} onClick={() => {
        setNavBtn('nav1')
      }}>
        <Link className="navlink" to="/country">By Country</Link>
      </span>
      <span className={`navbtn ${navBtn === 'nav2'? 'active':''}`} onClick={() => {
        setNavBtn('nav2')
      }}>
        <Link className="navlink" to="/search">By News</Link>
      </span>
      </div>
      
      <Routes>
      <Route
        path="/"
        element={<Navigate to="/country" replace />}
    />
      <Route path="/country" element={<Bycountry onCountrySelect={countrySelect}></Bycountry>} />
        <Route
          path="/search"
          element={<Searchbar onSearchEnter={searchData}></Searchbar>}
        />
        
      </Routes>

      <hr className="seprator"></hr>
      <Newscontent linkData={sdata}></Newscontent>
    </div>
  );
}

export default App;
