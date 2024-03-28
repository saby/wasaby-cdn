/*
 Highcharts Gantt JS v9.0.1.1 (2021-02-15)

 GridAxis

 (c) 2016-2021 Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js"],function(m){e(m);e.Highcharts=m;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function m(e,r,m,g){e.hasOwnProperty(r)||(e[r]=g.apply(null,m))}e=e?e._modules:{};m(e,"Core/Axis/GridAxis.js",[e["Core/Axis/Axis.js"],e["Core/Globals.js"],e["Core/Axis/Tick.js"],e["Core/Utilities.js"]],function(e,
m,A,g){var k=g.addEvent,n=g.defined,r=g.erase,B=g.find,C=g.isArray,t=g.isNumber,u=g.merge,w=g.pick,D=g.timeUnits,y=g.wrap,E=m.Chart,F=function(b){var a=b.options;a.labels||(a.labels={});a.labels.align=w(a.labels.align,"center");b.categories||(a.showLastLabel=!1);b.labelRotation=0;a.labels.rotation=0};"";e.prototype.getMaxLabelDimensions=function(b,a){var c={width:0,height:0};a.forEach(function(a){a=b[a];if(g.isObject(a,!0)){var d=g.isObject(a.label,!0)?a.label:{};a=d.getBBox?d.getBBox().height:0;
d.textStr&&!t(d.textPxLength)&&(d.textPxLength=d.getBBox().width);var h=t(d.textPxLength)?Math.round(d.textPxLength):0;d.textStr&&(h=Math.round(d.getBBox().width));c.height=Math.max(a,c.height);c.width=Math.max(h,c.width)}});return c};m.dateFormats.W=function(b){b=new this.Date(b);var a=(this.get("Day",b)+6)%7,c=new this.Date(b.valueOf());this.set("Date",c,this.get("Date",b)-a+3);a=new this.Date(this.get("FullYear",c),0,1);4!==this.get("Day",a)&&(this.set("Month",b,0),this.set("Date",b,1+(11-this.get("Day",
a))%7));return(1+Math.floor((c.valueOf()-a.valueOf())/6048E5)).toString()};m.dateFormats.E=function(b){return this.dateFormat("%a",b,!0).charAt(0)};k(E,"afterSetChartSize",function(){this.axes.forEach(function(b){(b.grid&&b.grid.columns||[]).forEach(function(a){a.setAxisSize();a.setAxisTranslation()})})});k(A,"afterGetLabelPosition",function(b){var a=this.label,c=this.axis,d=c.reversed,f=c.chart,h=c.options.grid||{},x=c.options.labels,z=x.align,l=v.Side[c.side],e=b.tickmarkOffset,q=c.tickPositions,
p=this.pos-e;q=t(q[b.index+1])?q[b.index+1]-e:c.max+e;var g=c.tickSize("tick");e=g?g[0]:0;g=g?g[1]/2:0;if(!0===h.enabled){if("top"===l){h=c.top+c.offset;var k=h-e}else"bottom"===l?(k=f.chartHeight-c.bottom+c.offset,h=k+e):(h=c.top+c.len-c.translate(d?q:p),k=c.top+c.len-c.translate(d?p:q));"right"===l?(l=f.chartWidth-c.right+c.offset,d=l+e):"left"===l?(d=c.left+c.offset,l=d-e):(l=Math.round(c.left+c.translate(d?q:p))-g,d=Math.round(c.left+c.translate(d?p:q))-g);this.slotWidth=d-l;b.pos.x="left"===
z?l:"right"===z?d:l+(d-l)/2;b.pos.y=k+(h-k)/2;f=f.renderer.fontMetrics(x.style.fontSize,a.element);a=a.getBBox().height;x.useHTML?b.pos.y+=f.b+-(a/2):(a=Math.round(a/f.h),b.pos.y+=(f.b-(f.h-f.f))/2+-((a-1)*f.h/2));b.pos.x+=c.horiz&&x.x||0}});var G=function(){function b(a){this.axis=a}b.prototype.isOuterAxis=function(){var a=this.axis,c=a.grid.columnIndex,b=a.linkedParent&&a.linkedParent.grid.columns||a.grid.columns,f=c?a.linkedParent:a,h=-1,e=0;a.chart[a.coll].forEach(function(c,b){c.side!==a.side||
c.options.isInternal||(e=b,c===f&&(h=b))});return e===h&&(t(c)?b.length===c:!0)};b.prototype.renderBorder=function(a){var c=this.axis,b=c.chart.renderer,f=c.options;a=b.path(a).addClass("highcharts-axis-line").add(c.axisBorder);b.styledMode||a.attr({stroke:f.lineColor,"stroke-width":f.lineWidth,zIndex:7});return a};return b}(),v=function(){function b(){}b.compose=function(a){e.keepProps.push("grid");y(a.prototype,"unsquish",b.wrapUnsquish);k(a,"init",b.onInit);k(a,"afterGetOffset",b.onAfterGetOffset);
k(a,"afterGetTitlePosition",b.onAfterGetTitlePosition);k(a,"afterInit",b.onAfterInit);k(a,"afterRender",b.onAfterRender);k(a,"afterSetAxisTranslation",b.onAfterSetAxisTranslation);k(a,"afterSetOptions",b.onAfterSetOptions);k(a,"afterSetOptions",b.onAfterSetOptions2);k(a,"afterSetScale",b.onAfterSetScale);k(a,"afterTickSize",b.onAfterTickSize);k(a,"trimTicks",b.onTrimTicks);k(a,"destroy",b.onDestroy)};b.onAfterGetOffset=function(){var a=this.grid;(a&&a.columns||[]).forEach(function(a){a.getOffset()})};
b.onAfterGetTitlePosition=function(a){if(!0===(this.options.grid||{}).enabled){var c=this.axisTitle,d=this.height,f=this.horiz,h=this.left,e=this.offset,g=this.opposite,l=this.options.title,k=void 0===l?{}:l;l=this.top;var q=this.width,p=this.tickSize(),m=c&&c.getBBox().width,n=k.x||0,r=k.y||0,t=w(k.margin,f?5:10);c=this.chart.renderer.fontMetrics(k.style&&k.style.fontSize,c).f;p=(f?l+d:h)+(f?1:-1)*(g?-1:1)*(p?p[0]/2:0)+(this.side===b.Side.bottom?c:0);a.titlePosition.x=f?h-m/2-t+n:p+(g?q:0)+e+n;a.titlePosition.y=
f?p-(g?d:0)+(g?c:-c)/2+e+r:l-t+r}};b.onAfterInit=function(){var a=this.chart,c=this.options.grid;c=void 0===c?{}:c;var b=this.userOptions;c.enabled&&(F(this),y(this,"labelFormatter",function(a){var c=this.axis,b=this.value,d=c.tickPositions,f=(c.isLinked?c.linkedParent:c).series[0],h=b===d[0];d=b===d[d.length-1];var e=f&&B(f.options.data,function(a){return a[c.isXAxis?"x":"y"]===b});if(e&&f.is("gantt")){var g=u(e);m.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(g)}this.isFirst=h;this.isLast=
d;this.point=g;return a.call(this)}));if(c.columns)for(var f=this.grid.columns=[],h=this.grid.columnIndex=0;++h<c.columns.length;){var g=u(b,c.columns[c.columns.length-h-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete g.grid.columns;g=new e(this.chart,g);g.grid.isColumn=!0;g.grid.columnIndex=h;r(a.axes,g);r(a[this.coll],g);f.push(g)}};b.onAfterRender=function(){var a,c=this.grid,d=this.options;if(!0===(d.grid||{}).enabled){this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,
this.tickPositions);this.rightWall&&this.rightWall.destroy();if(this.grid&&this.grid.isOuterAxis()&&this.axisLine&&(d=d.lineWidth)){d=this.getLinePath(d);var f=d[0],h=d[1],e=((this.tickSize("tick")||[1])[0]-1)*(this.side===b.Side.top||this.side===b.Side.left?-1:1);"M"===f[0]&&"L"===h[0]&&(this.horiz?(f[2]+=e,h[2]+=e):(f[1]+=e,h[1]+=e));!this.horiz&&this.chart.marginRight&&(f=[f,["L",this.left,f[2]]],e=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(this.max+this.tickmarkOffset)],h=
[["M",h[1],this.toPixels(this.max+this.tickmarkOffset)],e],this.grid.upperBorder||0===this.min%1||(this.grid.upperBorder=this.grid.renderBorder(f)),this.grid.upperBorder&&this.grid.upperBorder.animate({d:f}),this.grid.lowerBorder||0===this.max%1||(this.grid.lowerBorder=this.grid.renderBorder(h)),this.grid.lowerBorder&&this.grid.lowerBorder.animate({d:h}));this.grid.axisLineExtra?this.grid.axisLineExtra.animate({d:d}):this.grid.axisLineExtra=this.grid.renderBorder(d);this.axisLine[this.showAxis?"show":
"hide"](!0)}(c&&c.columns||[]).forEach(function(a){a.render()});!this.horiz&&this.chart.hasRendered&&(this.scrollbar||(null===(a=this.linkedParent)||void 0===a?0:a.scrollbar))&&(a=this.max,c=this.tickmarkOffset,d=this.tickPositions[this.tickPositions.length-1],h=this.tickPositions[0],this.min-h>c?this.ticks[h].label.hide():this.ticks[h].label.show(),d-a>c?this.ticks[d].label.hide():this.ticks[d].label.show(),d-a<c&&0<d-a&&this.ticks[d].isLast?this.ticks[d].mark.hide():this.ticks[d-1]&&this.ticks[d-
1].mark.show())}};b.onAfterSetAxisTranslation=function(){var a,c=this.tickPositions&&this.tickPositions.info,b=this.options,f=this.userOptions.labels||{};(b.grid||{}).enabled&&(this.horiz?(this.series.forEach(function(a){a.options.pointRange=0}),c&&b.dateTimeLabelFormats&&b.labels&&!n(f.align)&&(!1===b.dateTimeLabelFormats[c.unitName].range||1<c.count)&&(b.labels.align="left",n(f.x)||(b.labels.x=3))):"treegrid"!==this.options.type&&(null===(a=this.grid)||void 0===a?0:a.columns)&&(this.minPointOffset=
this.tickInterval))};b.onAfterSetOptions=function(a){var c=this.options;a=a.userOptions;var b=c&&g.isObject(c.grid,!0)?c.grid:{};if(!0===b.enabled){var f=u(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",
[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a);"xAxis"===this.coll&&(n(a.linkedTo)&&!n(a.tickPixelInterval)&&(f.tickPixelInterval=350),n(a.tickPixelInterval)||!n(a.linkedTo)||n(a.tickPositioner)||n(a.tickInterval)||(f.tickPositioner=function(a,c){var b=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(b){var d,e=f.units;for(d=0;d<e.length;d++)if(e[d][0]===b.unitName){var h=d;break}if(e[h+
1]){var g=e[h+1][0];var k=(e[h+1][1]||[1])[0]}else"year"===b.unitName&&(g="year",k=10*b.count);b=D[g];this.tickInterval=b*k;return this.getTimeTicks({unitRange:b,count:k,unitName:g},a,c,this.options.startOfWeek)}}));u(!0,this.options,f);this.horiz&&(c.minPadding=w(a.minPadding,0),c.maxPadding=w(a.maxPadding,0));t(c.grid.borderWidth)&&(c.tickWidth=c.lineWidth=b.borderWidth)}};b.onAfterSetOptions2=function(a){a=(a=a.userOptions)&&a.grid||{};var c=a.columns;a.enabled&&c&&u(!0,this.options,c[c.length-
1])};b.onAfterSetScale=function(){(this.grid.columns||[]).forEach(function(a){a.setScale()})};b.onAfterTickSize=function(a){var c=e.defaultLeftAxisOptions,b=this.horiz,f=this.maxLabelDimensions,h=this.options.grid;h=void 0===h?{}:h;h.enabled&&f&&(c=2*Math.abs(c.labels.x),b=b?h.cellHeight||c+f.height:c+f.width,C(a.tickSize)?a.tickSize[0]=b:a.tickSize=[b,0])};b.onDestroy=function(a){var b=this.grid;(b.columns||[]).forEach(function(b){b.destroy(a.keepEvents)});b.columns=void 0};b.onInit=function(a){a=
a.userOptions||{};var b=a.grid||{};b.enabled&&n(b.borderColor)&&(a.tickColor=a.lineColor=b.borderColor);this.grid||(this.grid=new G(this))};b.onTrimTicks=function(){var a=this.options,b=this.categories,d=this.tickPositions,e=d[0],h=d[d.length-1],g=this.linkedParent&&this.linkedParent.min||this.min,k=this.linkedParent&&this.linkedParent.max||this.max,l=this.tickInterval;!0!==(a.grid||{}).enabled||b||!this.horiz&&!this.isLinked||(e<g&&e+l>g&&!a.startOnTick&&(d[0]=g),h>k&&h-l<k&&!a.endOnTick&&(d[d.length-
1]=k))};b.wrapUnsquish=function(a){var b=this.options.grid;return!0===(void 0===b?{}:b).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))};return b}();(function(b){b=b.Side||(b.Side={});b[b.top=0]="top";b[b.right=1]="right";b[b.bottom=2]="bottom";b[b.left=3]="left"})(v||(v={}));v.compose(e);return v});m(e,"masters/modules/grid-axis.src.js",[],function(){})});
