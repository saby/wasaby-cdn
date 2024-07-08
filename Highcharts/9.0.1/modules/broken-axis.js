/*
 Highcharts JS v9.0.1 (2021-02-15)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1/highcharts.js"],function(h){c(h);c.Highcharts=h;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function h(c,h,w,k){c.hasOwnProperty(h)||(c[h]=k.apply(null,w))}c=c?c._modules:{};h(c,"Core/Axis/BrokenAxis.js",[c["Core/Axis/Axis.js"],c["Core/Series/Series.js"],c["Extensions/Stacking.js"],c["Core/Utilities.js"]],
function(c,h,w,k){var r=k.addEvent,A=k.find,y=k.fireEvent,B=k.isArray,z=k.isNumber,t=k.pick,C=function(){function l(b){this.hasBreaks=!1;this.axis=b}l.isInBreak=function(b,e){var d=b.repeat||Infinity,a=b.from,f=b.to-b.from;e=e>=a?(e-a)%d:d-(a-e)%d;return b.inclusive?e<=f:e<f&&0!==e};l.lin2Val=function(b){var e=this.brokenAxis;e=e&&e.breakArray;if(!e)return b;var d;for(d=0;d<e.length;d++){var a=e[d];if(a.from>=b)break;else a.to<b?b+=a.len:l.isInBreak(a,b)&&(b+=a.len)}return b};l.val2Lin=function(b){var e=
this.brokenAxis;e=e&&e.breakArray;if(!e)return b;var d=b,a;for(a=0;a<e.length;a++){var f=e[a];if(f.to<=b)d-=f.len;else if(f.from>=b)break;else if(l.isInBreak(f,b)){d-=b-f.from;break}}return d};l.prototype.findBreakAt=function(b,e){return A(e,function(d){return d.from<b&&b<d.to})};l.prototype.isInAnyBreak=function(b,e){var d=this.axis,a=d.options.breaks,f=a&&a.length,u;if(f){for(;f--;)if(l.isInBreak(a[f],b)){var p=!0;u||(u=t(a[f].showPoints,!d.isXAxis))}var c=p&&e?p&&!u:p}return c};l.prototype.setBreaks=
function(b,e){var d=this,a=d.axis,f=B(b)&&!!b.length;a.isDirty=d.hasBreaks!==f;d.hasBreaks=f;a.options.breaks=a.userOptions.breaks=b;a.forceRedraw=!0;a.series.forEach(function(a){a.isDirty=!0});f||a.val2lin!==l.val2Lin||(delete a.val2lin,delete a.lin2val);f&&(a.userOptions.ordinal=!1,a.lin2val=l.lin2Val,a.val2lin=l.val2Lin,a.setExtremes=function(a,b,f,g,e){if(d.hasBreaks){for(var p,u=this.options.breaks;p=d.findBreakAt(a,u);)a=p.to;for(;p=d.findBreakAt(b,u);)b=p.from;b<a&&(b=a)}c.prototype.setExtremes.call(this,
a,b,f,g,e)},a.setAxisTranslation=function(){c.prototype.setAxisTranslation.call(this);d.unitLength=null;if(d.hasBreaks){var b=a.options.breaks||[],f=[],e=[],g=0,m,q=a.userMin||a.min,h=a.userMax||a.max,k=t(a.pointRangePadding,0),v;b.forEach(function(a){m=a.repeat||Infinity;l.isInBreak(a,q)&&(q+=a.to%m-q%m);l.isInBreak(a,h)&&(h-=h%m-a.from%m)});b.forEach(function(a){n=a.from;for(m=a.repeat||Infinity;n-m>q;)n-=m;for(;n<q;)n+=m;for(v=n;v<h;v+=m)f.push({value:v,move:"in"}),f.push({value:v+(a.to-a.from),
move:"out",size:a.breakSize})});f.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});var x=0;var n=q;f.forEach(function(a){x+="in"===a.move?1:-1;1===x&&"in"===a.move&&(n=a.value);0===x&&(e.push({from:n,to:a.value,len:a.value-n-(a.size||0)}),g+=a.value-n-(a.size||0))});a.breakArray=d.breakArray=e;d.unitLength=h-q-g+k;y(a,"afterBreaks");a.staticScale?a.transA=a.staticScale:d.unitLength&&(a.transA*=(h-a.min+k)/d.unitLength);k&&(a.minPixelPadding=a.transA*
a.minPointOffset);a.min=q;a.max=h}});t(e,!0)&&a.chart.redraw()};return l}();k=function(){function c(){}c.compose=function(b,e){b.keepProps.push("brokenAxis");var d=h.prototype;d.drawBreaks=function(a,b){var f=this,e=f.points,d,g,c,h;if(a&&a.brokenAxis&&a.brokenAxis.hasBreaks){var k=a.brokenAxis;b.forEach(function(b){d=k&&k.breakArray||[];g=a.isXAxis?a.min:t(f.options.threshold,a.min);e.forEach(function(f){h=t(f["stack"+b.toUpperCase()],f[b]);d.forEach(function(b){if(z(g)&&z(h)){c=!1;if(g<b.from&&
h>b.to||g>b.from&&h<b.from)c="pointBreak";else if(g<b.from&&h>b.from&&h<b.to||g>b.from&&h>b.to&&h<b.from)c="pointInBreak";c&&y(a,c,{point:f,brk:b})}})})})}};d.gappedPath=function(){var a=this.currentDataGrouping,b=a&&a.gapSize;a=this.options.gapSize;var e=this.points.slice(),d=e.length-1,c=this.yAxis,g;if(a&&0<d)for("value"!==this.options.gapUnit&&(a*=this.basePointRange),b&&b>a&&b>=this.basePointRange&&(a=b),g=void 0;d--;)g&&!1!==g.visible||(g=e[d+1]),b=e[d],!1!==g.visible&&!1!==b.visible&&(g.x-
b.x>a&&(g=(b.x+g.x)/2,e.splice(d+1,0,{isNull:!0,x:g}),c.stacking&&this.options.stacking&&(g=c.stacking.stacks[this.stackKey][g]=new w(c,c.options.stackLabels,!1,g,this.stack),g.total=0)),g=b);return this.getGraphPath(e)};r(b,"init",function(){this.brokenAxis||(this.brokenAxis=new C(this))});r(b,"afterInit",function(){"undefined"!==typeof this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)});r(b,"afterSetTickPositions",function(){var a=this.brokenAxis;if(a&&a.hasBreaks){var b=this.tickPositions,
e=this.tickPositions.info,d=[],c;for(c=0;c<b.length;c++)a.isInAnyBreak(b[c])||d.push(b[c]);this.tickPositions=d;this.tickPositions.info=e}});r(b,"afterSetOptions",function(){this.brokenAxis&&this.brokenAxis.hasBreaks&&(this.options.ordinal=!1)});r(e,"afterGeneratePoints",function(){var a=this.options.connectNulls,b=this.points,c=this.xAxis,d=this.yAxis;if(this.isDirty)for(var e=b.length;e--;){var g=b[e],h=!(null===g.y&&!1===a)&&(c&&c.brokenAxis&&c.brokenAxis.isInAnyBreak(g.x,!0)||d&&d.brokenAxis&&
d.brokenAxis.isInAnyBreak(g.y,!0));g.visible=h?!1:!1!==g.options.visible}});r(e,"afterRender",function(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,t(this.pointArrayMap,["y"]))})};return c}();k.compose(c,h);return k});h(c,"masters/modules/broken-axis.src.js",[],function(){})});