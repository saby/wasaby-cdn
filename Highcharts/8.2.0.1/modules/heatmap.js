/*
 Highmaps JS v8.2.0 (2020-08-20)

 (c) 2009-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts"],function(p){a(p);a.Highcharts=p;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function p(a,t,m,k){a.hasOwnProperty(t)||(a[t]=k.apply(null,m))}a=a?a._modules:{};p(a,"Mixins/ColorSeries.js",[a["Core/Globals.js"]],function(a){a.colorPointMixin={setVisible:function(a){var m=this,k=a?"show":"hide";
m.visible=m.options.visible=!!a;["graphic","dataLabel"].forEach(function(a){if(m[a])m[a][k]()});this.series.buildKDTree()}};a.colorSeriesMixin={optionalAxis:"colorAxis",colorAxis:0,translateColors:function(){var a=this,m=this.options.nullColor,k=this.colorAxis,x=this.colorKey;(this.data.length?this.data:this.points).forEach(function(q){var v=q.getNestedProperty(x);(v=q.options.color||(q.isNull||null===q.value?m:k&&"undefined"!==typeof v?k.toColor(v,q):q.color||a.color))&&q.color!==v&&(q.color=v,"point"===
a.options.legendType&&q.legendItem&&a.chart.legend.colorizeItem(q,q.visible))})}}});p(a,"Core/Axis/ColorAxis.js",[a["Core/Axis/Axis.js"],a["Core/Chart/Chart.js"],a["Core/Color.js"],a["Core/Globals.js"],a["Core/Legend.js"],a["Mixins/LegendSymbol.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,t,m,k,y,q,v,r){var x=this&&this.__extends||function(){var c=function(b,d){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var f in b)b.hasOwnProperty(f)&&
(d[f]=b[f])};return c(b,d)};return function(b,d){function e(){this.constructor=b}c(b,d);b.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e)}}(),p=m.parse,B=k.noop;m=r.addEvent;var u=r.erase,w=r.extend,c=r.Fx,g=r.isNumber,C=r.merge,A=r.pick,n=r.splat;"";var l=k.Series;r=k.colorPointMixin;w(l.prototype,k.colorSeriesMixin);w(v.prototype,r);t.prototype.collectionsWithUpdate.push("colorAxis");t.prototype.collectionsWithInit.colorAxis=[t.prototype.addColorAxis];var h=function(c){function b(d,
b){var e=c.call(this,d,b)||this;e.beforePadding=!1;e.chart=void 0;e.coll="colorAxis";e.dataClasses=void 0;e.legendItem=void 0;e.legendItems=void 0;e.name="";e.options=void 0;e.stops=void 0;e.visible=!0;e.init(d,b);return e}x(b,c);b.buildOptions=function(d,e,b){d=d.options.legend||{};var f=b.layout?"vertical"!==b.layout:"vertical"!==d.layout;return C(e,{side:f?2:1,reversed:!f},b,{opposite:!f,showEmpty:!1,title:null,visible:d.enabled&&(b?!1!==b.visible:!0)})};b.prototype.init=function(d,e){var D=b.buildOptions(d,
b.defaultOptions,e);this.coll="colorAxis";c.prototype.init.call(this,d,D);e.dataClasses&&this.initDataClasses(e);this.initStops();this.horiz=!D.opposite;this.zoomEnabled=!1};b.prototype.initDataClasses=function(d){var b=this.chart,c,f=0,a=b.options.chart.colorCount,g=this.options,l=d.dataClasses.length;this.dataClasses=c=[];this.legendItems=[];d.dataClasses.forEach(function(d,e){d=C(d);c.push(d);if(b.styledMode||!d.color)"category"===g.dataClassColor?(b.styledMode||(e=b.options.colors,a=e.length,
d.color=e[f]),d.colorIndex=f,f++,f===a&&(f=0)):d.color=p(g.minColor).tweenTo(p(g.maxColor),2>l?.5:e/(l-1))})};b.prototype.hasData=function(){return!!(this.tickPositions||[]).length};b.prototype.setTickPositions=function(){if(!this.dataClasses)return c.prototype.setTickPositions.call(this)};b.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(d){d.color=p(d[1])})};b.prototype.setOptions=function(d){c.prototype.setOptions.call(this,
d);this.options.crosshair=this.options.marker};b.prototype.setAxisSize=function(){var d=this.legendSymbol,e=this.chart,c=e.options.legend||{},f,a;d?(this.left=c=d.attr("x"),this.top=f=d.attr("y"),this.width=a=d.attr("width"),this.height=d=d.attr("height"),this.right=e.chartWidth-c-a,this.bottom=e.chartHeight-f-d,this.len=this.horiz?a:d,this.pos=this.horiz?c:f):this.len=(this.horiz?c.symbolWidth:c.symbolHeight)||b.defaultLegendLength};b.prototype.normalizedValue=function(d){this.logarithmic&&(d=this.logarithmic.log2lin(d));
return 1-(this.max-d)/(this.max-this.min||1)};b.prototype.toColor=function(d,b){var c=this.dataClasses,e=this.stops,a;if(c)for(a=c.length;a--;){var g=c[a];var l=g.from;e=g.to;if(("undefined"===typeof l||d>=l)&&("undefined"===typeof e||d<=e)){var h=g.color;b&&(b.dataClass=a,b.colorIndex=g.colorIndex);break}}else{d=this.normalizedValue(d);for(a=e.length;a--&&!(d>e[a][0]););l=e[a]||e[a+1];e=e[a+1]||l;d=1-(e[0]-d)/(e[0]-l[0]||1);h=l.color.tweenTo(e.color,d)}return h};b.prototype.getOffset=function(){var d=
this.legendGroup,b=this.chart.axisOffset[this.side];d&&(this.axisParent=d,c.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=b)};b.prototype.setLegendColor=function(){var d=this.reversed,b=d?1:0;d=d?0:1;b=this.horiz?[b,0,d,0]:[0,d,0,b];this.legendColor={linearGradient:{x1:b[0],y1:b[1],x2:b[2],y2:b[3]},stops:this.stops}};b.prototype.drawLegendSymbol=function(d,c){var e=d.padding,f=d.options,a=this.horiz,g=A(f.symbolWidth,
a?b.defaultLegendLength:12),l=A(f.symbolHeight,a?12:b.defaultLegendLength),h=A(f.labelPadding,a?16:30);f=A(f.itemDistance,10);this.setLegendColor();c.legendSymbol=this.chart.renderer.rect(0,d.baseline-11,g,l).attr({zIndex:1}).add(c.legendGroup);this.legendItemWidth=g+e+(a?f:h);this.legendItemHeight=l+e+(a?h:0)};b.prototype.setState=function(d){this.series.forEach(function(b){b.setState(d)})};b.prototype.setVisible=function(){};b.prototype.getSeriesExtremes=function(){var b=this.series,c=b.length,
a;this.dataMin=Infinity;for(this.dataMax=-Infinity;c--;){var f=b[c];var g=f.colorKey=A(f.options.colorKey,f.colorKey,f.pointValKey,f.zoneAxis,"y");var h=f.pointArrayMap;var z=f[g+"Min"]&&f[g+"Max"];if(f[g+"Data"])var n=f[g+"Data"];else if(h){n=[];h=h.indexOf(g);var k=f.yData;if(0<=h&&k)for(a=0;a<k.length;a++)n.push(A(k[a][h],k[a]))}else n=f.yData;z?(f.minColorValue=f[g+"Min"],f.maxColorValue=f[g+"Max"]):(n=l.prototype.getExtremes.call(f,n),f.minColorValue=n.dataMin,f.maxColorValue=n.dataMax);"undefined"!==
typeof f.minColorValue&&(this.dataMin=Math.min(this.dataMin,f.minColorValue),this.dataMax=Math.max(this.dataMax,f.maxColorValue));z||l.prototype.applyExtremes.call(f)}};b.prototype.drawCrosshair=function(b,e){var d=e&&e.plotX,a=e&&e.plotY,g=this.pos,l=this.len;if(e){var h=this.toPixels(e.getNestedProperty(e.series.colorKey));h<g?h=g-2:h>g+l&&(h=g+l+2);e.plotX=h;e.plotY=this.len-h;c.prototype.drawCrosshair.call(this,b,e);e.plotX=d;e.plotY=a;this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&
(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,!this.chart.styledMode&&this.crosshair&&this.cross.attr({fill:this.crosshair.color}))}};b.prototype.getPlotLinePath=function(b){var d=this.left,a=b.translatedValue,f=this.top;return g(a)?this.horiz?[["M",a-4,f-6],["L",a+4,f-6],["L",a,f],["Z"]]:[["M",d,a],["L",d-6,a+6],["L",d-6,a-6],["Z"]]:c.prototype.getPlotLinePath.call(this,b)};b.prototype.update=function(d,a){var e=this.chart,g=e.legend,l=b.buildOptions(e,
{},d);this.series.forEach(function(b){b.isDirtyData=!0});(d.dataClasses&&g.allItems||this.dataClasses)&&this.destroyItems();e.options[this.coll]=C(this.userOptions,l);c.prototype.update.call(this,l,a);this.legendItem&&(this.setLegendColor(),g.colorizeItem(this,!0))};b.prototype.destroyItems=function(){var b=this.chart;this.legendItem?b.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach(function(d){b.legend.destroyItem(d)});b.isDirtyLegend=!0};b.prototype.remove=function(b){this.destroyItems();
c.prototype.remove.call(this,b)};b.prototype.getDataClassLegendSymbols=function(){var b=this,c=b.chart,a=b.legendItems,g=c.options.legend,l=g.valueDecimals,h=g.valueSuffix||"",n;a.length||b.dataClasses.forEach(function(d,g){var e=!0,f=d.from,z=d.to,k=c.numberFormatter;n="";"undefined"===typeof f?n="< ":"undefined"===typeof z&&(n="> ");"undefined"!==typeof f&&(n+=k(f,l)+h);"undefined"!==typeof f&&"undefined"!==typeof z&&(n+=" - ");"undefined"!==typeof z&&(n+=k(z,l)+h);a.push(w({chart:c,name:n,options:{},
drawLegendSymbol:q.drawRectangle,visible:!0,setState:B,isDataClass:!0,setVisible:function(){e=b.visible=!e;b.series.forEach(function(b){b.points.forEach(function(b){b.dataClass===g&&b.setVisible(e)})});c.legend.colorizeItem(this,e)}},d))});return a};b.defaultLegendLength=200;b.defaultOptions={lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},
minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0};b.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"];return b}(a);Array.prototype.push.apply(a.keepProps,h.keepProps);k.ColorAxis=h;["fill","stroke"].forEach(function(a){c.prototype[a+"Setter"]=function(){this.elem.attr(a,p(this.start).tweenTo(p(this.end),this.pos),null,!0)}});m(t,"afterGetAxes",function(){var c=this,b=c.options;this.colorAxis=[];b.colorAxis&&(b.colorAxis=n(b.colorAxis),b.colorAxis.forEach(function(b,
a){b.index=a;new h(c,b)}))});m(l,"bindAxes",function(){var c=this.axisTypes;c?-1===c.indexOf("colorAxis")&&c.push("colorAxis"):this.axisTypes=["colorAxis"]});m(y,"afterGetAllItems",function(c){var b=[],d,a;(this.chart.colorAxis||[]).forEach(function(a){(d=a.options)&&d.showInLegend&&(d.dataClasses&&d.visible?b=b.concat(a.getDataClassLegendSymbols()):d.visible&&b.push(a),a.series.forEach(function(b){if(!b.options.showInLegend||d.dataClasses)"point"===b.options.legendType?b.points.forEach(function(b){u(c.allItems,
b)}):u(c.allItems,b)}))});for(a=b.length;a--;)c.allItems.unshift(b[a])});m(y,"afterColorizeItem",function(c){c.visible&&c.item.legendColor&&c.item.legendSymbol.attr({fill:c.item.legendColor})});m(y,"afterUpdate",function(){var c=this.chart.colorAxis;c&&c.forEach(function(b,c,a){b.update({},a)})});m(l,"afterTranslate",function(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()});return h});p(a,"Mixins/ColorMapSeries.js",[a["Core/Globals.js"],a["Core/Series/Point.js"],
a["Core/Utilities.js"]],function(a,p,m){var k=m.defined;m=a.noop;var x=a.seriesTypes;a.colorMapPointMixin={dataLabelOnNull:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setState:function(a){p.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})}};a.colorMapSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:m,parallelArrays:["x",
"y","value"],colorKey:"value",pointAttribs:x.column.prototype.pointAttribs,colorAttribs:function(a){var m={};k(a.color)&&(m[this.colorProp||"fill"]=a.color);return m}}});p(a,"Series/HeatmapSeries.js",[a["Core/Globals.js"],a["Mixins/LegendSymbol.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(a,p,m,k){var y=k.clamp,q=k.extend,v=k.fireEvent,r=k.isNumber,t=k.merge,x=k.pick;k=k.seriesType;"";var B=a.colorMapPointMixin,u=a.Series,w=m.prototype.symbols;k("heatmap","scatter",
{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}},t(a.colorMapSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,
init:function(){u.prototype.init.apply(this,arguments);var a=this.options;a.pointRange=x(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1;q(w,{ellipse:w.circle,rect:w.square})},getSymbol:u.prototype.getSymbol,setClip:function(a){var c=this.chart;u.prototype.setClip.apply(this,arguments);(!1!==this.options.clip||a)&&this.markerGroup.clip((a||this.clipBox)&&this.sharedClipKey?c[this.sharedClipKey]:c.clipRect)},translate:function(){var a=this.options,g=a.marker&&a.marker.symbol||"",
k=w[g]?g:"rect";a=this.options;var m=-1!==["circle","square"].indexOf(k);this.generatePoints();this.points.forEach(function(a){var c=a.getCellAttributes(),h={x:Math.min(c.x1,c.x2),y:Math.min(c.y1,c.y2),width:Math.max(Math.abs(c.x2-c.x1),0),height:Math.max(Math.abs(c.y2-c.y1),0)};var n=a.hasImage=0===(a.marker&&a.marker.symbol||g||"").indexOf("url");if(m){var b=Math.abs(h.width-h.height);h.x=Math.min(c.x1,c.x2)+(h.width<h.height?0:b/2);h.y=Math.min(c.y1,c.y2)+(h.width<h.height?b/2:0);h.width=h.height=
Math.min(h.width,h.height)}b={plotX:(c.x1+c.x2)/2,plotY:(c.y1+c.y2)/2,clientX:(c.x1+c.x2)/2,shapeType:"path",shapeArgs:t(!0,h,{d:w[k](h.x,h.y,h.width,h.height)})};n&&(a.marker={width:h.width,height:h.height});q(a,b)});v(this,"afterTranslate")},pointAttribs:function(c,g){var k=u.prototype.pointAttribs.call(this,c,g),m=this.options||{},n=this.chart.options.plotOptions||{},l=n.series||{},h=n.heatmap||{};n=m.borderColor||h.borderColor||l.borderColor;l=m.borderWidth||h.borderWidth||l.borderWidth||k["stroke-width"];
k.stroke=c&&c.marker&&c.marker.lineColor||m.marker&&m.marker.lineColor||n||this.color;k["stroke-width"]=l;g&&(c=t(m.states[g],m.marker&&m.marker.states[g],c.options.states&&c.options.states[g]||{}),g=c.brightness,k.fill=c.color||a.color(k.fill).brighten(g||0).get(),k.stroke=c.lineColor);return k},markerAttribs:function(a,g){var c=a.marker||{},k=this.options.marker||{},n=a.shapeArgs||{},l={};if(a.hasImage)return{x:a.plotX,y:a.plotY};if(g){var h=k.states[g]||{};var m=c.states&&c.states[g]||{};[["width",
"x"],["height","y"]].forEach(function(a){l[a[0]]=(m[a[0]]||h[a[0]]||n[a[0]])+(m[a[0]+"Plus"]||h[a[0]+"Plus"]||0);l[a[1]]=n[a[1]]+(n[a[0]]-l[a[0]])/2})}return g?l:n},drawPoints:function(){var a=this;if((this.options.marker||{}).enabled||this._hasPointMarkers)u.prototype.drawPoints.call(this),this.points.forEach(function(c){c.graphic&&c.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(c))})},hasData:function(){return!!this.processedXData.length},getValidPoints:function(a,g){return u.prototype.getValidPoints.call(this,
a,g,!0)},getBox:a.noop,drawLegendSymbol:p.drawRectangle,alignDataLabel:a.seriesTypes.column.prototype.alignDataLabel,getExtremes:function(){var a=u.prototype.getExtremes.call(this,this.valueData),g=a.dataMin;a=a.dataMax;r(g)&&(this.valueMin=g);r(a)&&(this.valueMax=a);return u.prototype.getExtremes.call(this)}}),t(B,{applyOptions:function(c,g){c=a.Point.prototype.applyOptions.call(this,c,g);c.formatPrefix=c.isNull||null===c.value?"null":"point";return c},isValid:function(){return Infinity!==this.value&&
-Infinity!==this.value},haloPath:function(a){if(!a)return[];var c=this.shapeArgs;return["M",c.x-a,c.y-a,"L",c.x-a,c.y+c.height+a,c.x+c.width+a,c.y+c.height+a,c.x+c.width+a,c.y-a,"Z"]},getCellAttributes:function(){var a=this.series,g=a.options,k=(g.colsize||1)/2,m=(g.rowsize||1)/2,n=a.xAxis,l=a.yAxis,h=this.options.marker||a.options.marker;a=a.pointPlacementToXValue();var p=x(this.pointPadding,g.pointPadding,0),b={x1:y(Math.round(n.len-(n.translate(this.x-k,!1,!0,!1,!0,-a)||0)),-n.len,2*n.len),x2:y(Math.round(n.len-
(n.translate(this.x+k,!1,!0,!1,!0,-a)||0)),-n.len,2*n.len),y1:y(Math.round(l.translate(this.y-m,!1,!0,!1,!0)||0),-l.len,2*l.len),y2:y(Math.round(l.translate(this.y+m,!1,!0,!1,!0)||0),-l.len,2*l.len)};[["width","x"],["height","y"]].forEach(function(a){var c=a[0];a=a[1];var d=a+"1",f=a+"2",g=Math.abs(b[d]-b[f]),k=h&&h.lineWidth||0,l=Math.abs(b[d]+b[f])/2;h[c]&&h[c]<g&&(b[d]=l-h[c]/2-k/2,b[f]=l+h[c]/2+k/2);p&&("y"===a&&(d=f,f=a+"1"),b[d]+=p,b[f]-=p)});return b}}));""});p(a,"masters/modules/heatmap.src.js",
[],function(){})});
//# sourceMappingURL=heatmap.js.map