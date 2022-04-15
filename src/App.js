import "./App.css";
import Searchbar from "./Components/Searchbar";
import Newscontent from "./Components/Newscontent";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [sdata, setData] = useState();

  function searchData(entered) {
    console.log(entered);
    setData(entered);
  }
  return (
    <div className="App">
      <span>
        <Link to="/country">By Country</Link>
      </span>
      <span>
        <Link to="/search">By News</Link>
      </span>
      <Routes>
        <Route
          path="/search"
          element={<Searchbar onSearchEnter={searchData}></Searchbar>}
        />
        <Route path="/country" element={<div>Working</div>} />
      </Routes>
      <Newscontent linkData={sdata}></Newscontent>
    </div>
  );
}

export default App;
