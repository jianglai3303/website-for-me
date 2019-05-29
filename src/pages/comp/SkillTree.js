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
                SKILLS&nbsp;
                <br />
                LIST
              </h2>
              <div className="right-list">
                <div className="skills-column">
                  <h3>Front End</h3>
                  <ul>
                    <li>HTML, JS, CSS, Less, PostCss, Jquery</li>
                    <li>React, MobX, Vue, Angular, RxJs, Wordpress, Shopify</li>
                    <li>Npm , Webpack</li>
                    <li>SVG, Three.js, CSS3, Barba.js, Sockit.io</li>
                    <li>Mocha, Nightwatch</li>
                    <li>SEO, Responsive Website, LightHouse</li>
                  </ul>
                </div>

                <div className="skills-column">
                  <h3>Back End</h3>
                  <ul>
                    <li>Gatsby, Node.js, Nest.js, Django, Express, Koa</li>
                    <li>GraphQL, NoSQL, MangoDB, MySQL</li>
                    <li>CDN, Redis, Memcached</li>
                    <li>Nginx, Apache, AWS, Digital Ocean, Linode</li>

                    <li>Sentry, Uptimerobot</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>BASICS</h3>
                  <ul>
                    <li>Docker, Linux, Git, Devops, CI, Jenkins</li>

                    <li>Agile, Jira, Asana</li>
                    <li>PhotoShop, Sketch</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Language</h3>
                  <ul>
                    <li>JavaScript, TypeScript, Python PHP </li>
                    <li>Java, C#, C++</li>
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
