import React, {Component} from "react"

export default class TotalsView extends Component ::
  constructor(props) ::
    super(props)

  buildTotals() ::
    let nutritionTotals = this.props.ingredients.map @ 
      (item) => [item.carbs, item.fat, item.protein, item.calories, item.ingredientAmount]
    // Initialize the total variables
    let protein = 0
      , carbs = 0
      , calories = 0
      , fat = 0
      , ingredientAmount = 0
      , ingredientUnit = 0

    // for each four item list in our list of ingredients
    for let e of nutritionTotals ::
      // increment the corresponding nutrient by the new ingredientAmount
      carbs += Number(e[0]) 
      fat += Number(e[1])
      protein += Number(e[2])
      calories += Number(e[3])
      ingredientUnit += Number(e[5])
    return {carbs, fat, protein, calories, ingredientUnit}

  render() ::
    // We got a list of Ingredient instances, so we are going
      // to map through and create four element lists for
      // each ingredient, containing each number

    let {carbs, fat, protein, calories, ingredientAmount} = this.buildTotals()
    return @
        <div className="container">
          <div className="row text-center">
            TOTALS
          </div>
          <div className="row text-center">
            <div className="u-max-width three columns">
              Net Carbs : {carbs}g
            </div>
            <div className="u-max-width three columns">
              Protein : {protein}g
            </div>
            <div className="u-max-width three columns">
              Fat : {fat}g
            </div>
            <div className="u-max-width three columns">
              Calories : {calories}kcal
            </div>
          </div>
        </div>