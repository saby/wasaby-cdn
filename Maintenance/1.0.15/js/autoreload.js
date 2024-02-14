function autoReload(minTimeout, maxTimeout) {
   if (typeof window === 'undefined') {
      return;
   }

   window.onload = function onWindowLoaded() {
      var MINUTES = 60000;
      var start = Date.now();
      var reloadTimeout = minTimeout * MINUTES + Math.round(Math.random() * (maxTimeout - minTimeout) * MINUTES);
      var reloadTime = start + reloadTimeout;
      var reloaded = false;

      function reload() {
         if (!reloaded) {
            reloaded = true;
            window.location.reload();
         }
      }

      setTimeout(reload, reloadTimeout);

      setInterval(function onTick() {
         if (!document.hidden && Date.now() >= reloadTime) {
            reload();
         }
      }, 1260);

      document.addEventListener('visibilitychange', function onVisibilityChange() {
         if (!document.hidden && Date.now() - start > minTimeout * MINUTES) {
            reload();
         }
      }, false);
   };
}
