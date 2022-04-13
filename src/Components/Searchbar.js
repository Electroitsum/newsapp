import SearchField from "react-search-field";
var width = window.innerWidth;
var webView = false;
var search;

function Searchbar(props) {
  if (width > 500) {
    webView = true;
  } else {
    webView = false;
  }
  function searchNews(value1, value2){
    
    console.log(value1, Value2);
    props.onSearchEnter(value1, value2);
  }

  function countryHandler(e){
    console.log(e.target.innerText);
  }


  return (
    <div>
      <h1>The News</h1>
      <table className="country-con">
        <tbody>
          <tr className="county-list">
            <td className="county-list-item" onClick={countryHandler}>India</td>
            <td className="county-list-item" onClick={countryHandler}>USA</td>
            <td className="county-list-item" onClick={countryHandler}>Britain</td>
            <td className="county-list-item" onClick={countryHandler}>China</td>
            <td className="county-list-item" onClick={countryHandler}>Russia</td>
            <td className="county-list-item" onClick={countryHandler}>Pakistan</td>
            {webView && (
              <>
                <td className="county-list-item" onClick={countryHandler}>Canada</td>
                <td className="county-list-item" onClick={countryHandler}>Australia</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
      <div className="searchbar-con">
        <SearchField
          onSearchClick={searchNews}
          placeholder="Search..."
          classNames="searchbar"
        />
      </div>
      <hr className="seprator"></hr>
    </div>
  );
}

export default Searchbar;
