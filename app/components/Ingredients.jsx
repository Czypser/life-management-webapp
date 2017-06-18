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


    let capitolize = word => `${word[0].toUpperCase()}${word.slice(1)}`
    let cap = word => capitolize @ word.toLowerCase()

    const makeinputconfig = (name) => ::
      return @{}
          style: "u-full-width recipeInput" 
        , placeholder: "(g)" 
        , ref: name 
        , label: cap @ name 
        , id: name 

    const _makeinput = (config) => ::
      const {label, id, ref, style, placeholder} = config
      return (
          <div className="oneAndOneHalf columns"> 
              <label> {label} </label>           
              <input id={id} type="number" 
                  ref={ref} className={style} 
                  placeholder={placeholder}/>
          </div> )


    let checkForMissingInput = (inputs, offenders) => ::
      return inputs.map @ match

      function match(item) ::
        let matched = 
          -1 !== offenders.indexOf(item.ref)
            ? addwarningstyle @ item
            : item

        return matched

      function addwarningstyle(item) ::
        item.style += " warningbox"
        return item

    const produceInputs = (configs) => ::
      let configsWithWarnings = checkForMissingInput @ configs, this.state.boxesToHighlight
      return configsWithWarnings.map @ _makeinput

    // main part of the code right here
    let inputConfigs = ["carbs", "protein", "fat", "calories"].map @ makeinputconfig
    // since produce inputs returns a list, we can destructure that list like this
    let [carbs, protein, fat, calories] = produceInputs(inputConfigs)


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
