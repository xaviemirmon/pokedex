/** @jsxFrag jsx */

// Package imports
import * as React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

// Component imports
import Header from "./Header"
import Footer from "./Footer"

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      {/* Pass font files up to main header */}
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
