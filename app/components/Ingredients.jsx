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
        , boxesToHighlight: []

  clearInputs = (e) => ::
    let refinputs = Object.keys @ this.refs
    for (let ingredient of refinputs) ::
      this.refs[ingredient].value = ""
      console.log @ this.refs[ingredient].id

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

    this.setState @ 
      @{} ingredients: ingredients
        , idx:this.state.idx + 1
        , ingredientTitleErr:""
        , ingredientSuccess: "Ingredient Added Successfully"
        , boxesToHighlight: []
    this.clearInputs()

  warnEmptyTitleField = (warning, offenders) => ::
    console.log @ offenders
    this.setState @ @{} 
          boxesToHighlight: offenders
        , ingredientTitleErr:"You must enter these required fields: " + warning


  addIngredientClickHandler = (e) => ::
    e.preventDefault()
    let refinputs = Object.keys @ this.refs
    let warning = ""
    let offenders = []
    for (let ingredient of refinputs) ::
      if this.refs[ingredient].value == "" ::
        if warning != "" ::
          warning += ", "
        offenders.push @ this.refs[ingredient].id
        warning += `${ingredient}`    
    "" !== warning ? this.warnEmptyTitleField(warning, offenders) : this.addIngredient()


  renderIngredients = (ing, idx) => :: 
      return (<IngredientListing key={idx} idx={idx} ingredient={ing}/>)

  render() ::
    let validation = null
    let ingredients = this.state.ingredients.map @ this.renderIngredients
    if (this.state.ingredientTitleErr == "") {
      validation = <p ref="ingredientTitleError" className="success">{this.state.ingredientSuccess}</p>               
    } else {
      validation = <p ref="ingredientSuccess" className="err">{this.state.ingredientTitleErr}</p>}
      
    let inputconfig = @{}
        style:"u-full-width recipeInput"
      , placeholder:"(g)"
      , ref:"carbs"
      , label:"Net Carbs"
      , id:"carbs"

    let inputconfig2 = @{}
        style:"u-full-width recipeInput"
      , placeholder:"(g)"
      , ref:"protein"
      , label:"Protein"
      , id:"protein"      

    let inputconfig3 = @{}
        style:"u-full-width recipeInput"
      , placeholder:"(g)"
      , ref:"fat"
      , label:"Fat"
      , id:"fat"      

    let inputconfig4 = @{}
        style:"u-full-width recipeInput"
      , placeholder:"(g)"
      , ref:"calories"
      , label:"Calories"
      , id:"calories"


    let boxesToHighlight = this.state.boxesToHighlight
    
    console.log @ 
      "Boxes to highlight " + 
      this.state.boxesToHighlight

    function buildNumInput (object, highlightWarning) {
      const ObjectMap = highlightWarning.map((highlightWarning) => object.ref == highlightWarning ? object.style = "u-full-width recipeInput warningbox" : highlightWarning += "Nope")


       // if object.name is in this.state.boxesToHighlight
       //   let style = object.style += " highlight-input"
      // check this.state.boxesToHighlight
        // check that against the thing were are building
        // if they are the same
      return (
        <div className="oneAndOneHalf columns"> 
            <label> {object.label} </label>           
            <input id={object.id} type="number" ref={object.ref} className={object.style} placeholder={object.placeholder}/>
        </div> )}

    let carbs = buildNumInput(inputconfig, boxesToHighlight)
    let protein = buildNumInput(inputconfig2, boxesToHighlight)
    let fat = buildNumInput(inputconfig3, boxesToHighlight)
    let calories = buildNumInput(inputconfig4, boxesToHighlight)


    return @
      <div>
        <div className="row">
          <IngLabels />
        </div>
        <div className="row">
          <div className="three columns">
            <input id ="ingredientAmount" type="number" ref="ingredientAmount" className="four columns recipeInput" placeholder="#"/>
            <input id= "ingredientUnit" ref="ingredientUnit" className="eight columns recipeInput" placeholder="unit"/>                          
          </div>
          <div className="three columns">
            <input id="ingredientname" ref="ingredientname" className="u-full-width recipeInput" placeholder="Name of ingredient"/>
          </div>
          {carbs}
          {protein}
          {fat}
          {calories}                                   
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
