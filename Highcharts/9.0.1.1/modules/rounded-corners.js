/*
 Highcharts plugin for creating individual rounded corners.

 Author: Torstein Honsi
 Version: 1.0.5
 License: MIT License
 */
(function(n){typeof module=="object"&&module.exports?(n["default"]=n,module.exports=n):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/9.0.1.1/highcharts.js"],function(z){n(z);n.Highcharts=z;return n}):n("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(n){var t=n.relativeLength;n.wrap(n.seriesTypes.column.prototype,"translate",function(n){var i=this.options,r=i.topMargin||0,u=i.bottomMargin||0;n.call(this);this.points.forEach(function(n){var y=n.shapeArgs,o=y.width,s=y.height,f=y.x,e=y.y,c=t(i.borderRadiusTopLeft||0,o),l=t(i.borderRadiusTopRight||0,o),a=t(i.borderRadiusBottomRight||0,o),v=t(i.borderRadiusBottomLeft||0,o),h;(c||l||a||v)&&(h=Math.min(o,s)/2,c>h&&(c=h),l>h&&(l=h),a>h&&(a=h),v>h&&(v=h),n.dlBox=n.shapeArgs,n.shapeType="path",n.shapeArgs={d:[["M",f+c,e+r],["L",f+o-l,e+r],["C",f+o-l/2,e,f+o,e+l/2,f+o,e+l],["L",f+o,e+s-a],["C",f+o,e+s-a/2,f+o-a/2,e+s,f+o-a,e+s+u],["L",f+v,e+s+u],["C",f+v/2,e+s,f,e+s-v/2,f,e+s-v],["L",f,e+c],["C",f,e+c/2,f+c/2,e,f+c,e],["Z"]]})})})});
