import styles from './RecipeList.module.css'

const RecipeList = ({ activeRecipe, recipes, onSelect }) => (
  <ul className={styles.list}>
    {recipes.map((recipe, i) => (
      <li>
        <button onClick={() => onSelect(i)}>{recipe.name}</button>
      </li>
    ))}
  </ul>
)

export default RecipeList
