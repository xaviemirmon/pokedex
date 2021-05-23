// Package imports
import React from "react"
import { Box } from "theme-ui"

// Component import
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Box>
      <h1>404: Not Found</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    </Box>
  </Layout>
)

export default NotFoundPage
