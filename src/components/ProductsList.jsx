import React, { useState } from 'react';

// import classes from './UI/ProductsListSubmitBtn.module.css';
import PortionList from './PortionList.js';
import ProductsForm from './ProductsForm'

const ProductsList = ({products}) => {

  const [meals, setMeals] = useState([]);

  const createMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  }

  const removeMeal = (meal) => {
    setMeals(meals.filter( m => m.id !== meal.id ))
  }

  const getProducts = () => {
    products(meals)
    setMeals([]);
  }

  return (
    <div className="product-list">

      <ProductsForm create={createMeal} /> 

    {meals.length !== 0 
      ?
      <div>
        <div className="divider-wrapper">
          <div className="divider"></div>
        </div>

        <PortionList products={getProducts} remove={removeMeal} meals={meals} />
      </div>
      :
      <div></div>
    }

    </div>
  );
}
 
export default ProductsList;