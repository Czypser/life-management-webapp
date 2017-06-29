import React, {Component} from "react"

export default class IngredientListing extends Component ::
  constructor(props) ::
    super(props)

  render() ::
    let {name, carbs, protein, fat, calories, ingredientAmount, count} = this.props.ingredient
    return @
        <div>
        <div className="row" key={this.props.idx}>
            <div className="three columns">
                {count}
            </div>
            <div className="three columns">
                {name}         
            </div>
            <div className="oneAndOneHalf columns">
                {carbs}g
            </div>
            <div className="oneAndOneHalf columns">
                {protein}g
            </div>
            <div className="oneAndOneHalf columns">
                {fat}g
            </div>
            <div className="oneAndOneHalf columns">
                {calories}kcal
            </div>                        
        </div>
        </div>  
    