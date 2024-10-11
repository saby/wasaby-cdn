/*
 Highcharts JS v9.0.1.1 (2021-02-15)

 Client side exporting module

 (c) 2015-2021 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js","/cdn/Highcharts/9.0.1.1/modules/exporting"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,b,n,h){a.hasOwnProperty(b)||(a[b]=h.apply(null,n))}a=a?a._modules:{};g(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],function(a){var b=a.win,n=b.document,
h=b.URL||b.webkitURL||b,g=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&h.createObjectURL){var q=b.atob(a[3]),l=new b.ArrayBuffer(q.length);l=new b.Uint8Array(l);for(var d=0;d<l.length;++d)l[d]=q.charCodeAt(d);a=new b.Blob([l],{type:a[1]});return h.createObjectURL(a)}};a=a.downloadURL=function(a,h){var l=b.navigator,d=n.createElement("a");if("string"===typeof a||a instanceof
String||!l.msSaveOrOpenBlob){a=""+a;if(/Edge\/\d+/.test(l.userAgent)||2E6<a.length)if(a=g(a)||"",!a)throw Error("Failed to convert to blob");if("undefined"!==typeof d.download)d.href=a,d.download=h,n.body.appendChild(d),d.click(),n.body.removeChild(d);else try{var m=b.open(a,"chart");if("undefined"===typeof m||null===m)throw Error("Failed to open window");}catch(v){b.location.href=a}}else l.msSaveOrOpenBlob(a,h)};return{dataURLtoBlob:g,downloadURL:a}});g(a,"Extensions/OfflineExporting.js",[a["Core/Chart/Chart.js"],
a["Core/Globals.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"],a["Extensions/DownloadURL.js"]],function(a,b,g,h,G){function q(a,b){var f=v.getElementsByTagName("head")[0],c=v.createElement("script");c.type="text/javascript";c.src=a;c.onload=b;c.onerror=function(){A("Error loading script "+a)};f.appendChild(c)}function n(a){var e=m.navigator.userAgent;e=-1<e.indexOf("WebKit")&&0>e.indexOf("Chrome");try{if(!e&&!b.isFirefox)return B.createObjectURL(new m.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(f){}return"data:image/svg+xml;charset=UTF-8,"+
encodeURIComponent(a)}function l(a,b,f,c,H,p,h,d,l){var k=new m.Image,e=function(){setTimeout(function(){var e=v.createElement("canvas"),p=e.getContext&&e.getContext("2d");try{if(p){e.height=k.height*c;e.width=k.width*c;p.drawImage(k,0,0,e.width,e.height);try{var w=e.toDataURL(b);H(w,b,f,c)}catch(D){g(a,b,f,c)}}else h(a,b,f,c)}finally{l&&l(a,b,f,c)}},I)},C=function(){d(a,b,f,c);l&&l(a,b,f,c)};var g=function(){k=new m.Image;g=p;k.crossOrigin="Anonymous";k.onload=e;k.onerror=C;k.src=a};k.onload=e;k.onerror=
C;k.src=a}function d(a,b,f,c){function e(a,b){var c=a.width.baseVal.value+2*b;b=a.height.baseVal.value+2*b;c=new m.jsPDF(b>c?"p":"l","pt",[c,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),function(a){a.parentNode.removeChild(a)});b=a.querySelectorAll("linearGradient");for(var f=0;f<b.length;f++)for(var d=b[f].querySelectorAll("stop"),e=0;e<d.length&&"0"===d[e].getAttribute("offset")&&"0"===d[e+1].getAttribute("offset");)d[e].remove(),e++;[].forEach.call(a.querySelectorAll("tspan"),
function(a){"\u200b"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))});m.svg2pdf(a,c,{removeInvalid:!0});return c.output("datauristring")}function p(){g.innerHTML=a;var b=g.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["font-family","font-size"].forEach(function(b){for(var c=a;c&&c!==g;){if(c.style[b]){a.style[b]=c.style[b];break}c=c.parentNode}});a.style["font-family"]=a.style["font-family"]&&a.style["font-family"].split(" ").splice(-1);d=a.getElementsByTagName("title");
[].forEach.call(d,function(b){a.removeChild(b)})});b=e(g.firstChild,0);try{y(b,x),c&&c()}catch(J){f(J)}}var h=!0,d=b.libURL||E().exporting.libURL,g=v.createElement("div"),k=b.type||"image/png",x=(b.filename||"chart")+"."+("image/svg+xml"===k?"svg":k.split("/")[1]),z=b.scale||1;d="/"!==d.slice(-1)?d+"/":d;if("image/svg+xml"===k)try{if("undefined"!==typeof m.navigator.msSaveOrOpenBlob){var u=new MSBlobBuilder;u.append(a);var r=u.getBlob("image/svg+xml")}else r=n(a);y(r,x);c&&c()}catch(w){f(w)}else if("application/pdf"===
k)m.jsPDF&&m.svg2pdf?p():(h=!0,q(d+"jspdf.js",function(){q(d+"svg2pdf.js",function(){p()})}));else{r=n(a);var t=function(){try{B.revokeObjectURL(r)}catch(w){}};l(r,k,{},z,function(a){try{y(a,x),c&&c()}catch(D){f(D)}},function(){var b=v.createElement("canvas"),e=b.getContext("2d"),p=a.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*z,g=a.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*z,l=function(){e.drawSvg(a,0,0,p,g);try{y(m.navigator.msSaveOrOpenBlob?b.msToBlob():b.toDataURL(k),x),c&&c()}catch(K){f(K)}finally{t()}};
b.width=p;b.height=g;m.canvg?l():(h=!0,q(d+"rgbcolor.js",function(){q(d+"canvg.js",function(){l()})}))},f,f,function(){h&&t()})}}var m=b.win,v=b.doc,L=h.addEvent,A=h.error,M=h.extend,N=h.fireEvent,E=h.getOptions,F=h.merge,y=G.downloadURL,B=m.URL||m.webkitURL||m,I=b.isMS?150:0;b.CanVGRenderer={};a.prototype.getSVGForLocalExport=function(a,b,f,c){var d=this,e=0,g,h,m,k,n=function(){e===u.length&&c(d.sanitizeSVG(g.innerHTML,h))},q=function(a,b,c){++e;c.imageElement.setAttributeNS("http://www.w3.org/1999/xlink",
"href",a);n()};d.unbindGetSVG=L(d,"getSVG",function(a){h=a.chartCopy.options;g=a.chartCopy.container.cloneNode(!0)});d.getSVGForExport(a,b);var u=g.getElementsByTagName("image");try{if(!u.length){c(d.sanitizeSVG(g.innerHTML,h));return}var r=0;for(m=u.length;r<m;++r){var t=u[r];(k=t.getAttributeNS("http://www.w3.org/1999/xlink","href"))?l(k,"image/png",{imageElement:t},a.scale,q,f,f,f):(++e,t.parentNode.removeChild(t),n())}}catch(w){f(w)}d.unbindGetSVG()};a.prototype.exportChartLocal=function(a,h){var f=
this,c=F(f.options.exporting,a),e=function(a){!1===c.fallbackToExportServer?c.error?c.error(c,a):A(28,!0):f.exportChart(c)};a=function(){return[].some.call(f.container.getElementsByTagName("image"),function(a){a=a.getAttribute("href");return""!==a&&0!==a.indexOf("data:")})};b.isMS&&f.styledMode&&(g.prototype.inlineWhitelist=[/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,
/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/]);b.isMS&&("application/pdf"===c.type||f.container.getElementsByTagName("image").length&&"image/svg+xml"!==c.type)||"application/pdf"===c.type&&a()?e("Image type not supported for this chart/browser."):f.getSVGForLocalExport(c,h,e,function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==c.type?e("Image type not supportedfor charts with embedded HTML"):
d(a,M({filename:f.getFilename()},c),e,function(){return N(f,"exportChartLocalSuccess")})})};F(!0,E().exporting,{libURL:"https://code.highcharts.com/9.0.1.1/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}});
b.downloadSVGLocal=d});g(a,"masters/modules/offline-exporting.src.js",[],function(){})});
