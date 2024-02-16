/*
 Highcharts JS v8.0.4 (2020-03-10)

 (c) 2014-2019 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/8.0.4/highcharts.js"],function(p){c(p);c.Highcharts=p;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function p(c,d,y,g){c.hasOwnProperty(d)||(c[d]=g.apply(null,y))}c=c?c._modules:{};p(c,"mixins/tree-series.js",[c["parts/Color.js"],c["parts/Utilities.js"]],function(c,d){var y=d.extend,g=d.isArray,z=d.isNumber,m=d.isObject,
k=d.merge,v=d.pick;return{getColor:function(f,l){var d=l.index,k=l.mapOptionsToLevel,w=l.parentColor,g=l.parentColorIndex,m=l.series,B=l.colors,y=l.siblings,q=m.points,x=m.chart.options.chart,A;if(f){q=q[f.i];f=k[f.level]||{};if(k=q&&f.colorByPoint){var t=q.index%(B?B.length:x.colorCount);var z=B&&B[t]}if(!m.chart.styledMode){B=q&&q.options.color;x=f&&f.color;if(A=w)A=(A=f&&f.colorVariation)&&"brightness"===A.key?c.parse(w).brighten(d/y*A.to).get():w;A=v(B,x,z,A,m.color)}var p=v(q&&q.options.colorIndex,
f&&f.colorIndex,t,g,l.colorIndex)}return{color:A,colorIndex:p}},getLevelOptions:function(f){var l=null;if(m(f)){l={};var c=z(f.from)?f.from:1;var d=f.levels;var w={};var v=m(f.defaults)?f.defaults:{};g(d)&&(w=d.reduce(function(l,d){if(m(d)&&z(d.level)){var f=k({},d);var E="boolean"===typeof f.levelIsConstant?f.levelIsConstant:v.levelIsConstant;delete f.levelIsConstant;delete f.level;d=d.level+(E?0:c-1);m(l[d])?y(l[d],f):l[d]=f}return l},{}));d=z(f.to)?f.to:1;for(f=0;f<=d;f++)l[f]=k({},v,m(w[f])?w[f]:
{})}return l},setTreeValues:function F(d,c){var l=c.before,k=c.idRoot,m=c.mapIdToNode[k],g=c.points[d.i],E=g&&g.options||{},q=0,x=[];y(d,{levelDynamic:d.level-(("boolean"===typeof c.levelIsConstant?c.levelIsConstant:1)?0:m.level),name:v(g&&g.name,""),visible:k===d.id||("boolean"===typeof c.visible?c.visible:!1)});"function"===typeof l&&(d=l(d,c));d.children.forEach(function(l,k){var g=y({},c);y(g,{index:k,siblings:d.children.length,visible:d.visible});l=F(l,g);x.push(l);l.visible&&(q+=l.val)});d.visible=
0<q||d.visible;l=v(E.value,q);y(d,{children:x,childrenTotal:q,isLeaf:d.visible&&!q,val:l});return d},updateRootId:function(d){if(m(d)){var c=m(d.options)?d.options:{};c=v(d.rootNode,c.rootId,"");m(d.userOptions)&&(d.userOptions.rootId=c);d.rootNode=c}return c}}});p(c,"mixins/draw-point.js",[],function(){var c=function(d){var c=this,g=c.graphic,z=d.animatableAttribs,m=d.onComplete,k=d.css,v=d.renderer;if(c.shouldDraw())g||(c.graphic=g=v[d.shapeType](d.shapeArgs).add(d.group)),g.css(k).attr(d.attribs).animate(z,
d.isNew?!1:void 0,m);else if(g){var f=function(){c.graphic=g=g.destroy();"function"===typeof m&&m()};Object.keys(z).length?g.animate(z,void 0,function(){f()}):f()}};return function(d){(d.attribs=d.attribs||{})["class"]=this.getClassName();c.call(this,d)}});p(c,"modules/treemap.src.js",[c["parts/Globals.js"],c["mixins/tree-series.js"],c["mixins/draw-point.js"],c["parts/Color.js"],c["mixins/legend-symbol.js"],c["parts/Point.js"],c["parts/Utilities.js"]],function(c,d,y,g,z,m,k){var v=g.parse,f=k.addEvent,
l=k.correctFloat,p=k.defined,F=k.error,w=k.extend,J=k.fireEvent,I=k.isArray,B=k.isNumber,K=k.isObject,q=k.isString,x=k.merge,A=k.objectEach,t=k.pick;g=k.seriesType;var L=k.stableSort,G=c.seriesTypes;k=c.noop;var M=d.getColor,N=d.getLevelOptions,C=c.Series,O=function(a,b,e){e=e||this;A(a,function(r,h){b.call(e,r,h,a)})},D=function(a,b,e){e=e||this;a=b.call(e,a);!1!==a&&D(a,b,e)},P=d.updateRootId,H=!1;g("treemap","scatter",{allowTraversingTree:!1,animationLimit:250,showInLegend:!1,marker:!1,colorByPoint:!1,
dataLabels:{defer:!1,enabled:!0,formatter:function(){var a=this&&this.point?this.point:{};return q(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,
colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:G.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:k,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,b){a=I(a)?a:[];var e=I(b)?b:[];b=a.reduce(function(a,b,e){b=t(b.parent,"");"undefined"===typeof a[b]&&(a[b]=[]);a[b].push(e);return a},{"":[]});O(b,function(a,
b,d){""!==b&&-1===e.indexOf(b)&&(a.forEach(function(a){d[""].push(a)}),delete d[b])});return b},getTree:function(){var a=this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},hasData:function(){return!!this.processedXData.length},init:function(a,b){var e=c.colorMapSeriesMixin;e&&(this.colorAttribs=e.colorAttribs);this.eventsToUnbind.push(f(this,"setOptions",function(a){a=a.userOptions;p(a.allowDrillToNode)&&!p(a.allowTraversingTree)&&
(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);p(a.drillUpButton)&&!p(a.traverseUpButton)&&(a.traverseUpButton=a.drillUpButton,delete a.drillUpButton)}));C.prototype.init.call(this,a,b);this.options.allowTraversingTree&&this.eventsToUnbind.push(f(this,"click",this.onClickDrillToNode))},buildNode:function(a,b,e,d,h){var c=this,n=[],r=c.points[b],f=0,u;(d[a]||[]).forEach(function(b){u=c.buildNode(c.points[b].id,b,e+1,d,a);f=Math.max(u.height+1,f);n.push(u)});b={id:a,i:b,children:n,
height:f,level:e,parent:h,visible:!1};c.nodeMap[b.id]=b;r&&(r.node=b);return b},setTreeValues:function(a){var b=this,e=b.options,d=b.nodeMap[b.rootNode];e="boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0;var h=0,c=[],n=b.points[a.i];a.children.forEach(function(a){a=b.setTreeValues(a);c.push(a);a.ignore||(h+=a.val)});L(c,function(a,b){return a.sortIndex-b.sortIndex});var f=t(n&&n.options.value,h);n&&(n.value=f);w(a,{children:c,childrenTotal:h,ignore:!(t(n&&n.visible,!0)&&0<f),isLeaf:a.visible&&
!h,levelDynamic:a.level-(e?0:d.level),name:t(n&&n.name,""),sortIndex:t(n&&n.sortIndex,-f),val:f});return a},calculateChildrenAreas:function(a,b){var e=this,d=e.options,h=e.mapOptionsToLevel[a.level+1],c=t(e[h&&h.layoutAlgorithm]&&h.layoutAlgorithm,d.layoutAlgorithm),n=d.alternateStartingDirection,f=[];a=a.children.filter(function(a){return!a.ignore});h&&h.layoutStartingDirection&&(b.direction="vertical"===h.layoutStartingDirection?0:1);f=e[c](b,a);a.forEach(function(a,h){h=f[h];a.values=x(h,{val:a.childrenTotal,
direction:n?1-b.direction:b.direction});a.pointValues=x(h,{x:h.x/e.axisRatio,y:100-h.y-h.height,width:h.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,b=a.xAxis,e=a.yAxis,d=a.chart.styledMode;a.points.forEach(function(h){var c=h.node,n=c.pointValues;c=c.visible;if(n&&c){c=n.height;var f=n.width,r=n.x,u=n.y,k=d?0:(a.pointAttribs(h)["stroke-width"]||0)%2/2;n=Math.round(b.toPixels(r,!0))-k;f=Math.round(b.toPixels(r+f,!0))-k;r=Math.round(e.toPixels(u,
!0))-k;c=Math.round(e.toPixels(u+c,!0))-k;h.shapeArgs={x:Math.min(n,f),y:Math.min(r,c),width:Math.abs(f-n),height:Math.abs(c-r)};h.plotX=h.shapeArgs.x+h.shapeArgs.width/2;h.plotY=h.shapeArgs.y+h.shapeArgs.height/2}else delete h.plotX,delete h.plotY})},setColorRecursive:function(a,b,e,c,h){var d=this,f=d&&d.chart;f=f&&f.options&&f.options.colors;if(a){var r=M(a,{colors:f,index:c,mapOptionsToLevel:d.mapOptionsToLevel,parentColor:b,parentColorIndex:e,series:d,siblings:h});if(b=d.points[a.i])b.color=
r.color,b.colorIndex=r.colorIndex;(a.children||[]).forEach(function(b,e){d.setColorRecursive(b,r.color,r.colorIndex,e,a.children.length)})}},algorithmGroup:function(a,b,e,d){this.height=a;this.width=b;this.plot=d;this.startDirection=this.direction=e;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,b){return Math.max(a/b,b/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===
this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=
0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,b,e,d){var h,c,f,r,k=e.lW,u=e.lH,g=e.plot,m=0,q=e.elArr.length-1;if(b)k=e.nW,u=e.nH;else var p=e.elArr[e.elArr.length-1];e.elArr.forEach(function(a){if(b||m<q)0===e.direction?(h=g.x,c=g.y,f=k,r=a/f):(h=g.x,c=g.y,r=u,f=a/r),d.push({x:h,y:c,width:f,height:l(r)}),0===e.direction?g.y+=r:g.x+=f;m+=1});e.reset();0===e.direction?e.width-=k:e.height-=u;g.y=g.parent.y+(g.parent.height-e.height);g.x=g.parent.x+(g.parent.width-e.width);a&&(e.direction=
1-e.direction);b||e.addElement(p)},algorithmLowAspectRatio:function(a,b,e){var d=[],h=this,c,f={x:b.x,y:b.y,parent:b},g=0,k=e.length-1,u=new this.algorithmGroup(b.height,b.width,b.direction,f);e.forEach(function(e){c=e.val/b.val*b.height*b.width;u.addElement(c);u.lP.nR>u.lP.lR&&h.algorithmCalcPoints(a,!1,u,d,f);g===k&&h.algorithmCalcPoints(a,!0,u,d,f);g+=1});return d},algorithmFill:function(a,b,e){var d=[],c,f=b.direction,g=b.x,k=b.y,l=b.width,u=b.height,m,q,p,t;e.forEach(function(e){c=e.val/b.val*
b.height*b.width;m=g;q=k;0===f?(t=u,p=c/t,l-=p,g+=p):(p=l,t=c/p,u-=t,k+=t);d.push({x:m,y:q,width:p,height:t});a&&(f=1-f)});return d},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,e=P(a);C.prototype.translate.call(a);var d=a.tree=a.getTree();var c=a.nodeMap[e];
a.renderTraverseUpButton(e);a.mapOptionsToLevel=N({from:c.level+1,levels:b.levels,to:d.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});""===e||c&&c.children.length||(a.setRootNode("",!1),e=a.rootNode,c=a.nodeMap[e]);D(a.nodeMap[a.rootNode],function(b){var e=!1,d=b.parent;b.visible=!0;if(d||""===d)e=a.nodeMap[d];return e});D(a.nodeMap[a.rootNode].children,function(a){var b=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});
return b});a.setTreeValues(d);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=e=x(e,{width:e.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:d.val});a.calculateChildrenAreas(d,e);a.colorAxis||b.colorByPoint||a.setColorRecursive(a.tree);b.allowTraversingTree&&(b=c.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},
drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,e,d;a.points.filter(function(a){return a.node.visible}).forEach(function(c){d=b[c.node.level];e={style:{}};c.node.isLeaf||(e.enabled=!1);d&&d.dataLabels&&(e=x(e,d.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(e.style.width=c.shapeArgs.width,c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=x(e,c.options.dataLabels)});C.prototype.drawDataLabels.call(this)},alignDataLabel:function(a,b,e){var c=e.style;!p(c.textOverflow)&&
b.text&&b.getBBox().width>b.text.textWidth&&b.css({textOverflow:"ellipsis",width:c.width+="px"});G.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var e=K(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},c=a&&e[a.node.level]||{};e=this.options;var d=b&&e.states[b]||{},f=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||c.borderColor||d.borderColor||e.borderColor,"stroke-width":t(a&&a.borderWidth,c.borderWidth,
d.borderWidth,e.borderWidth),dashstyle:a&&a.borderDashStyle||c.borderDashStyle||d.borderDashStyle||e.borderDashStyle,fill:a&&a.color||this.color};-1!==f.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==f.indexOf("highcharts-internal-node-interactive")?(b=t(d.opacity,e.opacity),a.fill=v(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==f.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=v(a.fill).brighten(d.brightness).get());return a},drawPoints:function(){var a=
this,b=a.chart,e=b.renderer,c=b.styledMode,d=a.options,f=c?{}:d.shadow,g=d.borderRadius,k=b.pointCount<d.animationLimit,l=d.allowTraversingTree;a.points.forEach(function(b){var h=b.node.levelDynamic,r={},m={},p={},n="level-group-"+h,q=!!b.graphic,t=k&&q,u=b.shapeArgs;b.shouldDraw()&&(g&&(m.r=g),x(!0,t?r:m,q?u:{},c?{}:a.pointAttribs(b,b.selected&&"select")),a.colorAttribs&&c&&w(p,a.colorAttribs(b)),a[n]||(a[n]=e.g(n).attr({zIndex:1E3-h}).add(a.group),a[n].survive=!0));b.draw({animatableAttribs:r,attribs:m,
css:p,group:a[n],renderer:e,shadow:f,shapeArgs:u,shapeType:"rect"});l&&b.graphic&&(b.drillId=d.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;q(b)&&(a.setState(""),this.setRootNode(b,!0,{trigger:"click"}))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=
this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},drillUp:function(){var a=this.nodeMap[this.rootNode];a&&q(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})},drillToNode:function(a,b){F("WARNING: treemap.drillToNode has been renamed to treemap.setRootNode, and will be removed in the next major version.");this.setRootNode(a,b)},setRootNode:function(a,b,c){a=w({newRootId:a,previousRootId:this.rootNode,redraw:t(b,!0),series:this},c);J(this,"setRootNode",a,function(a){var b=
a.series;b.idPreviousRoot=a.previousRootId;b.rootNode=a.newRootId;b.isDirty=!0;a.redraw&&b.chart.redraw()})},renderTraverseUpButton:function(a){var b=this,c=b.options.traverseUpButton,d=t(c.text,b.nodeMap[a].name,"< Back");if(""===a)b.drillUpButton&&(b.drillUpButton=b.drillUpButton.destroy());else if(this.drillUpButton)this.drillUpButton.placed=!1,this.drillUpButton.attr({text:d}).align();else{var f=(a=c.theme)&&a.states;this.drillUpButton=this.chart.renderer.button(d,null,null,function(){b.drillUp()},
a,f&&f.hover,f&&f.select).addClass("highcharts-drillup-button").attr({align:c.position.align,zIndex:7}).add().align(c.position,!1,c.relativeTo||"plotBox")}},buildKDTree:k,drawLegendSymbol:z.drawRectangle,getExtremes:function(){C.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;C.prototype.getExtremes.call(this)},getExtremesFromAll:!0,setState:function(a){this.options.inactiveOtherPoints=!0;C.prototype.setState.call(this,a,!1);this.options.inactiveOtherPoints=
!1},utils:{recursive:D}},{draw:y,setVisible:G.pie.prototype.pointClass.prototype.setVisible,getClassName:function(){var a=m.prototype.getClassName.call(this),b=this.series,c=b.options;this.node.level<=b.nodeMap[b.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||t(c.interactByLeaf,!c.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||B(this.value)},setState:function(a){m.prototype.setState.call(this,
a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},shouldDraw:function(){return B(this.plotY)&&null!==this.y}});f(c.Series,"afterBindAxes",function(){var a=this.xAxis,b=this.yAxis;if(a&&b)if(this.is("treemap")){var c={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};w(b.options,c);w(a.options,c);H=!0}else H&&(b.setOptions(b.userOptions),a.setOptions(a.userOptions),H=!1)});""});p(c,"masters/modules/treemap.src.js",
[],function(){})});
