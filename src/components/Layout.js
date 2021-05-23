

// Package imports
import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// Component imports
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
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
