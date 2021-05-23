/** @jsx jsx */

// Package imports
import { Link, jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      mx: `auto`,
      textAlign: `center`,
      my: 4,
    }}
  >
    Built with
    {` `}
    <Link href="https://www.gatsbyjs.com">Gatsby</Link>
    {` `}
    using data from{" "}
    <Link href="https://graphql-pokemon2.vercel.app">
      graphql-pokemon2.vercel.app
    </Link>
    . All images are copyright to their respective owners.
  </footer>
)

export default Footer
