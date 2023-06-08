/*
 Highcharts JS v9.0.1 (2021-02-15)

 Sankey diagram module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1/highcharts.js"],function(r){d(r);d.Highcharts=r;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function r(d,g,k,l){d.hasOwnProperty(g)||(d[g]=l.apply(null,k))}d=d?d._modules:{};r(d,"Mixins/Nodes.js",[d["Core/Globals.js"],d["Core/Series/Point.js"],d["Core/Series/Series.js"],d["Core/Utilities.js"]],function(d,
g,k,l){var p=l.defined,h=l.extend,f=l.find,n=l.pick;return d.NodesMixin={createNode:function(c){function b(a,b){return f(a,function(a){return a.id===b})}var a=b(this.nodes,c),d=this.pointClass;if(!a){var k=this.options.nodes&&b(this.options.nodes,c);a=(new d).init(this,h({className:"highcharts-node",isNode:!0,id:c,y:1},k));a.linksTo=[];a.linksFrom=[];a.formatPrefix="node";a.name=a.name||a.options.id||"";a.mass=n(a.options.mass,a.options.marker&&a.options.marker.radius,this.options.marker&&this.options.marker.radius,
4);a.getSum=function(){var b=0,c=0;a.linksTo.forEach(function(a){b+=a.weight});a.linksFrom.forEach(function(a){c+=a.weight});return Math.max(b,c)};a.offset=function(b,c){for(var d=0,f=0;f<a[c].length;f++){if(a[c][f]===b)return d;d+=a[c][f].weight}};a.hasShape=function(){var b=0;a.linksTo.forEach(function(a){a.outgoing&&b++});return!a.linksTo.length||b!==a.linksTo.length};this.nodes.push(a)}return a},generatePoints:function(){var c=this.chart,b={};k.prototype.generatePoints.call(this);this.nodes||
(this.nodes=[]);this.colorCounter=0;this.nodes.forEach(function(a){a.linksFrom.length=0;a.linksTo.length=0;a.level=a.options.level});this.points.forEach(function(a){p(a.from)&&(b[a.from]||(b[a.from]=this.createNode(a.from)),b[a.from].linksFrom.push(a),a.fromNode=b[a.from],c.styledMode?a.colorIndex=n(a.options.colorIndex,b[a.from].colorIndex):a.color=a.options.color||b[a.from].color);p(a.to)&&(b[a.to]||(b[a.to]=this.createNode(a.to)),b[a.to].linksTo.push(a),a.toNode=b[a.to]);a.name=a.name||a.id},this);
this.nodeLookup=b},setData:function(){this.nodes&&(this.nodes.forEach(function(c){c.destroy()}),this.nodes.length=0);k.prototype.setData.apply(this,arguments)},destroy:function(){this.data=[].concat(this.points||[],this.nodes);return k.prototype.destroy.apply(this,arguments)},setNodeState:function(c){var b=arguments,a=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==c&&a.forEach(function(a){a&&a.series&&(g.prototype.setState.apply(a,b),a.isNode||(a.fromNode.graphic&&
g.prototype.setState.apply(a.fromNode,b),a.toNode&&a.toNode.graphic&&g.prototype.setState.apply(a.toNode,b)))});g.prototype.setState.apply(this,b)}}});r(d,"Series/Sankey/SankeyPoint.js",[d["Mixins/Nodes.js"],d["Core/Series/Point.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,g,k,l){var p=this&&this.__extends||function(){var d=function(f,c){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&
(b[c]=a[c])};return d(f,c)};return function(f,c){function b(){this.constructor=f}d(f,c);f.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}}(),h=l.defined;l=l.extend;k=function(d){function f(){var c=null!==d&&d.apply(this,arguments)||this;c.className=void 0;c.fromNode=void 0;c.level=void 0;c.linkBase=void 0;c.linksFrom=void 0;c.linksTo=void 0;c.mass=void 0;c.nodeX=void 0;c.nodeY=void 0;c.options=void 0;c.series=void 0;c.toNode=void 0;return c}p(f,d);f.prototype.applyOptions=function(c,
b){g.prototype.applyOptions.call(this,c,b);h(this.options.level)&&(this.options.column=this.column=this.options.level);return this};f.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+g.prototype.getClassName.call(this)};f.prototype.isValid=function(){return this.isNode||"number"===typeof this.weight};return f}(k.seriesTypes.column.prototype.pointClass);l(k.prototype,{setState:d.setNodeState});return k});r(d,"Mixins/TreeSeries.js",[d["Core/Color/Color.js"],
d["Core/Utilities.js"]],function(d,g){var k=g.extend,l=g.isArray,p=g.isNumber,h=g.isObject,f=g.merge,n=g.pick;return{getColor:function(c,b){var a=b.index,f=b.mapOptionsToLevel,k=b.parentColor,g=b.parentColorIndex,h=b.series,q=b.colors,l=b.siblings,m=h.points,w=h.chart.options.chart,t;if(c){m=m[c.i];c=f[c.level]||{};if(f=m&&c.colorByPoint){var e=m.index%(q?q.length:w.colorCount);var u=q&&q[e]}if(!h.chart.styledMode){q=m&&m.options.color;w=c&&c.color;if(t=k)t=(t=c&&c.colorVariation)&&"brightness"===
t.key?d.parse(k).brighten(a/l*t.to).get():k;t=n(q,w,u,t,h.color)}var y=n(m&&m.options.colorIndex,c&&c.colorIndex,e,g,b.colorIndex)}return{color:t,colorIndex:y}},getLevelOptions:function(c){var b=null;if(h(c)){b={};var a=p(c.from)?c.from:1;var d=c.levels;var g={};var n=h(c.defaults)?c.defaults:{};l(d)&&(g=d.reduce(function(b,c){if(h(c)&&p(c.level)){var d=f({},c);var g="boolean"===typeof d.levelIsConstant?d.levelIsConstant:n.levelIsConstant;delete d.levelIsConstant;delete d.level;c=c.level+(g?0:a-1);
h(b[c])?k(b[c],d):b[c]=d}return b},{}));d=p(c.to)?c.to:1;for(c=0;c<=d;c++)b[c]=f({},n,h(g[c])?g[c]:{})}return b},setTreeValues:function J(b,a){var d=a.before,f=a.idRoot,g=a.mapIdToNode[f],h=a.points[b.i],l=h&&h.options||{},m=0,w=[];k(b,{levelDynamic:b.level-(("boolean"===typeof a.levelIsConstant?a.levelIsConstant:1)?0:g.level),name:n(h&&h.name,""),visible:f===b.id||("boolean"===typeof a.visible?a.visible:!1)});"function"===typeof d&&(b=d(b,a));b.children.forEach(function(d,e){var u=k({},a);k(u,{index:e,
siblings:b.children.length,visible:b.visible});d=J(d,u);w.push(d);d.visible&&(m+=d.val)});b.visible=0<m||b.visible;d=n(l.value,m);k(b,{children:w,childrenTotal:m,isLeaf:b.visible&&!m,val:d});return b},updateRootId:function(b){if(h(b)){var a=h(b.options)?b.options:{};a=n(b.rootNode,a.rootId,"");h(b.userOptions)&&(b.userOptions.rootId=a);b.rootNode=a}return a}}});r(d,"Series/Sankey/SankeySeries.js",[d["Core/Color/Color.js"],d["Core/Globals.js"],d["Mixins/Nodes.js"],d["Series/Sankey/SankeyPoint.js"],
d["Core/Series/SeriesRegistry.js"],d["Mixins/TreeSeries.js"],d["Core/Utilities.js"]],function(d,g,k,l,p,h,f){var n=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b])};return a(b,e)};return function(b,e){function c(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),c=p.series,b=p.seriesTypes.column,
a=h.getLevelOptions,r=f.defined;h=f.extend;var K=f.find,z=f.isObject,A=f.merge,q=f.pick,B=f.relativeLength,m=f.stableSort;f=function(c){function f(){var e=null!==c&&c.apply(this,arguments)||this;e.colDistance=void 0;e.data=void 0;e.group=void 0;e.nodeLookup=void 0;e.nodePadding=void 0;e.nodes=void 0;e.nodeWidth=void 0;e.options=void 0;e.points=void 0;e.translationFactor=void 0;return e}n(f,c);f.getDLOptions=function(e){var a=z(e.optionsPoint)?e.optionsPoint.dataLabels:{};e=z(e.level)?e.level.dataLabels:
{};return A({style:{}},e,a)};f.prototype.createNodeColumn=function(){var a=this,b=this.chart,c=[];c.sum=function(){return this.reduce(function(a,e){return a+e.getSum()},0)};c.offset=function(e,b){for(var d=0,f,u=a.nodePadding,y=0;y<c.length;y++){f=c[y].getSum();var L=Math.max(f*b,a.options.minLinkWidth);f=f?L+u:0;if(c[y]===e)return{relativeTop:d+B(e.options.offset||0,f)};d+=f}};c.top=function(e){var c=a.nodePadding,d=this.reduce(function(b,d){0<b&&(b+=c);d=Math.max(d.getSum()*e,a.options.minLinkWidth);
return b+d},0);return(b.plotSizeY-d)/2};return c};f.prototype.createNodeColumns=function(){var a=[];this.nodes.forEach(function(e){var b=-1,c;if(!r(e.options.column))if(0===e.linksTo.length)e.column=0;else{for(c=0;c<e.linksTo.length;c++){var d=e.linksTo[0];if(d.fromNode.column>b){var f=d.fromNode;b=f.column}}e.column=b+1;f&&"hanging"===f.options.layout&&(e.hangsFrom=f,c=-1,K(f.linksFrom,function(a,b){(a=a.toNode===e)&&(c=b);return a}),e.column+=c)}a[e.column]||(a[e.column]=this.createNodeColumn());
a[e.column].push(e)},this);for(var b=0;b<a.length;b++)"undefined"===typeof a[b]&&(a[b]=this.createNodeColumn());return a};f.prototype.generatePoints=function(){function a(e,b){"undefined"===typeof e.level&&(e.level=b,e.linksFrom.forEach(function(e){e.toNode&&a(e.toNode,b+1)}))}k.generatePoints.apply(this,arguments);this.orderNodes&&(this.nodes.filter(function(a){return 0===a.linksTo.length}).forEach(function(e){a(e,0)}),m(this.nodes,function(a,e){return a.level-e.level}))};f.prototype.getNodePadding=
function(){var a=this.options.nodePadding||0;if(this.nodeColumns){var b=this.nodeColumns.reduce(function(a,e){return Math.max(a,e.length)},0);b*a>this.chart.plotSizeY&&(a=this.chart.plotSizeY/b)}return a};f.prototype.hasData=function(){return!!this.processedXData.length};f.prototype.pointAttribs=function(a,b){if(!a)return{};var e=this,c=e.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},f=a.options,u=c.states&&c.states[b||""]||{};b=["colorByPoint","borderColor","borderWidth","linkOpacity"].reduce(function(a,
b){a[b]=q(u[b],f[b],c[b],e.options[b]);return a},{});var v=q(u.color,f.color,b.colorByPoint?a.color:c.color);return a.isNode?{fill:v,stroke:b.borderColor,"stroke-width":b.borderWidth}:{fill:d.parse(v).setOpacity(b.linkOpacity).get()}};f.prototype.render=function(){var a=this.points;this.points=this.points.concat(this.nodes||[]);b.prototype.render.call(this);this.points=a};f.prototype.translate=function(){var b=this,c=function(a){for(var e=a.slice(),c=b.options.minLinkWidth||0,v,u=0,k,h=f.plotSizeY-
g.borderWidth-(a.length-1)*d.nodePadding;a.length;){u=h/a.sum();v=!1;for(k=a.length;k--;)a[k].getSum()*u<c&&(a.splice(k,1),h-=c,v=!0);if(!v)break}a.length=0;e.forEach(function(b){return a.push(b)});return u};this.processedXData||this.processData();this.generatePoints();this.nodeColumns=this.createNodeColumns();this.nodeWidth=B(this.options.nodeWidth,this.chart.plotSizeX);var d=this,f=this.chart,g=this.options,k=this.nodeWidth,v=this.nodeColumns;this.nodePadding=this.getNodePadding();this.translationFactor=
v.reduce(function(a,b){return Math.min(a,c(b))},Infinity);this.colDistance=(f.plotSizeX-k-g.borderWidth)/Math.max(1,v.length-1);d.mapOptionsToLevel=a({from:1,levels:g.levels,to:v.length-1,defaults:{borderColor:g.borderColor,borderRadius:g.borderRadius,borderWidth:g.borderWidth,color:d.color,colorByPoint:g.colorByPoint,levelIsConstant:!0,linkColor:g.linkColor,linkLineWidth:g.linkLineWidth,linkOpacity:g.linkOpacity,states:g.states}});v.forEach(function(a){a.forEach(function(b){d.translateNode(b,a)})},
this);this.nodes.forEach(function(a){a.linksFrom.forEach(function(a){(a.weight||a.isNull)&&a.to&&(d.translateLink(a),a.allowShadow=!1)})})};f.prototype.translateLink=function(a){var b=function(b,e){var c;e=b.offset(a,e)*f;return Math.min(b.nodeY+e,b.nodeY+(null===(c=b.shapeArgs)||void 0===c?void 0:c.height)-g)},c=a.fromNode,e=a.toNode,d=this.chart,f=this.translationFactor,g=Math.max(a.weight*f,this.options.minLinkWidth),k=(d.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,h=
b(c,"linksFrom");b=b(e,"linksTo");var l=c.nodeX,m=this.nodeWidth;e=e.column*this.colDistance;var n=a.outgoing,p=e>l+m;d.inverted&&(h=d.plotSizeY-h,b=(d.plotSizeY||0)-b,e=d.plotSizeX-e,m=-m,g=-g,p=l>e);a.shapeType="path";a.linkBase=[h,h+g,b,b+g];if(p&&"number"===typeof b)a.shapeArgs={d:[["M",l+m,h],["C",l+m+k,h,e-k,b,e,b],["L",e+(n?m:0),b+g/2],["L",e,b+g],["C",e-k,b+g,l+m+k,h+g,l+m,h+g],["Z"]]};else if("number"===typeof b){k=e-20-g;n=e-20;p=e;var r=l+m,q=r+20,t=q+g,w=h,C=h+g,G=C+20,D=G+(d.plotHeight-
h-g),x=D+20,F=x+g,H=b,E=H+g,z=E+20,A=x+.7*g,B=p-.7*g,I=r+.7*g;a.shapeArgs={d:[["M",r,w],["C",I,w,t,C-.7*g,t,G],["L",t,D],["C",t,A,I,F,r,F],["L",p,F],["C",B,F,k,A,k,D],["L",k,z],["C",k,E-.7*g,B,H,p,H],["L",p,E],["C",n,E,n,E,n,z],["L",n,D],["C",n,x,n,x,p,x],["L",r,x],["C",q,x,q,x,q,D],["L",q,G],["C",q,C,q,C,r,C],["Z"]]}}a.dlBox={x:l+(e-l+m)/2,y:h+(b-h)/2,height:g,width:0};a.tooltipPos=d.inverted?[d.plotSizeY-a.dlBox.y-g/2,d.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+g/2];a.y=a.plotY=1;a.color||(a.color=
c.color)};f.prototype.translateNode=function(a,b){var c=this.translationFactor,d=this.chart,e=this.options,g=a.getSum(),k=Math.max(Math.round(g*c),this.options.minLinkWidth),h=Math.round(e.borderWidth)%2/2,l=b.offset(a,c);b=Math.floor(q(l.absoluteTop,b.top(c)+l.relativeTop))+h;h=Math.floor(this.colDistance*a.column+e.borderWidth/2)+h;h=d.inverted?d.plotSizeX-h:h;c=Math.round(this.nodeWidth);(a.sum=g)?(a.shapeType="rect",a.nodeX=h,a.nodeY=b,a.shapeArgs=d.inverted?{x:h-c,y:d.plotSizeY-b-k,width:a.options.height||
e.height||c,height:a.options.width||e.width||k}:{x:h,y:b,width:a.options.width||e.width||c,height:a.options.height||e.height||k},a.shapeArgs.display=a.hasShape()?"":"none",a.dlOptions=f.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotY=1,a.tooltipPos=d.inverted?[d.plotSizeY-a.shapeArgs.y-a.shapeArgs.height/2,d.plotSizeX-a.shapeArgs.x-a.shapeArgs.width/2]:[a.shapeArgs.x+a.shapeArgs.width/2,a.shapeArgs.y+a.shapeArgs.height/2]):a.dlOptions={enabled:!1}};f.defaultOptions=
A(b.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',
pointFormat:"{point.fromNode.name} \u2192 {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}});return f}(b);h(f.prototype,{animate:c.prototype.animate,createNode:k.createNode,destroy:k.destroy,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,pointArrayMap:["from","to"],pointClass:l,searchPoint:g.noop,setData:k.setData});p.registerSeriesType("sankey",f);"";"";return f});r(d,"masters/modules/sankey.src.js",[],function(){})});