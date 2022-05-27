import React from 'react';

import classes from './UI/ProductsListSubmitBtn.module.css';

const Portion = ({meal, remove, number}) => {
  return (
    <div>
      <div className="portion" id="portion">
        <p className="portion-option portion-number">{number}</p>
        <p className="portion-option portion-product-name">{meal.name}</p>
        <p className="portion-option portion-product-weight">{meal.weight}</p>
        <button 
          onClick={() => remove(meal)}
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}} 
          className={classes.ProductsListSubmitBtn}  
          type="submit">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Portion;


