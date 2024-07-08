/*
 Highcharts JS v9.0.1.1 (2021-02-15)

 Highcharts cylinder module

 (c) 2010-2021 Kacper Madej

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js","highcharts/highcharts-3d"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,g,b,p){a.hasOwnProperty(g)||(a[g]=p.apply(null,b))}a=a?a._modules:{};k(a,"Series/Cylinder/CylinderPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,
g){var b=this&&this.__extends||function(){var a=function(b,m){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var h in b)b.hasOwnProperty(h)&&(a[h]=b[h])};return a(b,m)};return function(b,m){function n(){this.constructor=b}a(b,m);b.prototype=null===m?Object.create(m):(n.prototype=m.prototype,new n)}}();g=g.extend;a=function(a){function n(){var b=null!==a&&a.apply(this,arguments)||this;b.options=void 0;b.series=void 0;return b}b(n,a);return n}(a.seriesTypes.column.prototype.pointClass);
g(a.prototype,{shapeType:"cylinder"});return a});k(a,"Series/Cylinder/CylinderComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Utilities.js"]],function(a,g,b,p){var k=a.parse,m=g.charts,n=g.deg2rad;a=g.Renderer.prototype;var w=b.perspective;b=p.merge;var h=p.pick,f=a.cuboidPath,q=function(c){return!c.some(function(c){return"C"===c[0]})};p=b(a.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(c){this.singleSetterForParts("fill",
null,{front:c,back:c,top:k(c).brighten(.1).get(),bottom:k(c).brighten(-.1).get()});this.color=this.fill=c;return this}});a.elements3d.cylinder=p;a.cylinder=function(c){return this.element3d("cylinder",c)};a.cylinderPath=function(c){var a=m[this.chartIndex],e=f.call(this,c),d=!e.isTop,b=!e.isFront,h=this.getCylinderEnd(a,c);c=this.getCylinderEnd(a,c,!0);return{front:this.getCylinderFront(h,c),back:this.getCylinderBack(h,c),top:h,bottom:c,zIndexes:{top:d?3:0,bottom:d?0:3,front:b?2:1,back:b?1:2,group:e.zIndexes.group}}};
a.getCylinderFront=function(c,a){c=c.slice(0,3);if(q(a)){var e=a[0];"M"===e[0]&&(c.push(a[2]),c.push(a[1]),c.push(["L",e[1],e[2]]))}else{e=a[0];var d=a[1];a=a[2];"M"===e[0]&&"C"===d[0]&&"C"===a[0]&&(c.push(["L",a[5],a[6]]),c.push(["C",a[3],a[4],a[1],a[2],d[5],d[6]]),c.push(["C",d[3],d[4],d[1],d[2],e[1],e[2]]))}c.push(["Z"]);return c};a.getCylinderBack=function(a,b){var c=[];if(q(a)){var d=a[0],h=a[2];"M"===d[0]&&"L"===h[0]&&(c.push(["M",h[1],h[2]]),c.push(a[3]),c.push(["L",d[1],d[2]]))}else"C"===
a[2][0]&&c.push(["M",a[2][5],a[2][6]]),c.push(a[3],a[4]);q(b)?(d=b[0],"M"===d[0]&&(c.push(["L",d[1],d[2]]),c.push(b[3]),c.push(b[2]))):(a=b[2],d=b[3],b=b[4],"C"===a[0]&&"C"===d[0]&&"C"===b[0]&&(c.push(["L",b[5],b[6]]),c.push(["C",b[3],b[4],b[1],b[2],d[5],d[6]]),c.push(["C",d[3],d[4],d[1],d[2],a[5],a[6]])));c.push(["Z"]);return c};a.getCylinderEnd=function(a,b,e){var c=h(b.depth,b.width),l=Math.min(b.width,c)/2,g=n*(a.options.chart.options3d.beta-90+(b.alphaCorrection||0));e=b.y+(e?b.height:0);var f=
.5519*l,k=b.width/2+b.x,m=c/2+b.z,q=[{x:0,y:e,z:l},{x:f,y:e,z:l},{x:l,y:e,z:f},{x:l,y:e,z:0},{x:l,y:e,z:-f},{x:f,y:e,z:-l},{x:0,y:e,z:-l},{x:-f,y:e,z:-l},{x:-l,y:e,z:-f},{x:-l,y:e,z:0},{x:-l,y:e,z:f},{x:-f,y:e,z:l},{x:0,y:e,z:l}],p=Math.cos(g),u=Math.sin(g),r,t;q.forEach(function(a,c){r=a.x;t=a.z;q[c].x=r*p-t*u+k;q[c].z=t*p+r*u+m});a=w(q,a,!0);return 2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?this.toLinePath([a[0],a[3],a[6],a[9]],!0):this.getCurvedPath(a)};a.getCurvedPath=function(a){var b=
[["M",a[0].x,a[0].y]],c=a.length-2,d;for(d=1;d<c;d+=3)b.push(["C",a[d].x,a[d].y,a[d+1].x,a[d+1].y,a[d+2].x,a[d+2].y]);return b}});k(a,"Series/Cylinder/CylinderSeries.js",[a["Series/Cylinder/CylinderPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g,b){var k=this&&this.__extends||function(){var a=function(b,f){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,
f)};return function(b,f){function h(){this.constructor=b}a(b,f);b.prototype=null===f?Object.create(f):(h.prototype=f.prototype,new h)}}(),n=g.seriesTypes.column,m=b.extend,v=b.merge;b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}k(b,a);b.defaultOptions=v(n.defaultOptions);return b}(n);m(b.prototype,{pointClass:a});g.registerSeriesType("cylinder",b);"";return b});k(a,"masters/modules/cylinder.src.js",[],function(){})});
