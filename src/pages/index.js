import React from "react"
import HeaderBanner from "./comp/HeadBanner"
import SkillsIntro from "./comp/SkillsIntro"
import CaseStudy from "./comp/CaseStudy"
import SkillTree from "./comp/SkillTree"
import "../styles/global.less"

export default () => (
  <div>
    <HeaderBanner />
    <SkillsIntro />
    <CaseStudy />
    <SkillTree />
  </div>
)
