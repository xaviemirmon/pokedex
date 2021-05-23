/** @jsx jsx */
// ^^ is the pragma required for using the theme-ui sx prop on non-theme-ui elements

// Package imports
import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { jsx } from "theme-ui"

// Component imports
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      {/* Pass font files up to main header */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div
        sx={{
          mx: `auto`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
