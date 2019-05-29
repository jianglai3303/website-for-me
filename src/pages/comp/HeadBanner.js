import React from "react"
import "../../styles/head-banner.less"
export default class HeaderBanner extends React.Component {
  render() {
    return (
      <div className="Head--Banner">
        <div className="content-wrapper">
          <h2 className="intro-greet">
            <span>NICE TO</span>
            <span>MEET YOU!</span>
          </h2>
          <h1 className="intro--me">
            <span className="intro--me--first">I AM</span>
          </h1>
          <h1 className="intro--name">
            <span>WILLIAM</span>
          </h1>
          <h3 className="intro--description">
            I am code enthusiast ,<br />
            professional full-stack Web developer
            <br />
            and animal lover
          </h3>
          <p className="contact">
            <a href="mailto:jianglai3303@gmail.com">
              <img src="/images/email.png" />
            </a>
            <a href="https://github.com/jianglai3303" target="_blank">
              <img src="/images/github.png" />
            </a>
            <a href="https://twitter.com/LAIJIANG3303" target="_blank">
              <img src="/images/twitter.png" />
            </a>
          </p>
          <div className="right--triangle--area">
            <svg height="0" width="0">
              <defs>
                <clipPath clipPathUnits="objectBoundingBox" id="cp">
                  <path d="M0.500, 0.945 L0.994, 0.090 L0.006, 0.090 L0.500, 0.945 L0.500, 0.650 L0.262, 0.238 L0.738, 0.237 L0.500, 0.650z" />
                </clipPath>
              </defs>
            </svg>
            <div className="triangle first" />
            <div className="triangle second" />
          </div>
        </div>
      </div>
    )
  }
}
