import React from "react"
class CaseStudyItem extends React.Component {
  render() {
    return (
      <li class="case-item">
        <div class="left-part">
          <h2 class="pro-title">{this.props.data.title}</h2>
          <h2 class="pro-subtitle">{this.props.data.subtitle}</h2>
          <p class="pro-describe">{this.props.data.describe}</p>
          <a href={this.props.data.url}>View Webite</a>
        </div>
        <div class="right-part">
          <div class="number-ind">
            <h2 class="case-number">{this.props.data.number}</h2>
            <h3>SHOWCASE</h3>
          </div>
          <img src={this.props.data.img} />
        </div>
      </li>
    )
  }
}
export default class CaseStudy extends React.Component {
  render() {
    const cases = [
      {
        title: "Edifier Website",
        subtitle: "North American Project",
        describe:
          "Use CMS Framwork to build site on both backend and frontend. Develop system plugin for efficient maintanence. Optimize SEO for E-Commerce solution in North American",
        number: "01",
        img: "/static/edifier.png",
        url: "//www.edifier.com/us/en",
      },
    ]
    const casesList = cases.map(v => {
      return <CaseStudyItem data={v} />
    })
    return (
      <div class="case-study">
        <div class="corner-mark">
          <h2 class="mark-title">Developer</h2>
          <h3 class="mark-meaning">CASES LIST</h3>
          <p>international / tech / fashion</p>
        </div>
        <ul>{casesList}</ul>
      </div>
    )
  }
}
