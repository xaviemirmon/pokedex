import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import IndexPage from "../index"

describe("Index component", () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: "Pokedex",
          description: "All your pokemons in one place",
          author: "@xaviemirmon",
        },
      },
      allPokemon: {
        pokemons: [
          {
            name: "Bulbasaur",
            id: "UG9rZW1vbjowMDE=",
            number: "001",
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            imageFile: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "constrained",
                  placeholder: {
                    fallback:
                      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='193'%20height='180'%20viewBox='0%200%20193%20180'%20preserveAspectRatio='none'%3e%3cpath%20d='M149%204c-4%209-8%2010-32%2011-21%201-25%202-34%207-6%203-13%2011-14%2014%200%202%200%203-12%203l-12-1c-2-1-11-4-15-4-5%200-11%209-12%2020l-3%207C6%2074-2%20101%202%20109c2%203%209%209%2017%2014l5%203v9l5%2018%204%2014c-1%202%200%203%201%204l1%202h17c5-2%2011-7%2015-14%203-8%204-8%208-7%203%201%209%209%209%2012l3%201c3-1%204%202%202%206-2%203-1%205%203%204%202%200%204%200%205%202l4%202%202-1-1-1%201-2%201%201%203%202c3%201%204%201%206-1l4-2c2%200%2011-9%2013-13%202-3%205-4%207-2l6%2011c0%202%200%202%203%202h5l5%201h5c6%203%2015-6%2019-17%203-10%200-32-4-36-2-2-1-5%202-6%204-2%2010-10%2011-15%205-17%202-33-10-51-8-14-9-24-5-32%202-5%201-6-4-5-3%201-3%201-3-1%203-8%201-9-5-5l-5%201c0-2-4-6-5-6l-3%203M46%2043v1l-1-1-6%201-5%202h-1v1l-1%201c-1%200-2%200-1%201l-2%201c-2-1-4%202-2%204v1c-1%200-2%200-1-1l-1-1-1%202h-1v2l1%205v2l1%202%201%201c1-1%203%200%203%201l2%201c0-1%200-2%201-1l1-1v-3l1%201%202%201%202-1%201-1c1%200%202-1%201-3%200-2%206-7%2013-9l3-2v-1c3%201%2012%200%209-1h3c3%200%204%200%203-1l-3-1c-2%200-2%200-1-1%204-1-6-4-14-4-6%200-7%200-7%202M14%2074c-7%208-8%2026-2%2026l1-8c0-7%203-19%205-19l1-1c0-2-2-1-5%202m69%205c-7%208-12%2023-7%2026%204%203%2010%201%209-3-2-4-1-18%201-23%203-6%202-6-3%200'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
                  },
                  images: {
                    fallback: {
                      src:
                        "/static/80310517a8741ee267faaa54b7d5c74c/8b331/bulbasaur.jpg",
                      srcSet:
                        "/static/80310517a8741ee267faaa54b7d5c74c/706a9/bulbasaur.jpg 48w,\n/static/80310517a8741ee267faaa54b7d5c74c/205b6/bulbasaur.jpg 97w,\n/static/80310517a8741ee267faaa54b7d5c74c/8b331/bulbasaur.jpg 193w",
                      sizes: "(min-width: 193px) 193px, 100vw",
                    },
                    sources: [
                      {
                        srcSet:
                          "/static/80310517a8741ee267faaa54b7d5c74c/294ea/bulbasaur.avif 48w,\n/static/80310517a8741ee267faaa54b7d5c74c/35d74/bulbasaur.avif 97w,\n/static/80310517a8741ee267faaa54b7d5c74c/87790/bulbasaur.avif 193w",
                        type: "image/avif",
                        sizes: "(min-width: 193px) 193px, 100vw",
                      },
                      {
                        srcSet:
                          "/static/80310517a8741ee267faaa54b7d5c74c/79161/bulbasaur.webp 48w,\n/static/80310517a8741ee267faaa54b7d5c74c/44454/bulbasaur.webp 97w,\n/static/80310517a8741ee267faaa54b7d5c74c/9a572/bulbasaur.webp 193w",
                        type: "image/webp",
                        sizes: "(min-width: 193px) 193px, 100vw",
                      },
                    ],
                  },
                  width: 193,
                  height: 180,
                },
              },
            },
          },
        ],
      },
    })
  })
  it("renders the tests correctly", async () => {
    const mockData = {
      site: {
        siteMetadata: {
          author: "John Doe",
        },
      },
    }

    const { getByTestId } = render(
      <IndexPage data={mockData} location={window.location} />
    )

    console.log(getByTestId("index-heading"))

    expect(getByTestId("header"))
    expect(getByTestId("SearchList"))
    expect(getByTestId("index-heading")).toHaveTextContent("Pokedex")
  })
})
