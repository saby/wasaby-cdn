/*
 Highcharts JS v9.0.1.1 (2021-02-15)

 Highcharts funnel module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js"],function(z){a(z);a.Highcharts=z;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function z(a,t,k,m){a.hasOwnProperty(t)||(a[t]=m.apply(null,k))}a=a?a._modules:{};z(a,"Series/Funnel/FunnelSeries.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/Color/Palette.js"],a["Core/Series/SeriesRegistry.js"],
a["Core/Utilities.js"]],function(a,t,k,m,c){var H=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,e){d.__proto__=e}||function(d,e){for(var a in e)e.hasOwnProperty(a)&&(d[a]=e[a])};return a(b,d)};return function(b,d){function D(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(D.prototype=d.prototype,new D)}}(),f=t.noop,n=m.series,E=m.seriesTypes.pie;t=c.addEvent;var F=c.extend,z=c.fireEvent,A=c.isArray,M=c.merge,
K=c.pick;c=function(a){function b(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}H(b,a);b.prototype.alignDataLabel=function(d,a,e,b,h){var v=d.series;b=v.options.reversed;var g=d.dlBox||d.shapeArgs,c=e.align,f=e.verticalAlign,D=((v.options||{}).dataLabels||{}).inside,l=v.center[1];v=v.getWidthAt((b?2*l-d.plotY:d.plotY)-g.height/2+a.height);v="middle"===f?(g.topWidth-g.bottomWidth)/4:(v-g.bottomWidth)/2;l=g.y;var p=g.x;"middle"===f?l=g.y-g.height/
2+a.height/2:"top"===f&&(l=g.y-g.height+a.height+e.padding);if("top"===f&&!b||"bottom"===f&&b||"middle"===f)"right"===c?p=g.x-e.padding+v:"left"===c&&(p=g.x+e.padding-v);b={x:p,y:b?l-g.height:l,width:g.bottomWidth,height:g.height};e.verticalAlign="bottom";D&&!d.visible||n.prototype.alignDataLabel.call(this,d,a,e,b,h);D&&(!d.visible&&d.dataLabel&&(d.dataLabel.placed=!1),d.contrastColor&&a.css({color:d.contrastColor}))};b.prototype.drawDataLabels=function(){var a=this.data,b=this.options.dataLabels.distance,
e,f=a.length;for(this.center[2]-=2*b;f--;){var h=a[f];var c=(e=h.half)?1:-1;var g=h.plotY;h.labelDistance=K(h.options.dataLabels&&h.options.dataLabels.distance,b);this.maxLabelDistance=Math.max(h.labelDistance,this.maxLabelDistance||0);var n=this.getX(g,e,h);h.labelPosition={natural:{x:0,y:g},"final":{},alignment:e?"right":"left",connectorPosition:{breakAt:{x:n+(h.labelDistance-5)*c,y:g},touchingSliceAt:{x:n+h.labelDistance*c,y:g}}}}m.seriesTypes[this.options.dataLabels.inside?"column":"pie"].prototype.drawDataLabels.call(this)};
b.prototype.translate=function(){function a(a,b){return/%$/.test(a)?b*parseInt(a,10)/100:parseInt(a,10)}var b=0,e=this,c=e.chart,h=e.options,n=h.reversed,g=h.ignoreHiddenPoint,k=c.plotWidth;c=c.plotHeight;var H=0,E=h.center,l=a(E[0],k),p=a(E[1],c),t=a(h.width,k),w,x=a(h.height,c),m=a(h.neckWidth,k),F=a(h.neckHeight,c),C=p-x/2+x-F;k=e.data;var A,I,L="left"===h.dataLabels.position?1:0,G,q,J,y,r,B,u;e.getWidthAt=function(a){var b=p-x/2;return a>C||x===F?m:m+(t-m)*(1-(a-b)/(x-F))};e.getX=function(a,b,
d){return l+(b?-1:1)*(e.getWidthAt(n?2*p-a:a)/2+d.labelDistance)};e.center=[l,p,x];e.centerX=l;k.forEach(function(a){g&&!1===a.visible||(b+=a.y)});k.forEach(function(a){u=null;I=b?a.y/b:0;q=p-x/2+H*x;r=q+I*x;w=e.getWidthAt(q);G=l-w/2;J=G+w;w=e.getWidthAt(r);y=l-w/2;B=y+w;q>C?(G=y=l-m/2,J=B=l+m/2):r>C&&(u=r,w=e.getWidthAt(C),y=l-w/2,B=y+w,r=C);n&&(q=2*p-q,r=2*p-r,null!==u&&(u=2*p-u));A=[["M",G,q],["L",J,q],["L",B,r]];null!==u&&A.push(["L",B,u],["L",y,u]);A.push(["L",y,r],["Z"]);a.shapeType="path";
a.shapeArgs={d:A};a.percentage=100*I;a.plotX=l;a.plotY=(q+(u||r))/2;a.tooltipPos=[l,a.plotY];a.dlBox={x:y,y:q,topWidth:J-G,bottomWidth:B-y,height:Math.abs(K(u,r)-q),width:NaN};a.slice=f;a.half=L;g&&!1===a.visible||(H+=I)});z(e,"afterTranslate")};b.prototype.sortByAngle=function(a){a.sort(function(a,b){return a.plotY-b.plotY})};b.defaultOptions=M(E.defaultOptions,{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,
verticalAlign:"middle"},states:{select:{color:k.neutralColor20,borderColor:k.neutralColor100}}});return b}(E);F(c.prototype,{animate:f});t(a,"afterHideAllOverlappingLabels",function(){this.series.forEach(function(a){var b=a.options&&a.options.dataLabels;A(b)&&(b=b[0]);a.is("pie")&&a.placeDataLabels&&b&&!b.inside&&a.placeDataLabels()})});m.registerSeriesType("funnel",c);"";return c});z(a,"Series/Pyramid/PyramidSeries.js",[a["Series/Funnel/FunnelSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,t,k){var m=this&&this.__extends||function(){var a=function(c,n){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var f in c)c.hasOwnProperty(f)&&(a[f]=c[f])};return a(c,n)};return function(c,n){function f(){this.constructor=c}a(c,n);c.prototype=null===n?Object.create(n):(f.prototype=n.prototype,new f)}}(),c=k.merge;k=function(k){function f(){var a=null!==k&&k.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;
return a}m(f,k);f.defaultOptions=c(a.defaultOptions,{neckWidth:"0%",neckHeight:"0%",reversed:!0});return f}(a);t.registerSeriesType("pyramid",k);"";return k});z(a,"masters/modules/funnel.src.js",[],function(){})});
