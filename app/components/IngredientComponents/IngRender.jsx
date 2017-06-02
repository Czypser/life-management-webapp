import React from 'react'
import IngLabels from "./IngLabels.jsx"
import addIngredient from "./IngAdd.jsx"

export default class IngRender extends React.Component {
  constructor() {
    super();
  }  

  render() {

    return (
      <div>
        <div className="three columns">
          <input ref="ingredientAmount" className="four columns recipeInput" placeholder="#"/>
          <input ref="ingredientUnit" className="eight columns recipeInput" placeholder="unit"/>                          
        </div>
        <div className="three columns">
          <input ref="ingredientname" className="u-full-width recipeInput" placeholder="Name of ingredient"/>
        </div>
        <div className="oneAndOneHalf columns">             
          <input ref="carbs" className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">          
          <input ref="protein" className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">           
          <input ref="fat" className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">         
          <input ref="calories" className="u-full-width recipeInput" placeholder="(kcal)"/>
        </div>                                         
      </div>             
    );
  }
}
