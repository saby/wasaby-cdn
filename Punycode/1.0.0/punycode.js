/**
 * Copyrights licensed under the MIT License. See the accompanying LICENSE-MIT.txt file.
 * https://github.com/bestiejs/punycode.js/blob/master/LICENSE-MIT.txt
 */
(function(p){const maxInt=2147483647,base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,delimiter="-",regexPunycode=/^xn--/,regexNonASCII=/[^\0-\x7E]/,regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},baseMinusTMin=35,floor=Math.floor,stringFromCharCode=String.fromCharCode;function error(o){throw new RangeError(errors[o])}function map(o,r){const e=[];let t=o.length;for(;t--;)e[t]=r(o[t]);return e}function mapDomain(o,r){const e=o.split("@");let t="";return e.length>1&&(t=e[0]+"@",o=e[1]),t+map((o=o.replace(regexSeparators,".")).split("."),r).join(".")}const basicToDigit=function(o){return o-48<10?o-22:o-65<26?o-65:o-97<26?o-97:36},digitToBasic=function(o,r){return o+22+75*(o<26)-((0!=r)<<5)},adapt=function(o,r,e){let t=0;for(o=e?floor(o/700):o>>1,o+=floor(o/r);o>455;t+=36)o=floor(o/35);return floor(t+36*o/(o+38))},decode=function(o){const r=[],e=o.length;let t=0,n=128,i=72,a=o.lastIndexOf("-");a<0&&(a=0);for(let e=0;e<a;++e)o.charCodeAt(e)>=128&&error("not-basic"),r.push(o.charCodeAt(e));for(let c=a>0?a+1:0;c<e;){let a=t;for(let r=1,n=36;;n+=36){c>=e&&error("invalid-input");const a=(l=o.charCodeAt(c++))-48<10?l-22:l-65<26?l-65:l-97<26?l-97:36;(a>=36||a>floor((maxInt-t)/r))&&error("overflow"),t+=a*r;const s=n<=i?1:n>=i+26?26:n-i;if(a<s)break;const f=36-s;r>floor(maxInt/f)&&error("overflow"),r*=f}const s=r.length+1;i=adapt(t-a,s,0==a),floor(t/s)>maxInt-n&&error("overflow"),n+=floor(t/s),t%=s,r.splice(t++,0,n)}var l;return String.fromCodePoint(...r)},toUnicode=function(o){return mapDomain(o,function(o){return regexPunycode.test(o)?decode(o.slice(4).toLowerCase()):o})};p.toUnicode=toUnicode})(Punycode={})
