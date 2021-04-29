import React from "react"
import renderer from "react-test-renderer"

import SkillTree from "./SkillTree"

describe("SkillTree Section", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SkillTree />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
