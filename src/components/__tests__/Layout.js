// Package imports
import React from "react"
import renderer from "react-test-renderer"

// Component imports
import Layout from "../Layout"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <p>Testing</p>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
