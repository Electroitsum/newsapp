
import SearchField from "react-search-field";



function Searchbar(props) {
  function searchNews(value){
    
    console.log(value);
   
    
    props.onSearchEnter(value);

  }

  return (

      
     
      <div className="searchbar-con">
        <SearchField
          onSearchClick={searchNews}
          placeholder="Search..."
          classNames="searchbar"
        />
      </div>

  );
}

export default Searchbar;
