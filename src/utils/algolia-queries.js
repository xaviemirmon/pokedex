const indexName = `pokedex`
const pageQuery = `allPokemon {
  pokemons(first: 151) {
    id
  maxCP
  maxHP
  weaknesses
  types
  resistant
  number
  name
  fleeRate
  evolutionRequirements {
    amount
    name
  }
  attacks {
    fast {
      damage
      name
      type
    }
    special {
      damage
      name
      type
    }
  }
  image
  imageFile {
    childImageSharp {
      gatsbyImageData(
        height: 250
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
  classification
  weight {
    maximum
    minimum
  }
  }
}`
function pageToAlgoliaRecord({ node }) {
  return {
    ...node
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pokemon,
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries