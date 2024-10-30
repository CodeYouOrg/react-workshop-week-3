const RecipeList = ({ activeRecipe, recipes, onSelect }) => (
  <ul>
    {recipes.map((recipe, i) => (
      <li>
        <button onClick={() => onSelect(i)}>{recipe.name}</button>
      </li>
    ))}
  </ul>
)

export default RecipeList
