!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(e,t,r){var o,i,a,u,f,c,l=0,s=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError(n);function S(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function O(e){return l=e,f=setTimeout(j,t),s?S(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-l>=a}function j(){var e=g();if(T(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-c);return p?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,y&&o?S(e):(o=i=void 0,u)}function w(){var e=g(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(p)return f=setTimeout(j,t),S(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,v(r)&&(s=!!r.leading,a=(p="maxWait"in r)?d(b(r.maxWait)||0,t):a,y="trailing"in r?!!r.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return v(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};let y={};const S=document.querySelector(".feedback-form"),O=document.querySelector("input"),T=document.querySelector("textarea");document.querySelector("button");JSON.parse(localStorage.getItem("feedback-form-state"))&&(O.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,T.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),S.addEventListener("input",t((function(e){y.email=O.value,y.message=T.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),S.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.602d5132.js.map
