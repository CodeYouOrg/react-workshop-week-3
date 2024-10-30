import { useState } from 'react'

import Empty from './Empty'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import recipes from './recipes'
import './App.css'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeRecipe = activeIndex == null ? null : recipes[activeIndex]

  const select = (index) => setActiveIndex(index)

  return (
    <div className="container">
      <RecipeList
        activeRecipe={activeRecipe}
        onSelect={select}
        recipes={recipes}
      />
      <main>
        {activeRecipe == null ? <Empty /> : <Recipe {...activeRecipe} />}
      </main>
    </div>
  )
}

export default App
