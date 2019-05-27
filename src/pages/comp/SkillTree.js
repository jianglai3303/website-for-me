import React from "react"
import "../../styles/skill-tree.less"
import { Waypoint } from "react-waypoint"
export default class SkillTree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enterClass: "",
    }
  }
  enterSection() {
    this.setState({
      enterClass: "entered",
    })
  }
  render() {
    return (
      <div>
        <p className="division">WILLIAM LAI JIANG</p>
        <Waypoint bottomOffset="20px" onEnter={this.enterSection.bind(this)}>
          <div className={"skills-tree " + this.state.enterClass}>
            <div className="skills-tree-wrapper">
              <h2 className="skills-tree-title">
                SKILLS
                <br />
                LIST
              </h2>
              <div className="right-list">
                <div className="skills-column">
                  <h3>BASICS</h3>
                  <ul>
                    <li>Linux, Git, Devops</li>
                    <li>AWS, Digital Ocean, Linode</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Front End</h3>
                  <ul>
                    <li>HTML / JS / CSS / JQUERY</li>
                    <li>React / Vue / ANGULAR / Wordpress / Shopify</li>
                    <li>SEO / Responsive Website / High Efficiency</li>
                  </ul>
                </div>

                <div className="skills-column">
                  <h3>Back End</h3>
                  <ul>
                    <li>Node.js Nest.js Express Koa</li>
                    <li>MySQL, GraphQL, MangoDB</li>
                    <li>PYTHON PHP JAVA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    )
  }
}
