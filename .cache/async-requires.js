// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/future/website-for-me/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-comp-case-study-js": () => import("/Users/future/website-for-me/src/pages/comp/CaseStudy.js" /* webpackChunkName: "component---src-pages-comp-case-study-js" */),
  "component---src-pages-comp-head-banner-js": () => import("/Users/future/website-for-me/src/pages/comp/HeadBanner.js" /* webpackChunkName: "component---src-pages-comp-head-banner-js" */),
  "component---src-pages-comp-skills-intro-js": () => import("/Users/future/website-for-me/src/pages/comp/SkillsIntro.js" /* webpackChunkName: "component---src-pages-comp-skills-intro-js" */),
  "component---src-pages-comp-skill-tree-js": () => import("/Users/future/website-for-me/src/pages/comp/SkillTree.js" /* webpackChunkName: "component---src-pages-comp-skill-tree-js" */),
  "component---src-pages-index-js": () => import("/Users/future/website-for-me/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/future/website-for-me/.cache/data.json")

