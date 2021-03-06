import React, { useState, useContext } from 'react';

import classes from './UI/ProductsListSubmitBtn.module.css';
// import classes from './UI/ProductsListSubmitBtn.module.css';
// import classes from './UI/ProductsWeightBtn.module.css';
import {products} from './Products.js';

const ProductsForm = ({create}) => {
  let [meal, setMeal] = useState(
    {
      name: '',
      weight: '',
      product: products[0].id,
      kkcal: 0,
      proteins: 0,
      fats: 0,
      carbohydrates: 0,
    }
  
  );
  
  const addNewMeal = (e) => {
    e.preventDefault();

    // проверка введена для того, чтобы убрать проблему
    // связанную тем, что при добавлении продукта в список 
    // когда пользователь не вводит вес, отображался 0, 
    // а так же, на верность введеных данных в поле weight
    if (meal.weight === '' ||  meal.weight == 0 || meal.weight < 0) {
      alert('Write correct weight');
      setMeal({...meal, weight: ''});
    }
    else{
        // коэфициент для подсчета БЖУ за весом продукта 
      let k = meal.weight * 0.01;

      // ищем имя продукта по его айди и дополняем нужные поля
      let getName,
        getKkcal,
        getProteins,
        getFats,
        getCarbohydrates;

      products.forEach((p) => { if(p.id == meal.product){
        getName = p.name;
        getKkcal = p.kkcal * k;
        getProteins = p.proteins * k;
        getFats = p.fats * k;
        getCarbohydrates = p.carbohydrates * k;
      
      }});

      const newMeal = {
        ...meal, 
        id: Date.now(),
        name: getName,
        kkcal: +getKkcal.toFixed(1),
        proteins: +getProteins.toFixed(1),
        fats: +getFats.toFixed(1),
        carbohydrates: +getCarbohydrates.toFixed(1),
      }
      create(newMeal);
      setMeal({weight: '', product: products[0].id});

    }



  }

  const addGrammToWeight = (e, addweight) => {
    e.preventDefault();
    let result = +meal.weight + addweight;
    setMeal({...meal, weight: result});

  }

  return (
    <form className="products-form">
      <div className="products-form-inner">
        <div className="products-wrapper">
          <label className="products-label" htmlFor="products">Choose product</label>
          <select 
          className="products" 
          name="products"
          onChange={(e) => {setMeal({...meal, product: e.target.value})}} 
          >
            <optgroup>
              {products.map( (product, index) => 
                <option value={product.id} key={index}>{product.name}</option> 
              )}
            </optgroup>
          </select>
        </div>
        <div className="weight-wrapper">
          <label className="weight-label" htmlFor="weight">Weight, g</label>
          <input 
            onChange={(e) => setMeal({...meal, weight: e.target.value})}  
            className="weight" 
            value={meal.weight}
            name="weight" 
            type="number" 
            placeholder="0"></input>
            <div className="products-form__weight-btn-wrapper">
              <button onClick={(e) => addGrammToWeight(e, 5)} className="products-form__weight-btn" type="submit">+5</button>
              <button onClick={(e) => addGrammToWeight(e, 50)} className="products-form__weight-btn" type="submit">+50</button>
              <button onClick={(e) => addGrammToWeight(e, 100)} className="products-form__weight-btn" type="submit">+100</button>
            </div>

        </div>
      </div>
      <div className="products-form__add-button-wrapper">
        <button onClick={(e) => addNewMeal(e)} className={classes.ProductsListSubmitBtn} type="submit">Add</button>
      </div>
    </form>  
  );
};

export default ProductsForm;