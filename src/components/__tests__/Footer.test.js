// Package imports
import React from "react"
import renderer from "react-test-renderer"

// Component imports
import Footer from "../Footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
