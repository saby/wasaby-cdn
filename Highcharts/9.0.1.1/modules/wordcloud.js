/*
 Highcharts JS v9.0.1.1 (2021-02-15)

 (c) 2016-2021 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["/cdn/Highcharts/9.0.1.1/highcharts.js"],function(l){a(l);a.Highcharts=l;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function l(a,d,k,w){a.hasOwnProperty(d)||(a[d]=w.apply(null,k))}a=a?a._modules:{};l(a,"Mixins/Polygon.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,d){var k=d.find,w=d.isArray,m=d.isNumber,h=a.deg2rad,
f=function(g,b){b=m(b)?b:14;b=Math.pow(10,b);return Math.round(g*b)/b},q=function(g,b){var c=b[0]-g[0];g=b[1]-g[1];return[[-g,c],[g,-c]]},t=function(g,b){g=g.map(function(c){return c[0]*b[0]+c[1]*b[1]});return{min:Math.min.apply(this,g),max:Math.max.apply(this,g)}},r=function(g,b){var c=g[0];g=g[1];var e=h*-b;b=Math.cos(e);e=Math.sin(e);return[f(c*b-g*e),f(c*e+g*b)]},B=function(g,b,c){g=r([g[0]-b[0],g[1]-b[1]],c);return[g[0]+b[0],g[1]+b[1]]},z=function(g){var b=g.axes;if(!w(b)){b=[];var c=c=g.concat([g[0]]);
c.reduce(function(c,A){var e=q(c,A)[0];k(b,function(c){return c[0]===e[0]&&c[1]===e[1]})||b.push(e);return A});g.axes=b}return b},l=function(g,b){g=z(g);b=z(b);return g.concat(b)};return{getBoundingBoxFromPolygon:function(g){return g.reduce(function(b,c){var e=c[0];c=c[1];b.left=Math.min(e,b.left);b.right=Math.max(e,b.right);b.bottom=Math.max(c,b.bottom);b.top=Math.min(c,b.top);return b},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPolygon:function(g,
b,c,e,A){var f=[g,b],C=g-c/2;g+=c/2;c=b-e/2;b+=e/2;return[[C,c],[g,c],[g,b],[C,b]].map(function(c){return B(c,f,-A)})},isPolygonsColliding:function(g,b){var c=l(g,b);return!k(c,function(c){var e=t(g,c);c=t(b,c);return!!(c.min>e.max||c.max<e.min)})},movePolygon:function(g,b,c){return c.map(function(c){return[c[0]+g,c[1]+b]})},rotate2DToOrigin:r,rotate2DToPoint:B}});l(a,"Mixins/DrawPoint.js",[],function(){var a=function(a){return"function"===typeof a},d=function(d){var k,m=this,h=m.graphic,f=d.animatableAttribs,
q=d.onComplete,t=d.css,r=d.renderer,B=null===(k=m.series)||void 0===k?void 0:k.options.animation;if(m.shouldDraw())h||(m.graphic=h=r[d.shapeType](d.shapeArgs).add(d.group)),h.css(t).attr(d.attribs).animate(f,d.isNew?!1:B,q);else if(h){var l=function(){m.graphic=h=h.destroy();a(q)&&q()};Object.keys(f).length?h.animate(f,void 0,function(){l()}):l()}};return{draw:d,drawPoint:function(a){(a.attribs=a.attribs||{})["class"]=this.getClassName();d.call(this,a)},isFn:a}});l(a,"Series/Wordcloud/WordcloudPoint.js",
[a["Mixins/DrawPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,k){var l=this&&this.__extends||function(){var a=function(d,f){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,f){a.__proto__=f}||function(a,f){for(var d in f)f.hasOwnProperty(d)&&(a[d]=f[d])};return a(d,f)};return function(d,f){function m(){this.constructor=d}a(d,f);d.prototype=null===f?Object.create(f):(m.prototype=f.prototype,new m)}}();k=k.extend;d=function(a){function d(){var f=
null!==a&&a.apply(this,arguments)||this;f.dimensions=void 0;f.options=void 0;f.polygon=void 0;f.rect=void 0;f.series=void 0;return f}l(d,a);d.prototype.shouldDraw=function(){return!this.isNull};d.prototype.isValid=function(){return!0};return d}(d.seriesTypes.column.prototype.pointClass);k(d.prototype,{draw:a.drawPoint,weight:1});return d});l(a,"Series/Wordcloud/WordcloudUtils.js",[a["Mixins/Polygon.js"],a["Core/Utilities.js"]],function(a,d){var k=a.isPolygonsColliding,l=a.movePolygon,m=d.extend,h=
d.find,f=d.isNumber,q=d.isObject,t=d.merge,r;(function(a){function d(c,e){return!(e.left>c.right||e.right<c.left||e.top>c.bottom||e.bottom<c.top)}function r(c,e){var a=!1,b=c.rect,f=c.polygon,n=c.lastCollidedWith,y=function(e){var a=d(b,e.rect);a&&(c.rotation%90||e.rotation%90)&&(a=k(f,e.polygon));return a};n&&((a=y(n))||delete c.lastCollidedWith);a||(a=!!h(e,function(e){var a=y(e);a&&(c.lastCollidedWith=e);return a}));return a}function g(c,e){e=4*c;var a=Math.ceil((Math.sqrt(e)-1)/2),b=2*a+1,d=Math.pow(b,
2),f=!1;--b;1E4>=c&&("boolean"===typeof f&&e>=d-b&&(f={x:a-(d-e),y:-a}),d-=b,"boolean"===typeof f&&e>=d-b&&(f={x:-a,y:-a+(d-e)}),d-=b,"boolean"===typeof f&&(f=e>=d-b?{x:-a+(d-e),y:a}:{x:a,y:a-(d-e-b)}),f.x*=5,f.y*=5);return f}function b(c,e){var a=e.width/2,b=-(e.height/2),f=e.height/2;return!(-(e.width/2)<c.left&&a>c.right&&b<c.top&&f>c.bottom)}a.isRectanglesIntersecting=d;a.intersectsAnyWord=r;a.archimedeanSpiral=function(c,e){var a=e.field;e=!1;a=a.width*a.width+a.height*a.height;var b=.8*c;1E4>=
c&&(e={x:b*Math.cos(b),y:b*Math.sin(b)},Math.min(Math.abs(e.x),Math.abs(e.y))<a||(e=!1));return e};a.squareSpiral=g;a.rectangularSpiral=function(c,a){c=g(c,a);a=a.field;c&&(c.x*=a.ratioX,c.y*=a.ratioY);return c};a.getRandomPosition=function(c){return Math.round(c*(Math.random()+.5)/2)};a.getScale=function(c,a,b){var e=2*Math.max(Math.abs(b.top),Math.abs(b.bottom));b=2*Math.max(Math.abs(b.left),Math.abs(b.right));return Math.min(0<b?1/b*c:1,0<e?1/e*a:1)};a.getPlayingField=function(c,a,b){b=b.reduce(function(c,
a){a=a.dimensions;var b=Math.max(a.width,a.height);c.maxHeight=Math.max(c.maxHeight,a.height);c.maxWidth=Math.max(c.maxWidth,a.width);c.area+=b*b;return c},{maxHeight:0,maxWidth:0,area:0});b=Math.max(b.maxHeight,b.maxWidth,.85*Math.sqrt(b.area));var e=c>a?c/a:1;c=a>c?a/c:1;return{width:b*e,height:b*c,ratioX:e,ratioY:c}};a.getRotation=function(c,a,b,d){var e=!1;f(c)&&f(a)&&f(b)&&f(d)&&0<c&&-1<a&&d>b&&(e=b+a%c*((d-b)/(c-1||1)));return e};a.getSpiral=function(c,a){var b,e=[];for(b=1;1E4>b;b++)e.push(c(b,
a));return function(c){return 1E4>=c?e[c-1]:!1}};a.outsidePlayingField=b;a.intersectionTesting=function(c,a){var e=a.placed,d=a.field,f=a.rectangle,g=a.polygon,y=a.spiral,u=1,p={x:0,y:0},k=c.rect=m({},f);c.polygon=g;for(c.rotation=a.rotation;!1!==p&&(r(c,e)||b(k,d));)p=y(u),q(p)&&(k.left=f.left+p.x,k.right=f.right+p.x,k.top=f.top+p.y,k.bottom=f.bottom+p.y,c.polygon=l(p.x,p.y,g)),u++;return p};a.extendPlayingField=function(a,b){if(q(a)&&q(b)){var c=b.bottom-b.top;var e=b.right-b.left;b=a.ratioX;var f=
a.ratioY;c=e*b>c*f?e:c;a=t(a,{width:a.width+c*b*2,height:a.height+c*f*2})}return a};a.updateFieldBoundaries=function(a,b){if(!f(a.left)||a.left>b.left)a.left=b.left;if(!f(a.right)||a.right<b.right)a.right=b.right;if(!f(a.top)||a.top>b.top)a.top=b.top;if(!f(a.bottom)||a.bottom<b.bottom)a.bottom=b.bottom;return a}})(r||(r={}));return r});l(a,"Series/Wordcloud/WordcloudSeries.js",[a["Core/Globals.js"],a["Mixins/Polygon.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],
a["Series/Wordcloud/WordcloudPoint.js"],a["Series/Wordcloud/WordcloudUtils.js"]],function(a,d,k,l,m,h,f){var q=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function f(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}}(),t=a.noop,r=d.getBoundingBoxFromPolygon,
B=d.getPolygon,w=d.isPolygonsColliding,z=d.rotate2DToOrigin;d=d.rotate2DToPoint;var g=l.seriesTypes.column,b=m.extend,c=m.isArray,e=m.isNumber,A=m.isObject,F=m.merge;m=function(d){function n(){var a=null!==d&&d.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}q(n,d);n.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};k.prototype.bindAxes.call(this);b(this.yAxis.options,a);b(this.xAxis.options,
a)};n.prototype.pointAttribs=function(b,c){b=a.seriesTypes.column.prototype.pointAttribs.call(this,b,c);delete b.stroke;delete b["stroke-width"];return b};n.prototype.deriveFontSize=function(a,b,c){a=e(a)?a:0;b=e(b)?b:1;c=e(c)?c:1;return Math.floor(Math.max(c,a*b))};n.prototype.drawPoints=function(){var a=this,c=a.hasRendered,d=a.xAxis,e=a.yAxis,g=a.group,n=a.options,k=n.animation,m=n.allowExtendPlayingField,l=a.chart.renderer,h=l.text().add(g),q=[],t=a.placementStrategy[n.placementStrategy],C=n.rotation,
w=a.points.map(function(a){return a.weight}),z=Math.max.apply(null,w),D=a.points.concat().sort(function(a,b){return b.weight-a.weight});a.group.attr({scaleX:1,scaleY:1});D.forEach(function(c){var d=a.deriveFontSize(1/z*c.weight,n.maxFontSize,n.minFontSize);d=b({fontSize:d+"px"},n.style);h.css(d).attr({x:0,y:0,text:c.name});d=h.getBBox(!0);c.dimensions={height:d.height,width:d.width}});var x=f.getPlayingField(d.len,e.len,D);var E=f.getSpiral(a.spirals[n.spiral],{field:x});D.forEach(function(d){var e=
a.deriveFontSize(1/z*d.weight,n.maxFontSize,n.minFontSize);e=b({fontSize:e+"px"},n.style);var h=t(d,{data:D,field:x,placed:q,rotation:C}),p=b(a.pointAttribs(d,d.selected&&"select"),{align:"center","alignment-baseline":"middle",x:h.x,y:h.y,text:d.name,rotation:h.rotation}),y=B(h.x,h.y,d.dimensions.width,d.dimensions.height,h.rotation),v=r(y),u=f.intersectionTesting(d,{rectangle:v,polygon:y,field:x,placed:q,spiral:E,rotation:h.rotation});!u&&m&&(x=f.extendPlayingField(x,v),u=f.intersectionTesting(d,
{rectangle:v,polygon:y,field:x,placed:q,spiral:E,rotation:h.rotation}));A(u)?(p.x+=u.x,p.y+=u.y,v.left+=u.x,v.right+=u.x,v.top+=u.y,v.bottom+=u.y,x=f.updateFieldBoundaries(x,v),q.push(d),d.isNull=!1):d.isNull=!0;if(k){var w={x:p.x,y:p.y};c?(delete p.x,delete p.y):(p.x=0,p.y=0)}d.draw({animatableAttribs:w,attribs:p,css:e,group:g,renderer:l,shapeArgs:void 0,shapeType:"text"})});h=h.destroy();d=f.getScale(d.len,e.len,x);a.group.attr({scaleX:d,scaleY:d})};n.prototype.hasData=function(){return A(this)&&
!0===this.visible&&c(this.points)&&0<this.points.length};n.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,c=this[b?"yAxis":"xAxis"];b=this[b?"xAxis":"yAxis"];return{translateX:(c?c.left:a.plotLeft)+(c?c.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}};n.defaultOptions=F(g.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,
orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}});return n}(g);b(m.prototype,{animate:k.prototype.animate,animateDrilldown:t,animateDrillupFrom:t,pointClass:h,setClip:t,placementStrategy:{random:function(a,b){var c=b.field;b=b.rotation;return{x:f.getRandomPosition(c.width)-c.width/2,y:f.getRandomPosition(c.height)-
c.height/2,rotation:f.getRotation(b.orientations,a.index,b.from,b.to)}},center:function(a,b){b=b.rotation;return{x:0,y:0,rotation:f.getRotation(b.orientations,a.index,b.from,b.to)}}},pointArrayMap:["weight"],spirals:{archimedean:f.archimedeanSpiral,rectangular:f.rectangularSpiral,square:f.squareSpiral},utils:{extendPlayingField:f.extendPlayingField,getRotation:f.getRotation,isPolygonsColliding:w,rotate2DToOrigin:z,rotate2DToPoint:d}});l.registerSeriesType("wordcloud",m);"";return m});l(a,"masters/modules/wordcloud.src.js",
[],function(){})});
