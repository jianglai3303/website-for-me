import React from "react"
import "../../styles/skills-intro.less"
import { Waypoint } from 'react-waypoint';
export default class SkillsIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {svgClass: ''};
    }
    enterSection(){
        this.setState({
            svgClass: 'up'
        })
    }
    render(){
        return(
            <Waypoint bottomOffset="200px" onEnter={this.enterSection.bind(this)}>
            <div className={"skills-intro "+ this.state.svgClass} >
                <ul>
                    <li><img src="//cdn.ventmere.com/edifier-dev/2016-11/front-end.png?v=2"/><p>Front End</p>
                    </li>
                    <li><img src="//cdn.ventmere.com/edifier-dev/2016-11/back-end.png?v=2"/><p>Back End</p>
                    </li>
                    <li><img src="//cdn.ventmere.com/edifier-dev/2016-11/ai.png?v=2"/><p>AI</p>
                    </li>
                </ul>
                <div className='rect-svg'>
                    <svg viewBox="0 0 400 400">
                        <defs>
                            <clipPath id="cut-off-bottom">
                                <rect height="1000" width="400" x="0" y="0"/>
                            </clipPath>
                        </defs>
                        <rect fillOpacity="0" height="392" strokeWidth="4" stroke="white" width="392" x="2" y="2"/>
                        <rect clipPath="url(#cut-off-bottom)" fillOpacity="0" height="392" strokeWidth="4" stroke="#282828" width="392" x="2" y="2"/>
                    </svg>
                    <div className="right-bref-join">WEB</div>
                </div>
                <div className="right-brief">
                    <h2>DEVELOPMENT</h2>
                    <h3>Professional</h3>
                    <p>
                        Site Building / SEO / Animation & Effects / Server Deployment / Database / Devops ......
                    </p>
                </div>
            </div>
            </Waypoint>

        )
    }
}