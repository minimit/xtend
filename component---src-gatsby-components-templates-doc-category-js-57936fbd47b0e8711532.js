(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{f0gI:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y})),r.d(e,"query",(function(){return g}));var a=r("dI71"),n=r("q1tI"),o=r.n(n),i=r("Wbzz"),s=r("2dtT"),l=r.n(s),c=r("ImBX"),m=r("iyGq"),p=r("39lY"),d=r("rGLO"),f=r("cp2m"),u=new l.a({createElement:o.a.createElement,components:{demo:d.a,demovanilla:f.a}}).Compiler,y=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.data,e={};return e.title=t.post.frontmatter.title,e.title=e.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" "),e.title+=t.post.frontmatter.parent&&t.post.frontmatter.parent!==t.post.frontmatter.title?t.post.frontmatter.parent:"",e.title+=t.post.frontmatter.category&&t.post.frontmatter.category!==t.post.frontmatter.title?t.post.frontmatter.category:"",e.title+=t.post.frontmatter.type&&t.post.frontmatter.type!==t.post.frontmatter.title?t.post.frontmatter.type:"",e.description=t.post.frontmatter.description,e.title="/introduction"===Object(c.a)(t.post)?e.description:e.title,o.a.createElement(p.a,{page:t},o.a.createElement(m.a,{title:e.title,description:e.description}),"<div></div>"!==t.post.htmlAst?u(t.post.htmlAst):null,o.a.createElement("div",{className:"gatsby_listing"},o.a.createElement("div",{className:"row row-3"},t.categories.category.sort((function(t,e){return"Addons"===t.title||"By Component"===t.title?1:"Core"===t.title||"By Type"===t.title||"Addons"===e.title||"By Component"===e.title?-1:0})).map((function(t,e){return o.a.createElement("div",{className:"gatsby_listing-group",key:e},o.a.createElement("h2",{className:"h5 h-block rounded-md bg-gray-200 text-center"},t.title.split("-").pop()),o.a.createElement("div",{className:"gatsby_listing-items"},o.a.createElement("div",{className:"row row-stretch"},t.posts.map((function(t,e){var r=t.post;return r.frontmatter.link?o.a.createElement("div",{className:"gatsby_listing-column",key:e},o.a.createElement("a",{href:r.frontmatter.link,target:"_blank",rel:"noreferrer",className:"card gatsby_listing-item"},o.a.createElement("div",{className:"h4"},r.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement("p",null,r.frontmatter.description))):r.frontmatter.parent===r.frontmatter.title?o.a.createElement("div",{className:"gatsby_listing-column",key:e},o.a.createElement(i.Link,{to:Object(c.a)(r),className:"card gatsby_listing-item"},o.a.createElement("div",{className:"h4"},r.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement("p",null,r.frontmatter.description),r.frontmatter.link)):null})))))})))))},e}(o.a.Component),g="3816862450"}}]);
//# sourceMappingURL=component---src-gatsby-components-templates-doc-category-js-57936fbd47b0e8711532.js.map