const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ventmere/hello-world/.cache/dev-404-page.js"))),
  "component---src-pages-comp-case-study-js": hot(preferDefault(require("/Users/ventmere/hello-world/src/pages/comp/CaseStudy.js"))),
  "component---src-pages-comp-head-banner-js": hot(preferDefault(require("/Users/ventmere/hello-world/src/pages/comp/HeadBanner.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ventmere/hello-world/src/pages/index.js")))
}

