import React from 'react';
import classes from './UI/ProductsListSubmitBtn.module.css';

import Portion from './Portion';


const PortionList = ({meals, remove, products}) => {

  const getProducts = () => {
    products();
  }

  return (
    <div>
      <div className="portion-list">
        <div className="portion portion-title">
          <div className="portion-option portion-option-title portion-number portion-number-title">№</div>
          <div className="portion-option portion-option-title portion-product-name portion-product-name-title">Product Name</div>
          <div className="portion-option portion-option-title portion-product-weight portion-product-name-title">Weight, g</div>
        </div>
        
        {meals.map( (meal, index) => 
          <Portion number={index + 1} remove={remove} meal={meal} key={index} />
        )}

        <div style={{marginTop: '30px'}}>
          <button onClick={ () => getProducts() } id="portion-sbmt-btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}} className={classes.ProductsListSubmitBtn} type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PortionList;