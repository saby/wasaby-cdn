/*
 Highmaps JS v9.0.1.1 (2021-02-15)

 Tilemap module

 (c) 2010-2021 Highsoft AS

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js","/cdn/Highcharts/9.0.1.1/modules/map"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,e,g,f){a.hasOwnProperty(e)||(a[e]=f.apply(null,g))}a=a?a._modules:{};k(a,"Series/Tilemap/TilemapPoint.js",[a["Mixins/ColorSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,e,g){var f=this&&this.__extends||function(){var a=function(d,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,c){b.__proto__=c}||function(b,c){for(var a in c)c.hasOwnProperty(a)&&(b[a]=c[a])};return a(d,g)};return function(d,g){function b(){this.constructor=d}a(d,g);d.prototype=null===g?Object.create(g):(b.prototype=g.prototype,new b)}}();a=a.colorPointMixin;var h=e.series.prototype.pointClass;g=g.extend;e=function(a){function d(){var d=null!==a&&a.apply(this,arguments)||
this;d.options=void 0;d.radius=void 0;d.series=void 0;d.tileEdges=void 0;return d}f(d,a);d.prototype.haloPath=function(){return this.series.tileShape.haloPath.apply(this,arguments)};return d}(e.seriesTypes.heatmap.prototype.pointClass);g(e.prototype,{setState:h.prototype.setState,setVisible:a.setVisible});return e});k(a,"Series/Tilemap/TilemapShapes.js",[a["Core/Globals.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,g){function f(b,c,a){b=b.options;return{xPad:(b.colsize||
1)/-c,yPad:(b.rowsize||1)/-a}}e=e.seriesTypes;var h=e.heatmap,t=e.scatter,d=g.clamp,k=g.pick;return{hexagon:{alignDataLabel:t.prototype.alignDataLabel,getSeriesPadding:function(b){return f(b,3,2)},haloPath:function(b){if(!b)return[];var c=this.tileEdges;return[["M",c.x2-b,c.y1+b],["L",c.x3+b,c.y1+b],["L",c.x4+1.5*b,c.y2],["L",c.x3+b,c.y3-b],["L",c.x2-b,c.y3-b],["L",c.x1-1.5*b,c.y2],["Z"]]},translate:function(){var b=this.options,c=this.xAxis,a=this.yAxis,g=b.pointPadding||0,r=(b.colsize||1)/3,w=(b.rowsize||
1)/2,n;this.generatePoints();this.points.forEach(function(b){var p=d(Math.floor(c.len-c.translate(b.x-2*r,0,1,0,1)),-c.len,2*c.len),v=d(Math.floor(c.len-c.translate(b.x-r,0,1,0,1)),-c.len,2*c.len),e=d(Math.floor(c.len-c.translate(b.x+r,0,1,0,1)),-c.len,2*c.len),u=d(Math.floor(c.len-c.translate(b.x+2*r,0,1,0,1)),-c.len,2*c.len),x=d(Math.floor(a.translate(b.y-w,0,1,0,1)),-a.len,2*a.len),q=d(Math.floor(a.translate(b.y,0,1,0,1)),-a.len,2*a.len),l=d(Math.floor(a.translate(b.y+w,0,1,0,1)),-a.len,2*a.len),
m=k(b.pointPadding,g),h=m*Math.abs(v-p)/Math.abs(l-q);h=c.reversed?-h:h;var f=c.reversed?-m:m;m=a.reversed?-m:m;b.x%2&&(n=n||Math.round(Math.abs(l-x)/2)*(a.reversed?-1:1),x+=n,q+=n,l+=n);b.plotX=b.clientX=(v+e)/2;b.plotY=q;p+=h+f;v+=f;e-=f;u-=h+f;x-=m;l+=m;b.tileEdges={x1:p,x2:v,x3:e,x4:u,y1:x,y2:q,y3:l};b.shapeType="path";b.shapeArgs={d:[["M",v,x],["L",e,x],["L",u,q],["L",e,l],["L",v,l],["L",p,q],["Z"]]}});this.translateColors()}},diamond:{alignDataLabel:t.prototype.alignDataLabel,getSeriesPadding:function(b){return f(b,
2,2)},haloPath:function(b){if(!b)return[];var c=this.tileEdges;return[["M",c.x2,c.y1+b],["L",c.x3+b,c.y2],["L",c.x2,c.y3-b],["L",c.x1-b,c.y2],["Z"]]},translate:function(){var b=this.options,c=this.xAxis,a=this.yAxis,g=b.pointPadding||0,e=b.colsize||1,w=(b.rowsize||1)/2,n;this.generatePoints();this.points.forEach(function(b){var h=d(Math.round(c.len-c.translate(b.x-e,0,1,0,0)),-c.len,2*c.len),r=d(Math.round(c.len-c.translate(b.x,0,1,0,0)),-c.len,2*c.len),p=d(Math.round(c.len-c.translate(b.x+e,0,1,
0,0)),-c.len,2*c.len),u=d(Math.round(a.translate(b.y-w,0,1,0,0)),-a.len,2*a.len),f=d(Math.round(a.translate(b.y,0,1,0,0)),-a.len,2*a.len),q=d(Math.round(a.translate(b.y+w,0,1,0,0)),-a.len,2*a.len),l=k(b.pointPadding,g),m=l*Math.abs(r-h)/Math.abs(q-f);m=c.reversed?-m:m;l=a.reversed?-l:l;b.x%2&&(n=Math.abs(q-u)/2*(a.reversed?-1:1),u+=n,f+=n,q+=n);b.plotX=b.clientX=r;b.plotY=f;h+=m;p-=m;u-=l;q+=l;b.tileEdges={x1:h,x2:r,x3:p,y1:u,y2:f,y3:q};b.shapeType="path";b.shapeArgs={d:[["M",r,u],["L",p,f],["L",
r,q],["L",h,f],["Z"]]}});this.translateColors()}},circle:{alignDataLabel:t.prototype.alignDataLabel,getSeriesPadding:function(b){return f(b,2,2)},haloPath:function(b){return t.prototype.pointClass.prototype.haloPath.call(this,b+(b&&this.radius))},translate:function(){var b=this.options,a=this.xAxis,g=this.yAxis,e=b.pointPadding||0,r=(b.rowsize||1)/2,w=b.colsize||1,n,f,h,t,k=!1;this.generatePoints();this.points.forEach(function(b){var c=d(Math.round(a.len-a.translate(b.x,0,1,0,0)),-a.len,2*a.len),
p=d(Math.round(g.translate(b.y,0,1,0,0)),-g.len,2*g.len),l=e,m=!1;"undefined"!==typeof b.pointPadding&&(l=b.pointPadding,k=m=!0);if(!t||k)n=Math.abs(d(Math.floor(a.len-a.translate(b.x+w,0,1,0,0)),-a.len,2*a.len)-c),f=Math.abs(d(Math.floor(g.translate(b.y+r,0,1,0,0)),-g.len,2*g.len)-p),h=Math.floor(Math.sqrt(n*n+f*f)/2),t=Math.min(n,h,f)-l,k&&!m&&(k=!1);b.x%2&&(p+=f*(g.reversed?-1:1));b.plotX=b.clientX=c;b.plotY=p;b.radius=t;b.shapeType="circle";b.shapeArgs={x:c,y:p,r:t}});this.translateColors()}},
square:{alignDataLabel:h.prototype.alignDataLabel,translate:h.prototype.translate,getSeriesPadding:a.noop,haloPath:h.prototype.pointClass.prototype.haloPath}}});k(a,"Series/Tilemap/TilemapComposition.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,e){e=e.addEvent;e(a.Axis,"afterSetAxisTranslation",function(){if(!this.recomputingForTilemap&&"colorAxis"!==this.coll){var a=this,f=a.series.map(function(e){return e.getSeriesPixelPadding&&e.getSeriesPixelPadding(a)}).reduce(function(a,d){return(a&&
a.padding)>(d&&d.padding)?a:d},void 0)||{padding:0,axisLengthFactor:1},e=Math.round(f.padding*f.axisLengthFactor);f.padding&&(a.len-=e,a.recomputingForTilemap=!0,a.setAxisTranslation(),delete a.recomputingForTilemap,a.minPixelPadding+=f.padding,a.len+=e)}})});k(a,"Series/Tilemap/TilemapSeries.js",[a["Core/Globals.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Tilemap/TilemapPoint.js"],a["Series/Tilemap/TilemapShapes.js"],a["Core/Utilities.js"]],function(a,e,g,f,h){var k=this&&this.__extends||function(){var a=
function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();a=a.noop;var d=e.seriesTypes,y=d.column,b=d.heatmap;d=d.scatter;var c=h.extend,v=h.merge;h=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;
b.points=void 0;b.tileShape=void 0;return b}k(c,a);c.prototype.alignDataLabel=function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))};c.prototype.drawPoints=function(){var a=this;y.prototype.drawPoints.call(this);this.points.forEach(function(b){b.graphic&&b.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(b))})};c.prototype.getSeriesPixelPadding=function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this);if(!c)return{padding:0,axisLengthFactor:1};
var d=Math.round(a.translate(b?2*c.xPad:c.yPad,0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}};c.prototype.setOptions=function(){var b=a.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));this.tileShape=f[b.tileShape];return b};c.prototype.translate=function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))};c.defaultOptions=v(b.defaultOptions,{marker:null,states:{hover:{halo:{enabled:!0,
size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"});return c}(b);c(h.prototype,{getSymbol:a,markerAttribs:d.prototype.markerAttribs,pointAttribs:y.prototype.pointAttribs,pointClass:g});e.registerSeriesType("tilemap",h);"";"";return h});k(a,"masters/modules/tilemap.src.js",[],function(){})});
