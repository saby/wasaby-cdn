/*
 Highcharts JS v8.0.4 (2020-03-10)

 Highcharts 3D funnel module

 (c) 2010-2019 Kacper Madej

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/8.0.4/highcharts.js","/cdn/Highcharts/8.0.4/highcharts-3d.js","/cdn/Highcharts/8.0.4/modules/cylinder.js","/cdn/Highcharts/8.0.4/modules/funnel3d.js"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,c,d){a.hasOwnProperty(b)||(a[b]=d.apply(null,c))}a=a?a._modules:{};b(a,"modules/pyramid3d.src.js",[a["parts/Utilities.js"]],
function(a){a=a.seriesType;a("pyramid3d","funnel3d",{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}});""});b(a,"masters/modules/pyramid3d.src.js",[],function(){})});
