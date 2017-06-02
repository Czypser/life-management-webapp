  renderIngredients = (ing, idx) => :: 
      return (<IngredientListing key={idx} idx={idx} ingredient={ing}/>)

  render() ::

    let ingredients = this.state.ingredients.map @ this.renderIngredients

    return @
      <div className="container">
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
        <div className="row">
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
          <div className="one columns">
            <button onClick={this.addIngredientClickHandler}> Add Ingredient 
            </button>
          </div>                                          
        </div>             
        {ingredients}
        <TotalsView ingredients={this.state.ingredients}/>
      </div>