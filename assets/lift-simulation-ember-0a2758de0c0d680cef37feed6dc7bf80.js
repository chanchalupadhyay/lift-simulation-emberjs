"use strict"
define("lift-simulation-ember/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/app",["exports","ember-resolver","ember-load-initializers","lift-simulation-ember/config/environment"],(function(e,t,r,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(o,Ember.Application)
var r=a(o)
function o(){var e
i(this,o)
for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u]
return s(f(e=r.call.apply(r,[this].concat(a))),"modulePrefix",n.default.modulePrefix),s(f(e),"podModulePrefix",n.default.podModulePrefix),s(f(e),"Resolver",t.default),e}return o}()
e.default=p,(0,r.default)(p,n.default.modulePrefix)})),define("lift-simulation-ember/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/components/floor",["exports","@glimmer/component"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=Ember.HTMLBars.template({id:"0ygBlLwI",block:'{"symbols":["@name","&default"],"statements":[[10,"div"],[12],[2,"\\n  "],[10,"h3"],[12],[1,[32,1]],[13],[2,"\\n  "],[10,"div"],[12],[2,"\\n    "],[18,2,null],[2,"\\n  "],[13],[2,"\\n  "],[10,"hr"],[12],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":[]}',meta:{moduleName:"lift-simulation-ember/components/floor.hbs"}}),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(r,e)
var t=i(r)
function r(){return n(this,r),t.apply(this,arguments)}return r}(t.default)
e.default=f,Ember._setComponentTemplate(u,f)})),define("lift-simulation-ember/components/game-board",["exports","@glimmer/component"],(function(e,t){var r,n,o,i,l,a,u
function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=Ember.HTMLBars.template({id:"7zjkDqJP",block:'{"symbols":["liftElement","liftIndex","item","index","&default"],"statements":[[18,5,null],[2,"\\n"],[10,"div"],[14,0,"simulation-container"],[12],[2,"\\n  "],[10,"div"],[14,0,"floor-container"],[12],[2,"\\n"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,0,["floorDetails"]]],null]],null]],null,[["default"],[{"statements":[[2,"    "],[8,"floor",[],[["@level","@name"],[[32,3,["floorLevel"]],[32,3,["floorName"]]]],[["default"],[{"statements":[[2,"\\n      "],[10,"div"],[14,0,"button-container"],[12],[2,"\\n"],[6,[37,3],[[30,[36,2],[[32,0,["floorDetails","length"]],[32,3,["floorLevel"]],"up"],null]],null,[["default"],[{"statements":[[2,"        "],[11,"button"],[24,0,"btn-up"],[24,4,"button"],[4,[38,1],["click",[30,[36,0],[[32,0,["buttonPressed"]],"up",[32,3,["floorLevel"]]],null]],null],[12],[2,"Up"],[13],[2,"\\n"]],"parameters":[]}]]],[6,[37,3],[[30,[36,2],[[32,0,["floorDetails","length"]],[32,3,["floorLevel"]],"down"],null]],null,[["default"],[{"statements":[[2,"        "],[11,"button"],[24,0,"btn-down"],[24,4,"button"],[4,[38,1],["click",[30,[36,0],[[32,0,["buttonPressed"]],"down",[32,3,["floorLevel"]]],null]],null],[12],[2,"Down"],[13],[2,"\\n"]],"parameters":[]}]]],[2,"      "],[13],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[3,4]}]]],[2,"  "],[13],[2,"\\n  "],[10,"div"],[14,0,"lift-container"],[12],[2,"\\n"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,0,["liftFloors"]]],null]],null]],null,[["default"],[{"statements":[[2,"    "],[8,"lift",[],[["@liftNumber","@liftFloor"],[[32,2],[32,1]]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n"]],"parameters":[1,2]}]]],[2,"  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["fn","on","is-edge-index","if","-track-array","each"]}',meta:{moduleName:"lift-simulation-ember/components/game-board.hbs"}}),O=(r=Ember._tracked,n=Ember._tracked,o=Ember._action,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(i,e)
var t,r,n,o=m(i)
function i(){var e
s(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(y(e=o.call.apply(o,[this].concat(r))),"floorDetails",l,y(e)),c(y(e),"liftFloors",a,y(e)),e}return t=i,(r=[{key:"buttonPressed",value:function(e,t){var r=0
for(-1===(r="up"===e?this.liftFloors.findIndex((function(e){return e<t-1})):this.liftFloors.findIndex((function(e){return e>t-1})))&&(r=0);this.liftFloors[r]!==t;)this.liftFloors.set(r,this.liftFloors[r]>t?this.liftFloors[r]-1:this.liftFloors[r]+1),this.liftFloors.arrayContentDidChange(r,0,0)}}])&&p(t.prototype,r),n&&p(t,n),i}(t.default),l=h((i=u).prototype,"floorDetails",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{floorLevel:5,floorName:"5th Floor"},{floorLevel:4,floorName:"4th Floor"},{floorLevel:3,floorName:"2nd Floor"},{floorLevel:2,floorName:"1st Floor"},{floorLevel:1,floorName:"Ground Floor"}]}}),a=h(i.prototype,"liftFloors",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[1,3]}}),h(i.prototype,"buttonPressed",[o],Object.getOwnPropertyDescriptor(i.prototype,"buttonPressed"),i.prototype),i)
e.default=O,Ember._setComponentTemplate(g,O)})),define("lift-simulation-ember/components/home",["exports","@glimmer/component"],(function(e,t){var r,n,o,i,l,a
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=Ember.HTMLBars.template({id:"KwVgJXll",block:'{"symbols":["&default"],"statements":[[10,"div"],[12],[2,"\\n  "],[18,1,null],[2,"\\n  "],[8,"link-to",[[24,0,"btn btn-primary"],[24,"role","button"],[24,"aria-pressed","false"]],[["@route"],["simulation"]],[["default"],[{"statements":[[2,"\\n    "],[10,"span"],[12],[2,"\\n"],[6,[37,0],[[32,0,["isHomePage"]]],null,[["default","else"],[{"statements":[[2,"        Re-run simulation\\n"]],"parameters":[]},{"statements":[[2,"        Initiate Simulation\\n"]],"parameters":[]}]]],[2,"    "],[13],[2,"\\n  "]],"parameters":[]}]]],[2,"\\n"],[13]],"hasEval":false,"upvars":["if"]}',meta:{moduleName:"lift-simulation-ember/components/home.hbs"}}),g=(r=Ember.inject.service,n=Ember._tracked,a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(a,e)
var t,r,n,o=b(a)
function a(){var e
c(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return f(d(e=o.call.apply(o,[this].concat(r))),"router",i,d(e)),f(d(e),"isHomePage",l,d(e)),e}return t=a,(r=[{key:"model",value:function(){return{isHomePage:"test",text:"textvalue"}}}])&&s(t.prototype,r),n&&s(t,n),a}(t.default),i=v((o=a).prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=v(o.prototype,"isHomePage",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"simulation"===this.router.currentRouteName}}),o)
e.default=g,Ember._setComponentTemplate(h,g)})),define("lift-simulation-ember/components/lift",["exports","@glimmer/component"],(function(e,t){var r,n,o,i,l,a
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=Ember.HTMLBars.template({id:"0BZaUlF8",block:'{"symbols":["&default"],"statements":[[18,1,null],[2,"\\n"],[10,"div"],[14,0,"lift"],[15,5,[30,[36,0],[[32,0,["liftIndex"]],[32,0,["floorLevel"]]],null]],[12],[2,"\\n  "],[10,"span"],[12],[2,"Lift # "],[1,[32,0,["liftIndex"]]],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["current-class"]}',meta:{moduleName:"lift-simulation-ember/components/lift.hbs"}}),h=(r=Ember._tracked,n=Ember._tracked,a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=p(r)
function r(){var e
c(this,r)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
return f(m(e=t.call.apply(t,[this].concat(o))),"liftIndex",i,m(e)),f(m(e),"floorLevel",l,m(e)),e}return r}(t.default),i=y((o=a).prototype,"liftIndex",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.args.liftNumber}}),l=y(o.prototype,"floorLevel",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.args.liftFloor}}),o)
e.default=h,Ember._setComponentTemplate(v,h)})),define("lift-simulation-ember/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/helpers/app-version",["exports","lift-simulation-ember/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,l=n.shaOnly||n.hideVersion,a=null
return i&&(n.showExtended&&(a=o.match(r.versionExtendedRegExp)),a||(a=o.match(r.versionRegExp))),l&&(a=o.match(r.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("lift-simulation-ember/helpers/current-class",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,o=!1,i=void 0
try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){var r=t(e,2),n=r[0]
return"top: calc(100% - 90px - "+110*(r[1]-1)+"px); left: calc(200px + "+350*(n+1)+"px);"}))
e.default=n})),define("lift-simulation-ember/helpers/is-edge-index",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,o=!1,i=void 0
try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){var r=t(e,3),n=r[0],o=r[1],i=r[2]
return"up"===i?n!==o:"down"===i?1!==o:void 0}))
e.default=n})),define("lift-simulation-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("lift-simulation-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("lift-simulation-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","lift-simulation-ember/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("lift-simulation-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("lift-simulation-ember/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("lift-simulation-ember/initializers/export-application-global",["exports","lift-simulation-ember/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("lift-simulation-ember/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r})),define("lift-simulation-ember/router",["exports","lift-simulation-ember/config/environment"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(l,Ember.Router)
var r=i(l)
function l(){var e
n(this,l)
for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
return f(a(e=r.call.apply(r,[this].concat(i))),"location",t.default.locationType),f(a(e),"rootURL",t.default.rootURL),e}return l}()
e.default=c,c.map((function(){this.route("simulation")}))})),define("lift-simulation-ember/routes/simulation",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=a(e)
if(t){var o=a(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):r}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(f,Ember.Route)
var t,l,a,u=i(f)
function f(){return r(this,f),u.apply(this,arguments)}return t=f,(l=[{key:"model",value:function(){return[{floorLevel:1,currentLift:-1,hasLift:!1},{floorLevel:2,currentLift:1,hasLift:!0},{floorLevel:3,currentLift:-1,hasLift:!1}]}}])&&n(t.prototype,l),a&&n(t,a),f}()
e.default=u})),define("lift-simulation-ember/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lift-simulation-ember/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1iB7N0OK",block:'{"symbols":[],"statements":[[8,"home",[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"lift-simulation-ember/templates/application.hbs"}})
e.default=t})),define("lift-simulation-ember/templates/simulation",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"v61OHt2B",block:'{"symbols":[],"statements":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"],[10,"div"],[14,0,"game-board-container"],[12],[2,"\\n"],[8,"game-board",[],[[],[]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n"],[13]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"lift-simulation-ember/templates/simulation.hbs"}})
e.default=t})),define("lift-simulation-ember/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("lift-simulation-ember/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("lift-simulation-ember/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})}))
define("lift-simulation-ember/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("lift-simulation-ember/config/environment",[],(function(){try{var e="lift-simulation-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("lift-simulation-ember/app").default.create({name:"lift-simulation-ember",version:"0.0.0+4bb04afb"})
