/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    Pokemon_Pokemon: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.image

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}



exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allPokemon {
        pokemons(first: 151) {
          name
          id
        }
      }
    }
  `)

  const pages = result.data.allPokemon.pokemons

  pages.forEach(page => {
    actions.createPage({
      path: page.name.toLowerCase(),
      component: require.resolve("./src/templates/pokemon.js"),
      context: {
        id: page.id,
      },
    })
  })

}