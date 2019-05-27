import React from "react"
import "../../styles/case-study.less"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Waypoint } from "react-waypoint"
class CaseStudyItem extends React.Component {
  render() {
    return (
      <li className="case-item">
        <div className="left-part">
          <h2 className="pro-title">{this.props.data.title}</h2>
          <h2 className="pro-subtitle">{this.props.data.subtitle}</h2>
          <p className="pro-describe">{this.props.data.describe}</p>
          <a href={this.props.data.url}>View Webite</a>
        </div>
        <div className="right-part">
          <div className="number-ind">
            <h2 className="case-number">{this.props.data.number}</h2>
            <h3>SHOWCASE</h3>
          </div>
          <img src={this.props.data.img} />
        </div>
      </li>
    )
  }
}
export default class CaseStudy extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showClass: "" }
  }
  beforeSwipe() {}
  enterSection() {
    this.setState({
      showClass: "show-title",
    })
  }
  render() {
    const cases = [
      {
        key: "edifier",
        title: "Edifier Website",
        subtitle: "North American Project",
        describe:
          "Use CMS Framwork to build site on both backend and frontend. Develop system plugin for efficient maintanence. Optimize SEO for E-Commerce solution in North American",
        number: "01",
        img: "/images/edifier.png",
        url: "https://www.edifier.com/us/en",
      },
      {
        key: "ventmere",
        title: "Ventmere Website",
        subtitle: "Branding",
        describe:
          "Build outstanding website for Ventmere. Using advanced animation to improve UX.",
        number: "02",
        img: "/images/vmg.png",
        url: "https://ventmere.com",
      },
      {
        key: "ventray",
        title: "Ventray Website",
        subtitle: "Website UX Optimization * Functions Development",
        describe:
          "Build high quality website for Ventmere’s in-house brand. Support branding events and promotions. Enhance SEO for google ranking",
        number: "03",
        img: "/images/ventray.png",
        url: "https://www.ventray.com/en-ca",
      },
    ]
    const casesList = cases.map(v => {
      return <CaseStudyItem data={v} key={v.key} />
    })
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      fade: true,
    }
    return (
      <div className="case-study">
        <Waypoint bottomOffset="200px" onEnter={this.enterSection.bind(this)}>
          <div className={"corner-mark " + this.state.showClass}>
            <h2 className="mark-title">Developer</h2>
            <h3 className="mark-meaning">
              CASES LIST<span className="cover" />
            </h3>
            <p>
              international / tech / fashion<span className="cover" />
            </p>
          </div>
        </Waypoint>
        <ul>
          <Slider {...settings} beforeChange={this.beforeSwipe}>
            {casesList}
          </Slider>
        </ul>
      </div>
    )
  }
}
