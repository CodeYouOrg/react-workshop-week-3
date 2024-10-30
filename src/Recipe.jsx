const Recipe = ({
  author,
  cookTime,
  description,
  ingredients,
  name,
  prepTime,
  steps,
}) => (
  <article>
    <h1>{name}</h1>
    <dl>
      <div>
        <dt>author</dt>
        <dd>{author}</dd>
      </div>
      <div>
        <dt>prep time</dt>
        <dd>{prepTime} mins</dd>
      </div>
      <div>
        <dt>cook time</dt>
        <dd>{cookTime} mins</dd>
      </div>
    </dl>

    <p>{description}</p>

    <section aria-labelledby="ingredients">
      <h2 id="ingredients">ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </section>

    <section aria-labelledby="steps">
      <h2 id="steps">steps</h2>
      <ol>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ol>
    </section>
  </article>
)

export default Recipe
