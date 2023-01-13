// Package imports
import React from "react"
import { Box, Heading } from "theme-ui"

// Component imports
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SearchList from "../components/SearchList"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading
      as="h1"
      sx={{
        margin: 0,
        fontSize: `0px`,
      }}
      data-testid="index-heading"
    >
      Pokedex
    </Heading>
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: 3,
        textAlign: "center",
      }}
    >
      <SearchList />
    </Box>
  </Layout>
)

export default IndexPage
