import React, {Component} from "react"

export default class IngLabels extends Component ::
  constructor(props) ::
    super(props)

  render() ::
  	return @
      <div className="row">
        <div className="three columns">
          <label>Amount</label>
        </div>
        <div className="three columns">
          <label>Ingredient</label>
        </div>
        <div className="oneAndOneHalf columns">
          <label>Net Carbs</label>              
        </div>
        <div className="oneAndOneHalf columns">
          <label>Protein</label>            
        </div>
        <div className="oneAndOneHalf columns">
          <label>Fat</label>            
        </div>
        <div className="oneAndOneHalf columns">
          <label>Calories</label>            
        </div>                                                
      </div>
  	
  
