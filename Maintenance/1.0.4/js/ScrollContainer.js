var ScrollConatainerInit = (function () {
   var userContent = document.getElementById('ScrollContainer__userContent');
   var shadow_top = document.getElementById('ScrollContainer__shadow_top');
   var scrollbar = document.getElementById('ScrollContainer__scrollbar');
   var content = document.getElementById('ScrollContainer__content');
   var thumb = document.getElementById('ScrollContainer__thumb');
   var scrollbarAvailableHeight;
   var scrollbarHeight;
   var contentHeight;
   var thumbHeight;
   var scrollRatio;
   var topHeight;
   var position = 0;


   content.onscroll = function () {
      var pos = calcPosition(content.scrollTop, 0, topHeight) * scrollRatio;
      // в Edge плохо точностью, поэтому накидываем 5px чтобы наверняка
      // toggleBottomShadow(content.scrollHeight - content.scrollTop > content.clientHeight + 5)
      toggleTopShadow(Math.abs(pos) > 1);
      thumb.style['margin-top'] = thumb.style['marginTop'] = '' + pos + 'px';
   };

   scrollbar.onclick = dragThumb;

   thumb.onmousedown = function () {
      document.onmousemove = dragThumb;
   };

   document.onmouseup = function () {
      endDragging();
      document.onmousemove = null;
      thumb.onmouseup = null;
   };

   return function () {
      if (/Opera|Firefox|Trident/.test(navigator.userAgent)) { content.style['display'] = 'block'; }
      scrollbarAvailableHeight = scrollbar.clientHeight;
      scrollbarHeight = scrollbar.scrollHeight;
      contentHeight = content.scrollHeight;
      thumbHeight = calcThumbHeight(thumb, scrollbarAvailableHeight, calcViewportRatio(scrollbarHeight, contentHeight));
      scrollRatio = calcScrollRatio(scrollbarHeight, scrollbarAvailableHeight, thumbHeight, contentHeight);
      topHeight = (scrollbarAvailableHeight - thumbHeight) / scrollRatio;
      thumb.style['height'] = thumbHeight + 'px';
      toggleScrollBar(userContent.offsetHeight > scrollbarAvailableHeight);
      toggleTopShadow(content.scrollTop > 1);
      // toggleBottomShadow(userContent.offsetHeight > scrollbarAvailableHeight)
   };

   function dragThumb(e) {
      startDragging();
      var thumbTop = thumb.getBoundingClientRect().top;
      var delta = calcScrollbarDelta(thumbTop, e.pageY, thumbHeight);
      position += delta / scrollRatio;
      content.scrollTop = position;
   }

   function startDragging() {
      $.addClass(thumb, 'controls-VScrollbar__thumb_dragging', 'controls-VScrollbar__thumb_dragging_default');
      $.addClass($.removeClass(scrollbar, 'controls-Scroll__scrollbar_hidden'), 'controls-VScrollbar_dragging');
   }

   function endDragging() {
      $.addClass($.removeClass(scrollbar, 'controls-VScrollbar_dragging'), 'controls-Scroll__scrollbar_hidden');
      $.removeClass($.removeClass(thumb, 'controls-VScrollbar__thumb_dragging'), 'controls-VScrollbar__thumb_dragging_default');
      toggleTopShadow(content.scrollTop > 1);
   }

   function toggleTopShadow(show) {
      show ? $.removeClass(shadow_top, 'ws-invisible') : $.addClass(shadow_top, 'ws-invisible');
   }

   function toggleScrollBar(show) {
      show ? $.removeClass(scrollbar, 'ws-invisible') : $.addClass(scrollbar, 'ws-invisible');
   }
   /**
    * Посчитать позицию ползунка учитывая граници за которые он не может выйти.
    * @param {number} position позиция ползунка.
    * @param {number} bottom нижняя граница ползунка.
    * @param {number} top верхняя граница ползунка.
    * @return {number} позиция ползунка
    */
   function calcPosition(position, bottom, top) {
      return Math.min(Math.max(bottom, position), top);
   }

   /**
    * Посчитать отношение высот контейнера ползунка к контенту.
    * @param {number} scrollbarHeight высота контейнера ползунка.
    * @param {number} contentHeight высота контента.
    * @return {number} отношение высот контейнера ползунка к контенту.
    */
   function calcViewportRatio(scrollbarHeight, contentHeight) {
      return scrollbarHeight / contentHeight;
   }

   /**
    * Получить отношение высот отображения скрытого контента и самого скрытого контента.
    * @param {number} scrollbarHeight высота контейнера ползунка.
    * @param {number} scrollbarAvailableHeight высота контейнера по которому может перемещаться ползунок.
    * @param {number} thumbHeight высота ползунка.
    * @param {number} contentHeight высота контента.
    * @return {number} отношение высот отображения скрытого контента и самого скрытого контента.
    */
   function calcScrollRatio(scrollbarHeight, scrollbarAvailableHeight, thumbHeight, contentHeight) {
      /**
       * If the content size is equal to the scrollbar size, then scrollRatio is not defined.
       * Thats why, we consider it equal 1.
       */
      return (scrollbarAvailableHeight - thumbHeight) / (contentHeight - scrollbarHeight) || 1;
   }

   /**
    * Посчитать высоту ползунка.
    * @param thumb ползунок.
    * @param {number} scrollbarAvailableHeight высота контейнера по которому может перемещаться ползунок.
    * @param {number} viewportRatio отношение высот контейнера ползунка к контенту.
    * @return {number} высота ползунка.
    */
   function calcThumbHeight(thumb, scrollbarAvailableHeight, viewportRatio) {
      var thumbHeight = scrollbarAvailableHeight * viewportRatio;
      var style = (typeof getComputedStyle !== 'undefined') ? getComputedStyle(thumb) : thumb.style;
      var minHeight = parseFloat(style['min-height'] || style['minHeight']);
      return Math.max(minHeight, thumbHeight);
   }
   function calcScrollbarDelta(start, end, thumbHeight) {
      return end - start - thumbHeight / 2;
   }

}());