(function() {
   var scrollContent = document.querySelector('.ScrollContainer__content-scroll');
   var shadow_top = document.querySelector('.ScrollContainer__shadow_top');
   var shadow_bottom = document.querySelector('.ScrollContainer__shadow_bottom');

   scrollContent.onscroll = function() {
      var showTopShadow = scrollContent.scrollTop !== 0;
      var showBottomShadow = (scrollContent.scrollTop + scrollContent.getBoundingClientRect().height) !== scrollContent.scrollHeight;
      toggleTopShadow(showTopShadow);
      toggleBottomShadow(showBottomShadow);
   }

   function toggleTopShadow(show) {
      shadow_top.style.visibility = show ? 'visible' : 'hidden';
   }

   function toggleBottomShadow(show) {
      shadow_bottom.style.visibility = show ? 'visible' : 'hidden';
   }
})()
