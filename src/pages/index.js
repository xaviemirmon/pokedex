import * as React from "react"
import { Link } from "gatsby"
import { Box } from "theme-ui"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SearchList from "../components/SearchList"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: 3,
        py: 4,
        textAlign: "center",
      }}
    >
      <SearchList />
    </Box>
  </Layout>
)

export default IndexPage
