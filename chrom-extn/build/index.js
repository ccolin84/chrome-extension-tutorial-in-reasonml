!function(r){var n={};function e(t){if(n[t])return n[t].exports;var u=n[t]={i:t,l:!1,exports:{}};return r[t].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var u in r)e.d(t,u,function(n){return r[n]}.bind(null,u));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="/Users/colincrawford/Desktop/code/Projects/ReasonChromeExtn/chrom-extn/build/",e(e.s=5)}([function(r,n,e){"use strict";var t=e(2);n.caml_array_dup=function(r){return r.slice(0)},n.caml_array_sub=function(r,n,e){for(var t=new Array(e),u=0,c=n;u<e;)t[u]=r[c],u=u+1|0,c=c+1|0;return t},n.caml_array_concat=function(r){var n=function(r,n){for(;;){var e=n,t=r;if(!e)return t;n=e[1],r=e[0].length+t|0}}(0,r),e=new Array(n);return function(r,n,e){for(;;){var t=e,u=n;if(!t)return 0;for(var c=t[0],a=c.length,o=u,i=0;i<a;)r[o]=c[i],o=o+1|0,i=i+1|0;e=t[1],n=o}}(e,0,r),e},n.caml_make_vect=function(r,n){for(var e=new Array(r),t=0,u=r-1|0;t<=u;++t)e[t]=n;return e},n.caml_make_float_vect=function(r){for(var n=new Array(r),e=0,t=r-1|0;e<=t;++e)n[e]=0;return n},n.caml_array_blit=function(r,n,e,t,u){if(t<=n){for(var c=0,a=u-1|0;c<=a;++c)e[c+t|0]=r[c+n|0];return 0}for(var o=u-1|0;o>=0;--o)e[o+t|0]=r[o+n|0];return 0},n.caml_array_get=function(r,n){if(n<0||n>=r.length)throw[t.invalid_argument,"index out of bounds"];return r[n]},n.caml_array_set=function(r,n,e){if(n<0||n>=r.length)throw[t.invalid_argument,"index out of bounds"];return r[n]=e,0}},function(r,n,e){"use strict";var t=e(0);function u(r,n){for(;;){var e=n,c=r,a=c.length,o=0===a?1:a,i=o-e.length|0;if(0===i)return c.apply(null,e);if(!(i<0))return function(r,n){return function(e){return u(r,n.concat([e]))}}(c,e);n=t.caml_array_sub(e,o,0|-i),r=c.apply(null,t.caml_array_sub(e,0,o))}}function c(r,n,e){if(e>7||e<0)return u(r,[n]);switch(e){case 0:case 1:return r(n);case 2:return function(e){return r(n,e)};case 3:return function(e,t){return r(n,e,t)};case 4:return function(e,t,u){return r(n,e,t,u)};case 5:return function(e,t,u,c){return r(n,e,t,u,c)};case 6:return function(e,t,u,c,a){return r(n,e,t,u,c,a)};case 7:return function(e,t,u,c,a,o){return r(n,e,t,u,c,a,o)}}}function a(r,n){var e=r.length;return 1===e?r(n):c(r,n,e)}function o(r,n,e,t){if(t>7||t<0)return u(r,[n,e]);switch(t){case 0:case 1:return u(r(n),[e]);case 2:return r(n,e);case 3:return function(t){return r(n,e,t)};case 4:return function(t,u){return r(n,e,t,u)};case 5:return function(t,u,c){return r(n,e,t,u,c)};case 6:return function(t,u,c,a){return r(n,e,t,u,c,a)};case 7:return function(t,u,c,a,o){return r(n,e,t,u,c,a,o)}}}function i(r,n,e){var t=r.length;return 2===t?r(n,e):o(r,n,e,t)}function f(r,n,e,t,c){var a=0;if(c>7||c<0)return u(r,[n,e,t]);switch(c){case 0:case 1:a=1;break;case 2:return u(r(n,e),[t]);case 3:return r(n,e,t);case 4:return function(u){return r(n,e,t,u)};case 5:return function(u,c){return r(n,e,t,u,c)};case 6:return function(u,c,a){return r(n,e,t,u,c,a)};case 7:return function(u,c,a,o){return r(n,e,t,u,c,a,o)}}return 1===a?u(r(n),[e,t]):void 0}function s(r,n,e,t){var u=r.length;return 3===u?r(n,e,t):f(r,n,e,t,u)}function l(r,n,e,t,c,a){var o=0;if(a>7||a<0)return u(r,[n,e,t,c]);switch(a){case 0:case 1:o=1;break;case 2:return u(r(n,e),[t,c]);case 3:return u(r(n,e,t),[c]);case 4:return r(n,e,t,c);case 5:return function(u){return r(n,e,t,c,u)};case 6:return function(u,a){return r(n,e,t,c,u,a)};case 7:return function(u,a,o){return r(n,e,t,c,u,a,o)}}return 1===o?u(r(n),[e,t,c]):void 0}function _(r,n,e,t,u){var c=r.length;return 4===c?r(n,e,t,u):l(r,n,e,t,u,c)}function v(r,n,e,t,c,a,o){var i=0;if(o>7||o<0)return u(r,[n,e,t,c,a]);switch(o){case 0:case 1:i=1;break;case 2:return u(r(n,e),[t,c,a]);case 3:return u(r(n,e,t),[c,a]);case 4:return u(r(n,e,t,c),[a]);case 5:return r(n,e,t,c,a);case 6:return function(u){return r(n,e,t,c,a,u)};case 7:return function(u,o){return r(n,e,t,c,a,u,o)}}return 1===i?u(r(n),[e,t,c,a]):void 0}function d(r,n,e,t,u,c){var a=r.length;return 5===a?r(n,e,t,u,c):v(r,n,e,t,u,c,a)}function g(r,n,e,t,c,a,o,i){var f=0;if(i>7||i<0)return u(r,[n,e,t,c,a,o]);switch(i){case 0:case 1:f=1;break;case 2:return u(r(n,e),[t,c,a,o]);case 3:return u(r(n,e,t),[c,a,o]);case 4:return u(r(n,e,t,c),[a,o]);case 5:return u(r(n,e,t,c,a),[o]);case 6:return r(n,e,t,c,a,o);case 7:return function(u){return r(n,e,t,c,a,o,u)}}return 1===f?u(r(n),[e,t,c,a,o]):void 0}function h(r,n,e,t,u,c,a){var o=r.length;return 6===o?r(n,e,t,u,c,a):g(r,n,e,t,u,c,a,o)}function y(r,n,e,t,c,a,o,i,f){var s=0;if(f>7||f<0)return u(r,[n,e,t,c,a,o,i]);switch(f){case 0:case 1:s=1;break;case 2:return u(r(n,e),[t,c,a,o,i]);case 3:return u(r(n,e,t),[c,a,o,i]);case 4:return u(r(n,e,t,c),[a,o,i]);case 5:return u(r(n,e,t,c,a),[o,i]);case 6:return u(r(n,e,t,c,a,o),[i]);case 7:return r(n,e,t,c,a,o,i)}return 1===s?u(r(n),[e,t,c,a,o,i]):void 0}function m(r,n,e,t,u,c,a,o){var i=r.length;return 7===i?r(n,e,t,u,c,a,o):y(r,n,e,t,u,c,a,o,i)}function b(r,n,e,t,c,a,o,i,f,s){var l=0;if(s>7||s<0)return u(r,[n,e,t,c,a,o,i,f]);switch(s){case 0:case 1:l=1;break;case 2:return u(r(n,e),[t,c,a,o,i,f]);case 3:return u(r(n,e,t),[c,a,o,i,f]);case 4:return u(r(n,e,t,c),[a,o,i,f]);case 5:return u(r(n,e,t,c,a),[o,i,f]);case 6:return u(r(n,e,t,c,a,o),[i,f]);case 7:return u(r(n,e,t,c,a,o,i),[f])}return 1===l?u(r(n),[e,t,c,a,o,i,f]):void 0}function p(r,n,e,t,u,c,a,o,i){var f=r.length;return 8===f?r(n,e,t,u,c,a,o,i):b(r,n,e,t,u,c,a,o,i,f)}n.app=u,n.curry_1=c,n._1=a,n.__1=function(r){return 1===r.length?r:function(n){return a(r,n)}},n.curry_2=o,n._2=i,n.__2=function(r){return 2===r.length?r:function(n,e){return i(r,n,e)}},n.curry_3=f,n._3=s,n.__3=function(r){return 3===r.length?r:function(n,e,t){return s(r,n,e,t)}},n.curry_4=l,n._4=_,n.__4=function(r){return 4===r.length?r:function(n,e,t,u){return _(r,n,e,t,u)}},n.curry_5=v,n._5=d,n.__5=function(r){return 5===r.length?r:function(n,e,t,u,c){return d(r,n,e,t,u,c)}},n.curry_6=g,n._6=h,n.__6=function(r){return 6===r.length?r:function(n,e,t,u,c,a){return h(r,n,e,t,u,c,a)}},n.curry_7=y,n._7=m,n.__7=function(r){return 7===r.length?r:function(n,e,t,u,c,a,o){return m(r,n,e,t,u,c,a,o)}},n.curry_8=b,n._8=p,n.__8=function(r){return 8===r.length?r:function(n,e,t,u,c,a,o,i){return p(r,n,e,t,u,c,a,o,i)}}},function(r,n,e){"use strict";var t=["Out_of_memory",0],u=["Sys_error",-1],c=["Failure",-2],a=["Invalid_argument",-3],o=["End_of_file",-4],i=["Division_by_zero",-5],f=["Not_found",-6],s=["Match_failure",-7],l=["Stack_overflow",-8],_=["Sys_blocked_io",-9],v=["Assert_failure",-10],d=["Undefined_recursive_module",-11];t.tag=248,u.tag=248,c.tag=248,a.tag=248,o.tag=248,i.tag=248,f.tag=248,s.tag=248,l.tag=248,_.tag=248,v.tag=248,d.tag=248,n.out_of_memory=t,n.sys_error=u,n.failure=c,n.invalid_argument=a,n.end_of_file=o,n.division_by_zero=i,n.not_found=f,n.match_failure=s,n.stack_overflow=l,n.sys_blocked_io=_,n.assert_failure=v,n.undefined_recursive_module=d},,,function(r,n,e){"use strict";var t=e(1),u=e(6),c={color:"green"};chrome.runtime.onInstalled.addListener(function(){return chrome.storage.sync.set(c,function(){return console.log(c),0}),0});var a={};a.conditions=[t._1(u.DeclarativeContent[0],"developer.chrome.com")],a.actions=[t._1(u.DeclarativeContent[1],0)];var o=[a];chrome.declarativeContent.onPageChanged.removeRules(void 0,function(){return chrome.declarativeContent.onPageChanged.addRules(o),0}),n.extensionData=c,n.rules=a,n.rulesArr=o},function(r,n,e){"use strict";var t=[[]],u=[[]],c=[function(r){return new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:r}})},function(){return new chrome.declarativeContent.ShowPageAction},[]];n.Runtime=t,n.Storage=u,n.DeclarativeContent=c,n.Tabs=[]}]);