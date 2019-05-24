// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/ventmere/hello-world/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-comp-case-study-js": () => import("/Users/ventmere/hello-world/src/pages/comp/CaseStudy.js" /* webpackChunkName: "component---src-pages-comp-case-study-js" */),
  "component---src-pages-comp-head-banner-js": () => import("/Users/ventmere/hello-world/src/pages/comp/HeadBanner.js" /* webpackChunkName: "component---src-pages-comp-head-banner-js" */),
  "component---src-pages-index-js": () => import("/Users/ventmere/hello-world/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ventmere/hello-world/.cache/data.json")

