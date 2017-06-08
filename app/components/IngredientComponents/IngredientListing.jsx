import React, {Component} from "react"

export default class IngredientListing extends Component ::
  constructor(props) ::
    super(props)

  render() ::
    let {name, carbs, protein, fat, calories, ingredientAmount, ingredientUnit} = this.props.ingredient
    return @
        <div>
        <div className="row" key={this.props.idx}>
            <div className="three columns">
              <div className="four columns">
                {ingredientAmount}
              </div>
              <div className="eight columns">
                {ingredientUnit}
              </div>
            </div>
            <div className="three columns">
                {name}         
            </div>
            <div className="oneAndOneHalf columns">
                {carbs*ingredientAmount}g
            </div>
            <div className="oneAndOneHalf columns">
                {protein*ingredientAmount}g
            </div>
            <div className="oneAndOneHalf columns">
                {fat*ingredientAmount}g
            </div>
            <div className="oneAndOneHalf columns">
                {calories*ingredientAmount}kcal
            </div>                        
        </div>
        </div>  
    