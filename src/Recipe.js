import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories.toFixed(1)}cal</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}
console.log(1.1111.toFixed(5))

export default Recipe

