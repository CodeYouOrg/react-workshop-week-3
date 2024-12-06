import styled from 'styled-components'

const Recipe = ({
  author,
  cookTime,
  description,
  ingredients,
  name,
  prepTime,
  steps,
}) => (
  <Article>
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
  </Article>
)

const Article = styled.article`  
  background: var(--c-bg-light);
  border: 1px solid #333;
  padding: 2rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  & h1 {
    font-size: 2rem;
  }

  & h2 {
    font-size: 1.6rem;
  }

  & dl > div {
    display: flex;
    gap: 0.35rem;
  }

  & dt {
    font-weight: bold;
    &::after {
      content: ':';
    }
  }

  & ol, ul {
    list-style: circle;
    padding-left: 1rem;
  }
`

export default Recipe
