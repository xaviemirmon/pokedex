import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../seo"

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: "Pokedex",
          description: "All your pokemons in one place",
          author: "@xaviemirmon",
        },
      },
    })
  })

  it("renders the tests correctly", () => {
    const mockTitle = "Home | Pokedex"
    const mockDescription = "All your pokemons in one place"
    const mockTwitterHandler = "@xaviemirmon"

    render(<SEO title="Home" />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
    expect(metaTags[5].content).toBe(mockTwitterHandler)
    expect(metaTags.length).toBe(8)
  })
})
