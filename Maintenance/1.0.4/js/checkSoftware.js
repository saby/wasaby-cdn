/* eslint-disable no-unused-vars */
/*global OS, Browser */
(function () {
   var GET_params = window.location.href.split('?').pop().split('&');
   for (var i = 0; i < GET_params.length; i++) {
      var param = GET_params[i].split('=');
      /**
       * При GET-параметре nocheck=1 не проверяем software
       * см. https://online.sbis.ru/opendoc.html?guid=6525b59d-4f6e-45fb-b8d0-11a370262dd8
       */
      if (param.shift() == 'nocheck' && param.pop() === '1') {
         return;
      }
   }
   checkSoftware();

   /** Проверка ос и браузер */
   function checkSoftware() {
      var userAgent = window.navigator.userAgent;
      var userOs = OS.detect(userAgent);
      var userBrowser = Browser.detect(userAgent);
      if (!userOs.isAvailable || !userBrowser.isAvailable) {
         redirect();
      }
   }
   /** Redirect на страницу диагностики */
   function redirect() {
      var RETURN_LINK_PREFIX = '?ret=';
      var DIAGNOSTIC_PAGE = '/cdn/Maintenance/1.0.6/html/diagnostic.html';
      var returnLink = window.location.href.split(window.location.host).pop();
      window.location.href = window.location.protocol + '//' + window.location.host + DIAGNOSTIC_PAGE + RETURN_LINK_PREFIX + returnLink;
   }
}());