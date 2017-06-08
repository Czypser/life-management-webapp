"use strict"
import React, {Component} from "react"
import IngLabels from "./IngredientComponents/IngLabels.jsx"
import TotalsView from "./IngredientComponents/TotalsView.jsx"
import IngredientListing from "./IngredientComponents/IngredientListing.jsx"
// import {IngLabels, TotalsView, IngredientListing} from "./IngredientComponents" << unsure of how to get this to work

export class Ingredients extends Component ::
  constructor (props) ::
    super(props)
    const sampleIngredient = new Ingredient @ 
      @{} ingredientAmount: 1
        , ingredientUnit: "ounces"
        , name: "Delicous Food"
        , carbs: "15"
        , protein: "16"
        , fat: "17"
        , calories: "18"
    this.state = 
      @{} ingredients:[sampleIngredient] 
        , ingredientTitleErr: ""
        , ingredientSuccess: ""
        , idx: 0

  clearInputs() ::
    this.refs.ingredientAmount.value = ""
    this.refs.ingredientUnit.value = ""
    this.refs.ingredientname.value = ""
    this.refs.carbs.value = ""
    this.refs.protein.value = ""
    this.refs.fat.value = ""
    this.refs.calories.value = ""

  addIngredient = () => ::
    let ingredients = Array.from @  this.state.ingredients
    ingredients.push @ new Ingredient @ 
        @{} ingredientAmount: this.refs.ingredientAmount.value
          , ingredientUnit: this.refs.ingredientUnit.value
          , name: this.refs.ingredientname.value 
          , carbs: this.refs.carbs.value
          , protein: this.refs.protein.value
          , fat: this.refs.fat.value
          , calories: this.refs.calories.value

    this.setState @ @{} ingredients: ingredients, idx:this.state.idx + 1, ingredientTitleErr:"", ingredientSuccess: "Ingredient Added Successfully"
    this.clearInputs()

  warnEmptyTitleField = (x) => ::
    this.setState @ @{} 
      ingredientTitleErr:"You must enter these required fields: " + x


  addIngredientClickHandler = (e) => ::
    var warning = ""
    this.refs.ingredientAmount.value == ""
      ? warning += "Amount"
      : warning += ""    
    this.refs.ingredientUnit.value == ""
      ? warning != ""
        ? warning += ", Unit"
        : warning += "Unit"
      : warning += ""  
    this.refs.ingredientname.value == "" 
      ? warning != ""
        ? warning += ", Ingredient Name"
        : warning += "Ingredient Name"
      : warning += "" 
    this.refs.carbs.value == ""
      ? warning != ""
        ? warning += ", Net Carbs"
        : warning += "Net Carbs"
      : warning += "" 
    this.refs.protein.value == "" 
      ? warning != ""
        ? warning += ", Protein"
        : warning += "Protein"
      : warning += "" 
    this.refs.fat.value == ""
      ? warning != ""
        ? warning += ", Fat"
        : warning += "Fat"
      : warning += "" 
    this.refs.calories.value == "" 
      ? warning != ""
        ? warning += ", Calories"
        : warning += "Calories"
      : warning += "" 
    warning != ""
      ? this.warnEmptyTitleField(warning)
      : this.addIngredient()     


  // Instead of that big long addition of all the individual things
      // lets just pass the ingredient in, and let IngredientListing
      // handle it

  renderIngredients = (ing, idx) => :: 
      return (<IngredientListing key={idx} idx={idx} ingredient={ing}/>)

  render() ::
    let validation = null
    let ingredients = this.state.ingredients.map @ this.renderIngredients
    if (this.state.ingredientTitleErr == "") {
      validation = <p ref="ingredientTitleError" className="success">{this.state.ingredientSuccess}</p>               
    } else {
      validation = <p ref="ingredientSuccess" className="err">{this.state.ingredientTitleErr}</p>
    }

    return @
      <div>
        <div className="row">
          <IngLabels />
        </div>
        <div className="row">
          <div className="three columns">
            <input type="number" ref="ingredientAmount" className="four columns recipeInput" placeholder="#"/>
            <input ref="ingredientUnit" className="eight columns recipeInput" placeholder="unit"/>                          
          </div>
          <div className="three columns">
            <input ref="ingredientname" className="u-full-width recipeInput" placeholder="Name of ingredient"/>
          </div>
          <div className="oneAndOneHalf columns">             
            <input type="number" ref="carbs" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">          
            <input type="number" ref="protein" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">           
            <input type="number" ref="fat" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">         
            <input type="number" ref="calories" className="u-full-width recipeInput" placeholder="(kcal)"/>
          </div>                                    
          <div className="one columns">
            <button className="button-primary" onClick={this.addIngredientClickHandler}> 
              <i className="fa fa-plus" aria-hidden="true"></i> Add Ingredient
            </button>
          </div>
        </div>  
        {validation}                                               
        {ingredients}
        <TotalsView ingredients={this.state.ingredients}/>
      </div>


class Ingredient ::
  constructor(config) ::
    Object.assign @ this, config
    /*
    this.name = config.name
    this.carbs = config.carbs + "g"
    this.protein = config.protein + "g"
    this.fat = config.fat + "g"
    this.calories = config.calories + "kcal"
    */
