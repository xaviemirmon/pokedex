<p align="center">
  <a href="https://pokedex.xavie.mirmon.co.uk" target="_blank">
    <img alt="Pokedex" src="https://pokedex.xavie.mirmon.co.uk/Pokedex_logo.png" height="100" />
  </a>
</p>
<h1 align="center">
  Gatsby Pokédex
</h1>

This site is a testbed that show how Gatsby works and a fun project to play around with Pokémon.  This site is a Progressive Web App (PWA) so you can install in on your device (if supported).

## Demo

A demo of this project is available on <a href="https://pokedex.xavie.mirmon.co.uk" target="_blank">https://pokedex.xavie.mirmon.co.uk</a>

## Prerequisites 

Node – 15.8.0

Yarn — 1.22.10

## 🚀 Quick start

1.  **Clone the repo.**

    Run the following in the directory that you wish to run the project from

    ```shell
    # clones the git repo
    git clone https://github.com/xaviemirmon/pokedex.git
    ```

1.  **Start developing.**

    First you need to install your packages

    ```shell
    cd pokedex/
    yarn install
    ```

    Navigate into your new site’s directory and start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start playing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## Building the site

This site is hosted on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/).  You can fork this repo and to your Gatsby Cloud accuont to host it.

Should you wish to build and server it else run the following:

```shell
gatsby build 
gatsby serve
```

## 🧐 What's inside?

1.  **`/src/components/Footer.js`**: This file contains all of the logic for the `Footer` component including the links and text.

2.   **`/src/components/Header.js`**: This file contains all of the logic for the `Header` component including the Pokédex logo and link.

3.  **`/src/components/Layout.js`**: This file contains all of the logic for the `Layout` component which is shared across all pages.

4.  **`/src/components/PokemonCard.js`**: This file contains all of the logic for the `PokemonCard` component which contains all the styles and layout for the individual Pokémons on the site's hompage search experience.

5.  **`/src/components/PokemonFull.js`**: This file contains all of the logic for the `PokemonFull` component which contains all the styles and layout for the individual Pokémons when you navigate from the homepage `IndexPage` to a specific Pokémon.

6.  **`/src/components/SearchList.js`**: This file contains all of the logic for the `SearchList` component which contains all the styles, states, form elements and layout search expirience on the homepage.

7.  **`/src/components/Seo`.js**: This file contains all of the logic for the `Seo` component provided by the `gatsby-default-starter` that contains all of the `<head>` SEO information.

8.  **`/src/image`**: This directory contains necessary images for the app.

9.  **`/src/pages/index.js`**: This file contains all of the logic for the `IndexPage` component for the homepage which loads in the `SearchList` compoange.

10. **`/src/pages/404.js`**: This file contains all of the logic for the 404 page.

11. **`/src/templates/pokemon.js`**: This file contains all of the logic for the `PokemonPage` component for the individual Pokémons which is generated by the query in `gastby-node.js` and renders the `PokemonFull` data.

12. **`README.md`**: A text file containing useful reference information about this project.

13. **`gatsby-config.js`**: The file where all the plugin settings are configured including the mapping for the graphql endpoint.


## 🔗 Dependencies

1.  **`@theme-ui/presets`**: Provides theme-ui presets so that we can load in and extend `Swiss`.

2.  **`gatsby`**: Loads in Gatsby.

3.  **`gatsby-link`**: Gatsby Link prefetches pages and loads in changes extremely quick!

4.  **`gatsby-plugin-gatsby-cloud`**: Provides enhancements for the Gatsby Cloud platform.

5.  **`gatsby-plugin-image`**: Creates image derivatives and lazy loads images using the new Gatsby 3.x updates.

6.  **`gatsby-plugin-manifest`**: Provides a manifest.json for the PWA.

7.  **`gatsby-plugin-offline`**: Provides offline support for the PWA.

7.  **`gatsby-plugin-react-helmet`**: `react-helmet` integration to bubble up information such as `<title>`, `<description>`, etc. information to the `<head>`.

8.  **`gatsby-plugin-sharp`**: Transforms the images for `gatsby-plugin-image`.

9.  **`gatsby-plugin-theme-ui`**: Provide Gatsby integration for `theme-ui`.

10.  **`gatsby-source-filesystem`**: Allows Gatsby to source local files as nodes and use them in the GraphQL layer.

11.  **`gatsby-source-graphql`**: Allows Gatsby to source GraphQL and use them in the GraphQL layer.

12.  **`gatsby-transformer-sharp`**: Transforms the images for `gatsby-plugin-image`.

13.  **`prop-types`**: Allows you to specify property types in your components.

14.  **`react`**: React...nuff said!

15.  **`react-dom`**: React's virtual DOM where all the fancy tree updates happen.

16.  **`react-helmet`**: Bubbles up information such as `<title>`, `<description>`, etc. information to the `<head>`.

17.  **`theme-ui`**: Provides a themeing layer based on Emotion.

## 🧪 Testing

1.  **`jest`**: provides examples of unit tests.  Run `yarn test:jest` to perform the tests in the `__tests__` directories.

2.  **`cypress`**: provides examples of e2e tests.  Run `yarn test:cy` to perform the tests in the `cypress` directory which also perform accessiblity checks using the axe library. Note: you need have the site running in development mode `gatsby develop`.

3.  **`Google Lighthouse`**: Google Lighthouse is performed on each deploy Gatsby Cloud.  The latest deployment has a 99 performance score! 
<img alt="Gatsby" src="https://pokedex.xavie.mirmon.co.uk/Lighthouse.png" />

## 🛣 Roadmap V2

1.  **`Alogia`**: provide a more robust filtered search with Algolia.

2.  **`Typescript`**: Move code over to TS using Gatsby's new TS support.
