import React from 'react';

const ResultPortion = ({products}) => {

  let result = {
    kkcal: 0,
    proteins: 0,
    fats: 0,
    carbohydrates: 0
  }
  
  products.map((item) => {
    result.kkcal += item.kkcal;
    result.proteins += item.proteins;
    result.fats += item.fats;
    result.carbohydrates += item.carbohydrates;
  })

  result.kkcal = +(result.kkcal).toFixed(1);
  result.proteins = +(result.proteins).toFixed(1);
  result.fats = +(result.fats).toFixed(1);
  result.carbohydrates = +(result.carbohydrates).toFixed(1);

  console.log(result);

  return (
    <div className="result__portion-wrapper">

      {products.map( (item, index) => 
        <div className="result__portion" key={index}>
          <p className="result__portion-txt result__portion-name">{item.name}</p>
          <p className="result__portion-txt result__portion-weight">{item.weight}</p>
          <p className="result__portion-txt result__portion-kkcal">{item.kkcal}</p>
          <p className="result__portion-txt result__portion-proteins">{item.proteins}</p>
          <p className="result__portion-txt result__portion-fats">{item.fats}</p>
          <p className="result__portion-txt result__portion-carbohydrates">{item.carbohydrates}</p>
        </div>
      )}

      <div className="result__portion-total">
        <p className="result__portion-txt result__portion-total-txt">Total</p>
        <p className="result__portion-txt result__portion-total-kkcal">{result.kkcal}</p>
        <p className="result__portion-txt result__portion-total-proteins">{result.proteins}</p>
        <p className="result__portion-txt result__portion-total-fats">{result.fats}</p>
        <p className="result__portion-txt result__portion-total-carbohydrates">{result.carbohydrates}</p>
      </div>
      
    </div>
  );
};

export default ResultPortion;