/*
 Highcharts JS v11.1.0 (2023-06-05)
 Organization chart series type

 (c) 2019-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/organization",["highcharts","highcharts/modules/sankey"],function(k){c(k);c.Highcharts=k;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function k(c,b,a,l){c.hasOwnProperty(b)||(c[b]=l.apply(null,a),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,
module:c[b]}})))}c=c?c._modules:{};k(c,"Series/Organization/OrganizationPoint.js",[c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(c,b){function a(b){var d=b.linksFrom.length;b.linksFrom.forEach(function(b){b.id===b.toNode.linksTo[0].id?d+=a(b.toNode):d--});return d}var l=this&&this.__extends||function(){var b=function(a,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)Object.prototype.hasOwnProperty.call(a,
d)&&(b[d]=a[d])};return b(a,d)};return function(a,d){function f(){this.constructor=a}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");b(a,d);a.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),e=c.seriesTypes.sankey.prototype.pointClass,d=b.defined,g=b.find,f=b.pick;return function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.fromNode=void 0;a.linksFrom=void 0;a.linksTo=void 0;a.options=
void 0;a.series=void 0;a.toNode=void 0;return a}l(c,b);c.prototype.init=function(){e.prototype.init.apply(this,arguments);this.isNode||(this.dataLabelOnNull=!0,this.formatPrefix="link");return this};c.prototype.getSum=function(){return 1};c.prototype.setNodeColumn=function(){b.prototype.setNodeColumn.call(this);var c=this,l=c.getFromNode().fromNode;if(!d(c.options.column)&&0!==c.linksTo.length&&l&&"hanging"===l.options.layout){c.options.layout=f(c.options.layout,"hanging");c.hangsFrom=l;var e=-1;
g(l.linksFrom,function(b,a){(b=b.toNode===c)&&(e=a);return b});for(var h=0;h<l.linksFrom.length;h++){var m=l.linksFrom[h];m.toNode.id===c.id?h=l.linksFrom.length:e+=a(m.toNode)}c.column=(c.column||0)+e}};return c}(e)});k(c,"Series/Organization/OrganizationSeriesDefaults.js",[],function(){"";return{borderColor:"#666666",borderRadius:3,link:{color:"#666666",lineWidth:1,radius:10,type:"default"},borderWidth:1,dataLabels:{nodeFormatter:function(){function c(b){return Object.keys(b).reduce(function(a,
d){return a+d+":"+b[d]+";"},'style="')+'"'}var b={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},a={"max-height":"100%","border-radius":"50%"},l={width:"100%",padding:0,"text-align":"center","white-space":"normal"},e={margin:0},d={margin:0},g={opacity:.75,margin:"5px"},f=this.point,h=f.description,p=f.image;f=f.title;p&&(a["max-width"]="30%",l.width="70%");this.series.chart.renderer.forExport&&(b.display="block",l.position="absolute",
l.left=p?"30%":0,l.top=0);b="<div "+c(b)+">";p&&(b+='<img src="'+p+'" '+c(a)+">");b+="<div "+c(l)+">";this.point.name&&(b+="<h4 "+c(e)+">"+this.point.name+"</h4>");f&&(b+="<p "+c(d)+">"+(f||"")+"</p>");h&&(b+="<p "+c(g)+">"+h+"</p>");return b+"</div></div>"},style:{fontWeight:"normal",fontSize:"0.9em"},useHTML:!0,linkTextPath:{attributes:{startOffset:"95%",textAnchor:"end"}}},hangingIndent:20,hangingIndentTranslation:"inherit",minNodeLength:10,nodeWidth:50,tooltip:{nodeFormat:"{point.name}<br>{point.title}<br>{point.description}"}}});
k(c,"Series/PathUtilities.js",[],function(){function c(b,a){for(var c=[],e=0;e<b.length;e++){var d=b[e][1],g=b[e][2];if("number"===typeof d&&"number"===typeof g)if(0===e)c.push(["M",d,g]);else if(e===b.length-1)c.push(["L",d,g]);else if(a){var f=b[e-1],h=b[e+1];if(f&&h){var p=f[1];f=f[2];var k=h[1];h=h[2];if("number"===typeof p&&"number"===typeof k&&"number"===typeof f&&"number"===typeof h&&p!==k&&f!==h){var q=p<k?1:-1,x=f<h?1:-1;c.push(["L",d-q*Math.min(Math.abs(d-p),a),g-x*Math.min(Math.abs(g-f),
a)],["C",d,g,d,g,d+q*Math.min(Math.abs(d-k),a),g+x*Math.min(Math.abs(g-h),a)])}}}else c.push(["L",d,g])}return c}return{applyRadius:c,getLinkPath:{"default":function(b){var a=b.x1,l=b.y1,e=b.x2,d=b.y2,g=b.width;g=void 0===g?0:g;var f=b.inverted;f=void 0===f?!1:f;var h=b.radius,k=[["M",a,l],["L",a,l],["C",a,l,a,d,a,d],["L",a,d],["C",a,l,a,d,a,d],["L",a,d]];return b.parentVisible?c([["M",a,l],["L",a+g*(f?-.5:.5),l],["L",a+g*(f?-.5:.5),d],["L",e,d]],h):k},straight:function(b){var a=b.x1,c=b.y1,e=b.x2,
d=b.y2,g=b.width,f=b.inverted;return b.parentVisible?[["M",a,c],["L",a+(void 0===g?0:g)*((void 0===f?0:f)?-1:1),d],["L",e,d]]:[["M",a,c],["L",a,d],["L",a,d]]},curved:function(b){var a=b.x1,c=b.y1,e=b.x2,d=b.y2,g=b.offset;g=void 0===g?0:g;var f=b.width;f=void 0===f?0:f;var h=b.inverted;h=void 0===h?!1:h;return b.parentVisible?[["M",a,c],["C",a+g,c,a-g+f*(h?-1:1),d,a+f*(h?-1:1),d],["L",e,d]]:[["M",a,c],["C",a,c,a,d,a,d],["L",e,d]]}}}});k(c,"Series/Organization/OrganizationSeries.js",[c["Series/Organization/OrganizationPoint.js"],
c["Series/Organization/OrganizationSeriesDefaults.js"],c["Core/Series/SeriesRegistry.js"],c["Series/PathUtilities.js"],c["Core/Utilities.js"]],function(c,b,a,l,e){var d=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,c){b.__proto__=c}||function(b,c){for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(b[a]=c[a])};return b(c,a)};return function(c,a){function d(){this.constructor=c}if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+
String(a)+" is not a constructor or null");b(c,a);c.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),g=a.seriesTypes.sankey,f=e.css,h=e.extend,k=e.isNumber,w=e.merge,q=e.pick;e=function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}d(a,c);a.prototype.alignDataLabel=function(a,b,d){var m=a.shapeArgs;if(d.useHTML&&m){var n=m.width||0,e=m.height||0,g=this.options.borderWidth+2*this.options.dataLabels.padding;
this.chart.inverted&&(n=e,e=m.width||0);e-=g;n-=g;if(m=b.text)f(m.element.parentNode,{width:n+"px",height:e+"px"}),f(m.element,{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"});b.getBBox=function(){return{width:n,height:e,x:0,y:0}};b.width=n;b.height=e}c.prototype.alignDataLabel.apply(this,arguments)};a.prototype.createNode=function(a){a=c.prototype.createNode.call(this,a);a.getSum=function(){return 1};return a};a.prototype.pointAttribs=function(a,b){var c=g.prototype.pointAttribs.call(this,
a,b),d=this.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},n=a.options,e=d.states&&d.states[b]||{};b=q(e.borderRadius,n.borderRadius,d.borderRadius,this.options.borderRadius);var f=q(e.linkColor,n.linkColor,d.linkColor,this.options.linkColor,e.link&&e.link.color,n.link&&n.link.color,d.link&&d.link.color,this.options.link&&this.options.link.color),m=q(e.linkLineWidth,n.linkLineWidth,d.linkLineWidth,this.options.linkLineWidth,e.link&&e.link.lineWidth,n.link&&n.link.lineWidth,d.link&&
d.link.lineWidth,this.options.link&&this.options.link.lineWidth);d=q(e.linkOpacity,n.linkOpacity,d.linkOpacity,this.options.linkOpacity,e.link&&e.link.linkOpacity,n.link&&n.link.linkOpacity,d.link&&d.link.linkOpacity,this.options.link&&this.options.link.linkOpacity);a.isNode?k(b)&&(c.r=b):(c.stroke=f,c["stroke-width"]=m,c.opacity=d,delete c.fill);return c};a.prototype.translateLink=function(a){var b=a.fromNode,c=a.toNode,d=q(this.options.linkLineWidth,this.options.link.lineWidth),e=Math.round(d)%
2/2,f=q(this.options.link.offset,.5),g=q(a.options.link&&a.options.link.type,this.options.link.type);if(b.shapeArgs&&c.shapeArgs){var h=Math.floor((b.shapeArgs.x||0)+(b.shapeArgs.width||0))+e,m=Math.floor((b.shapeArgs.y||0)+(b.shapeArgs.height||0)/2)+e,k=Math.floor(c.shapeArgs.x||0)+e,r=Math.floor((c.shapeArgs.y||0)+(c.shapeArgs.height||0)/2)+e,p=this.options.hangingIndent;var t=c.options.offset;var u=/%$/.test(t)&&parseInt(t,10),v=this.chart.inverted;v&&(h-=b.shapeArgs.width||0,k+=c.shapeArgs.width||
0);t=this.colDistance?Math.floor(k+(v?1:-1)*(this.colDistance-this.nodeWidth)/2)+e:Math.floor((k+h)/2)+e;u&&(50<=u||-50>=u)&&(t=k=Math.floor(k+(v?-.5:.5)*(c.shapeArgs.width||0))+e,r=c.shapeArgs.y||0,0<u&&(r+=c.shapeArgs.height||0));c.hangsFrom===b&&(this.chart.inverted?(m=Math.floor((b.shapeArgs.y||0)+(b.shapeArgs.height||0)-p/2)+e,r=(c.shapeArgs.y||0)+(c.shapeArgs.height||0)):m=Math.floor((b.shapeArgs.y||0)+p/2)+e,t=k=Math.floor((c.shapeArgs.x||0)+(c.shapeArgs.width||0)/2)+e);a.plotX=t;a.plotY=(m+
r)/2;a.shapeType="path";"straight"===g?a.shapeArgs={d:[["M",h,m],["L",k,r]]}:"curved"===g?(b=Math.abs(k-h)*f*(v?-1:1),a.shapeArgs={d:[["M",h,m],["C",h+b,m,k-b,r,k,r]]}):a.shapeArgs={d:l.applyRadius([["M",h,m],["L",t,m],["L",t,r],["L",k,r]],q(this.options.linkRadius,this.options.link.radius))};a.dlBox={x:(h+k)/2,y:(m+r)/2,height:d,width:0}}};a.prototype.translateNode=function(a,c){g.prototype.translateNode.call(this,a,c);c=a.hangsFrom;var b=this.options.hangingIndent||0,d=this.chart.inverted?-1:1,
e=a.shapeArgs,f=this.options.hangingIndentTranslation,h=this.options.minNodeLength||10;if(c)if("cumulative"===f)for(e.height-=b,e.y-=d*b;c;)e.y+=d*b,c=c.hangsFrom;else if("shrink"===f)for(;c&&e.height>b+h;)e.height-=b,c=c.hangsFrom;else e.height-=b,this.chart.inverted||(e.y+=b);a.nodeHeight=this.chart.inverted?e.width:e.height};a.prototype.drawDataLabels=function(){var a=this.options.dataLabels;if(a.linkTextPath&&a.linkTextPath.enabled){a=0;for(var b=this.points;a<b.length;a++){var d=b[a];d.options.dataLabels=
w(d.options.dataLabels,{useHTML:!1})}}c.prototype.drawDataLabels.call(this)};a.defaultOptions=w(g.defaultOptions,b);return a}(g);h(e.prototype,{pointClass:c});a.registerSeriesType("organization",e);"";return e});k(c,"masters/modules/organization.src.js",[],function(){})});
//# sourceMappingURL=organization.js.map