import { useState } from "react";

var width = window.innerWidth;
var webView = false;

function Bycountry(props) {
  const [conTab, setConTab] = useState('ind');
    if (width > 500) {
        webView = true; 
      } else {
        webView = false;
      }
    function countryHandler(countrycod){
        props.onCountrySelect(countrycod);
    }
  return (
    <div>
      <table className="country-con">
        <tbody>
          <tr className="county-list">
            <td className={`county-list-item ${conTab === 'ind'?'active':''}`} onClick={() => {
              setConTab('ind');
              return countryHandler('in');
              }}>
              India
            </td>
            <td className={`county-list-item ${conTab === 'usa'?'active':''}`} onClick={() => {
              setConTab('usa');
              return countryHandler('us')}}>
              USA
            </td>
            <td className={`county-list-item ${conTab === 'fra'?'active':''}`} onClick={() => {
              setConTab('fra');
              return countryHandler('fr')}}>
            France 
            </td>
            <td className={`county-list-item ${conTab === 'chn'?'active':''}`} onClick={() => {
              setConTab('chn');
              return countryHandler('cn')}}>
              China
            </td>
            <td className={`county-list-item ${conTab === 'rus'?'active':''}`} style={webView ? {borderRight: "1px solid black"}:{borderRight: "none"}} onClick={() => {
              setConTab('rus');
              return countryHandler('ru')}}>
              Russia
            </td>
            
            {webView && (
              <>
              <td className={`county-list-item ${conTab === 'ch'?'active':''}`} onClick={() => {
                setConTab('ch');
                return countryHandler('ch')}}>
            Switzerland
            </td>
                <td className={`county-list-item ${conTab === 'can'?'active':''}`} onClick={() => {
                  setConTab('can');
                  return countryHandler('ca')}}>
                  Canada
                </td>
                <td className={`county-list-item ${conTab === 'aus'?'active':''}`} style={{borderRight: "none"}} onClick={() => {
                  setConTab('aus');
                  return countryHandler('au')}}>
                  Australia
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bycountry;
