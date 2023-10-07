import Cards from './components/Cards';
import './App.css';
import data from './js/data';
import Images from './components/Images';
import React from "react";

function App() { 
  return (
  <div className="App">
    <div className="card__box">
      {data.map((el, index) => {
        console.log(el)
        return (<div className="card" key={index}>
          {(el.url !== undefined) ? <><Images url={el.url} /><Cards title={el.title} text={el.text}/> </> : <Cards title={el.title} text={el.text} />}
        </div>)
      })}
    </div>     
  </div>
  );
}

export default App;

