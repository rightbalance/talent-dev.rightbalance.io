(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{495:function(t,e,r){"use strict";e.dr=void 0;var n=r(6398),o=n.__importStar(r(1972));Object.defineProperty(e,"dr",{enumerable:!0,get:function(){return o.default}}),n.__importDefault(r(6385))},8842:function(t,e,r){"use strict";var n=r(3656);Object.defineProperty(e,"__esModule",{value:!0}),e.useConfig=void 0;var o=r(6398).__importStar(r(2983)),i=(0,o.createContext)({});e.useConfig=function(){return(0,o.useContext)(i)},e.default=function(t){var e=t.children,r=t.loginUrl,u=void 0===r?n.env.NEXT_PUBLIC_AUTH0_LOGIN||"/api/auth/login":r;return o.default.createElement(i.Provider,{value:{loginUrl:u}},e)}},1972:function(t,e,r){"use strict";var n=r(3656);Object.defineProperty(e,"__esModule",{value:!0}),e.useUser=e.UserContext=e.RequestError=void 0;var o=r(6398),i=o.__importStar(r(2983)),u=o.__importDefault(r(8842)),c=function(t){function e(r){var n=t.call(this)||this;return n.status=r,Object.setPrototypeOf(n,e.prototype),n}return o.__extends(e,t),e}(Error);e.RequestError=c;var a="You forgot to wrap your app in <UserProvider>";e.UserContext=(0,i.createContext)({get user(){throw Error(a)},get error(){throw Error(a)},get isLoading(){throw Error(a)},checkSession:function(){throw Error(a)}}),e.useUser=function(){return(0,i.useContext)(e.UserContext)};var f=function(t){return o.__awaiter(void 0,void 0,void 0,function(){var e;return o.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch(t)];case 1:return e=r.sent(),[3,3];case 2:throw r.sent(),new c(0);case 3:if(204==e.status)return[2,void 0];if(e.ok)return[2,e.json()];throw new c(e.status)}})})};e.default=function(t){var r=t.children,c=t.user,a=t.profileUrl,s=void 0===a?n.env.NEXT_PUBLIC_AUTH0_PROFILE||"/api/auth/me":a,l=t.loginUrl,p=t.fetcher,d=void 0===p?f:p,h=o.__read((0,i.useState)({user:c,isLoading:!c}),2),y=h[0],_=h[1],v=(0,i.useCallback)(function(){return o.__awaiter(void 0,void 0,void 0,function(){var t,e;return o.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,d(s)];case 1:return t=r.sent(),_(function(e){return o.__assign(o.__assign({},e),{user:t,error:void 0})}),[3,3];case 2:return e=r.sent(),_(function(t){return o.__assign(o.__assign({},t),{error:e})}),[3,3];case 3:return[2]}})})},[s]);(0,i.useEffect)(function(){y.user||o.__awaiter(void 0,void 0,void 0,function(){return o.__generator(this,function(t){switch(t.label){case 0:return[4,v()];case 1:return t.sent(),_(function(t){return o.__assign(o.__assign({},t),{isLoading:!1})}),[2]}})})},[y.user]);var b=y.user,g=y.error,w=y.isLoading,m=(0,i.useMemo)(function(){return{user:b,error:g,isLoading:w,checkSession:v}},[b,g,w,v]);return i.default.createElement(u.default,{loginUrl:l},i.default.createElement(e.UserContext.Provider,{value:m},r))}},6385:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6398),o=n.__importStar(r(2983)),i=r(8842),u=r(1972),c=function(){return o.default.createElement(o.default.Fragment,null)},a=function(){return o.default.createElement(o.default.Fragment,null)};e.default=function(t,e){return void 0===e&&(e={}),function(r){var f=e.returnTo,s=e.onRedirecting,l=e.onError,p=(0,i.useConfig)().loginUrl,d=(0,u.useUser)(),h=d.user,y=d.error,_=d.isLoading;return((0,o.useEffect)(function(){if((!h||y)&&!_){if(f)t=f;else{var t,e=window.location.toString();t=e.replace(new URL(e).origin,"")||"/"}window.location.assign("".concat(p,"?returnTo=").concat(encodeURIComponent(t)))}},[h,y,_]),y)?(void 0===l?a:l)(y):h?o.default.createElement(t,n.__assign({user:h},r)):(void 0===s?c:s)()}}},3765:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9022)}])},9022:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return i}});var n=r(7458),o=r(495);function i(t){let{Component:e,pageProps:r}=t;return(0,n.jsx)(o.dr,{children:(0,n.jsx)(e,{...r})})}},3656:function(t){var e,r,n,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a=[],f=!1,s=-1;function l(){f&&n&&(f=!1,n.length?a=n.concat(a):s=-1,a.length&&p())}function p(){if(!f){var t=c(l);f=!0;for(var e=a.length;e;){for(n=a,a=[];++s<e;)n&&n[s].run();s=-1,e=a.length}n=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new d(t,e)),1!==a.length||f||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}},6398:function(t,e,r){"use strict";r.r(e),r.d(e,{__assign:function(){return i},__asyncDelegator:function(){return j},__asyncGenerator:function(){return P},__asyncValues:function(){return T},__await:function(){return E},__awaiter:function(){return h},__classPrivateFieldGet:function(){return k},__classPrivateFieldIn:function(){return L},__classPrivateFieldSet:function(){return I},__createBinding:function(){return _},__decorate:function(){return c},__esDecorate:function(){return f},__exportStar:function(){return v},__extends:function(){return o},__generator:function(){return y},__importDefault:function(){return U},__importStar:function(){return C},__makeTemplateObject:function(){return x},__metadata:function(){return d},__param:function(){return a},__propKey:function(){return l},__read:function(){return g},__rest:function(){return u},__runInitializers:function(){return s},__setFunctionName:function(){return p},__spread:function(){return w},__spreadArray:function(){return O},__spreadArrays:function(){return m},__values:function(){return b}});var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}function c(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u}function a(t,e){return function(r,n){e(r,n,t)}}function f(t,e,r,n,o,i){function u(t){if(void 0!==t&&"function"!=typeof t)throw TypeError("Function expected");return t}for(var c,a=n.kind,f="getter"===a?"get":"setter"===a?"set":"value",s=!e&&t?n.static?t:t.prototype:null,l=e||(s?Object.getOwnPropertyDescriptor(s,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var h={};for(var y in n)h[y]="access"===y?{}:n[y];for(var y in n.access)h.access[y]=n.access[y];h.addInitializer=function(t){if(p)throw TypeError("Cannot add initializers after decoration has completed");i.push(u(t||null))};var _=(0,r[d])("accessor"===a?{get:l.get,set:l.set}:l[f],h);if("accessor"===a){if(void 0===_)continue;if(null===_||"object"!=typeof _)throw TypeError("Object expected");(c=u(_.get))&&(l.get=c),(c=u(_.set))&&(l.set=c),(c=u(_.init))&&o.unshift(c)}else(c=u(_))&&("field"===a?o.unshift(c):l[f]=c)}s&&Object.defineProperty(s,n.name,l),p=!0}function s(t,e,r){for(var n=arguments.length>2,o=0;o<e.length;o++)r=n?e[o].call(t,r):e[o].call(t);return n?r:void 0}function l(t){return"symbol"==typeof t?t:"".concat(t)}function p(t,e,r){return"symbol"==typeof e&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})}function d(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function h(t,e,r,n){return new(r||(r=Promise))(function(o,i){function u(t){try{a(n.next(t))}catch(t){i(t)}}function c(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(u,c)}a((n=n.apply(t,e||[])).next())})}function y(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var _=Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]};function v(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||_(e,t,r)}function b(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function w(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(g(arguments[e]));return t}function m(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n}function O(t,e,r){if(r||2==arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function E(t){return this instanceof E?(this.v=t,this):new E(t)}function P(t,e,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){i.push([t,e,r,n])>1||c(t,e)})})}function c(t,e){try{var r;(r=o[t](e)).value instanceof E?Promise.resolve(r.value.v).then(a,f):s(i[0][2],r)}catch(t){s(i[0][3],t)}}function a(t){c("next",t)}function f(t){c("throw",t)}function s(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}}function j(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:E(t[n](e)),done:!1}:o?o(e):e}:o}}function T(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=b(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){!function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)}(n,o,(e=t[r](e)).done,e.value)})}}}function x(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var S=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function C(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&_(e,t,r);return S(e,t),e}function U(t){return t&&t.__esModule?t:{default:t}}function k(t,e,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(t):n?n.value:e.get(t)}function I(t,e,r,n,o){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(t,r):o?o.value=r:e.set(t,r),r}function L(t,e){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof t?e===t:t.has(e)}e.default={__extends:o,__assign:i,__rest:u,__decorate:c,__param:a,__metadata:d,__awaiter:h,__generator:y,__createBinding:_,__exportStar:v,__values:b,__read:g,__spread:w,__spreadArrays:m,__spreadArray:O,__await:E,__asyncGenerator:P,__asyncDelegator:j,__asyncValues:T,__makeTemplateObject:x,__importStar:C,__importDefault:U,__classPrivateFieldGet:k,__classPrivateFieldSet:I,__classPrivateFieldIn:L}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(3765),e(6469)}),_N_E=t.O()}]);