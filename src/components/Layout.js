/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="//db.onlinewebfonts.com/c/da333251c966d4ed2f0a7b7de061254f?family=FlexoW01-Demi"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            margin: `0 auto`,
            marginTop: `2rem`,
            textAlign: `center`,
          }}
        >
          Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
