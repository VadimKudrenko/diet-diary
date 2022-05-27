import React, { useState } from 'react';

import './App.css';
import ProductsList from './components/ProductsList.jsx'
import ResultPortion from './components/ResultPortion.jsx'



function App() {
  const [productsList, setProductsList] = useState([]);

  const getProducts = (products) => {
    setProductsList([...productsList, products]);
  };

  return (
    <div className="App">
      <h1 className="app-title">Diet Diary</h1>
      <div className="section-divider"></div>

      <ProductsList products={getProducts}/>

      {productsList.length !== 0 
        ?
        <div className="results">
          <div className='result__portion-title-wrapper'>
            <p className='result__portion-txt result__portion-title result__portion-name'>Product name</p>
            <p className='result__portion-txt result__portion-title result__portion-weight'>Weight, g</p>
            <p className='result__portion-txt result__portion-title result__portion-kkcal'>kkcal</p>
            <p className='result__portion-txt result__portion-title result__portion-proteins'>Proteins</p>
            <p className='result__portion-txt result__portion-title result__portion-fats'>Fats</p>
            <p className='result__portion-txt result__portion-title result__portion-carbohydrates'>Carbo-<br></br>hydrates</p>
          </div>
          {productsList.map((item, index) => 
            <ResultPortion products={item} key={index}/>
          )}
        </div>
        :
        <div></div>
      }
      
    </div>
  );
}

export default App;
