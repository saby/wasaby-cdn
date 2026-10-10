/* eslint-disable no-unused-vars */
/*global $, OS, Browser, rk */
var DiagnosticInit = (function () {
   var DELAY = 1000;
   var BROWSER_DOWNLOAD_LINKS = {
      // скачиваемые дистры
      'Chrome': 'https://www.google.com/chrome/',
      'Яндекс Браузер': 'https://browser.yandex.ru/download',
      //  внешние страницы загрузки
      'Firefox': 'https://www.mozilla.org/firefox/download/thanks/',
      'Opera': 'https://www.opera.com/browsers',
      'OperaChrome': 'https://www.opera.com/browsers',
      'Safari': 'https://support.apple.com//102665',
      'Safari Mobile': 'https://support.apple.com/102665',
      'Edge': 'https://www.microsoft.com/edge/download',
      'Microsoft Edge': 'https://www.microsoft.com/edge/download'
   };

   return function (os, browser) {

      langSelectorInit(displayWarning);

      function displayWarning() {
         setLogo();
         setHeader('Диагностика рабочего места');
         setSubHeader('Браузер не удовлетворяет требованиям');

         if (!browser.isAvailable) {
            oldWindowsBrowser(browser);
            return;
         }

         if (!os.isAvailable) {
            oldOS(os);
            return;
         }

         if (IsBrowserExpire(browser)) {
            browserOk(browser);
            return;
         }
         AllOk(browser, os);

      }
   }
      ;

   function AllOk(browser, os) {
      setSubHeader('Браузер и система удовлетворяют требованиям');
      setTitleIcon('ok');
      setMessage([p(['Браузер: ', browser.name, ' ' + browser.version]), p(['Операционная система: ', os.name, ' ' + os.version])]);

   }

   function IsBrowserExpire(browser) {
      return browser.isAvailable && browser.expryDate;
   }

   function browserOk(browser) {
      if (browser.isAvailable) {
         setSubHeader('Браузер удовлетворяет требованиям');
         setTitleIcon(browser.expryDate ? 'expire' : 'ok');
         if (browser.expryDate) {
            setMessage([p(['C ', getDate(browser.expryDate), ' приложения Saby не будут поддерживать ', browser.name, ' версии ', '' + browser.version, '.']), p(['Пожалуйста, ', $.createLink({
               caption: 'обновите',
               href: BROWSER_DOWNLOAD_LINKS[browser.name]
            }), ' его до последней версии или установите любой из списка:'])]);
            setAction([creteDownloadList()]);
         }
      }
   }

   function oldOS(os) {
      setSubHeader('Система не удовлетворяет требованиям');
      setMessage([p(['Ваша операционная система ', os.name, ' версии ', '' + os.version, ' больше не поддерживается.']), p(['Пожалуйста, обновите операционную систему.'])]);
      setAction([$.createLink({
         caption: 'Технические требования к рабочему месту',
         href: 'https://saby.ru/help/start/teh_terms'
      })]);
   }
   function oldMobileOS(os) {
      setMessage([p([os.name, ' версии ', '' + os.version, ' не поддерживается!']), p(['Пожалуйста, обновите его в настройках устройства или перейдите на другую операционную систему.'])]);
      setAction([$.createLink({
         caption: 'Технические требования к рабочему месту',
         href: 'https://saby.ru/help/start/teh_terms'
      })]);
      showTopTooltip(['Обновите браузер с помощью функции "Справка" - "О браузере"']);
   }

   function compatibleMode() {
      setMessage([p(['У вас работает режим совместимости!']), p(['Пожалуйста, откройте среду разработчика с помощью клавиши F12 и на вкладке "Эмуляция" выберите режим документов "По умолчанию".'])]);
      setAction([$.createLink({
         caption: 'Подробнее',
         href: 'https://saby.ru/help/start/teh_terms'
      })]);
   }
   function oldWindowsBrowser(browser) {
      setMessage([p(['У вас обнаружен устаревший браузер ', browser.name, ' версии ', '' + browser.version, '.']), p(['Пожалуйста, ', $.createLink({
         caption: 'обновите',
         href: BROWSER_DOWNLOAD_LINKS[browser.name]
      }), ' его до последней версии или установите любой из списка:'])]);
      creteDownloadList();

      setAction([creteDownloadList(), $.createEl('p', {
         class: 'controls-fontsize-xl_theme-default  controls-text-unaccented_theme-default'
      }, ['При использовании других браузеров или их более ранних версий доступ к некоторым возможностям системы может быть ограничен.'])]);
   }
   function oldLinuxMacBrowser(browser) {
      setMessage([p(['У вас обнаружен устаревший браузер ', browser.name, ' версии ', '' + browser.version, '!']), p(['Пожалуйста, обновитесь до последней версии, выбрав "Справка" - "О браузере" или ', $.createLink({
         caption: 'скачав дистрибутив',
         href: BROWSER_DOWNLOAD_LINKS[browser.name]
      }), ' с сайта разработчика'])]);
      showTopTooltip(['Обновите браузер с помощью функции "Справка" - "О браузере"']);
   }
   function notSupportedWinBrowser(name) {
      setMessage([p(['Ваш браузер ', name, ' больше не поддерживается.']), p(['Пожалуйста, используйте браузер Google Chrome.'])]);
      setAction([$.createButton({
         caption: 'Скачать',
         href: BROWSER_DOWNLOAD_LINKS.Chrome,
         onclick: function () {
            showBottomTooltip(['Запустите и установите Google Chrome']);
         }
      })]);
   }

   function creteDownloadList() {
      return ul([li([$.createLink({
         caption: 'Yandex Browser',
         href: 'https://browser.yandex.ru/download'
      }), $.createEl('div', {
         class: 'controls-fontsize-l_theme-default controls-text-label_theme-default'
      }, ['рекомендуем как наиболее быстрый и стабильный браузер'])], {}), li([$.createLink({
         caption: 'Google Chrome',
         href: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8BA36547-2493-FDAF-65E8-98DEE3C415AA%7D%26lang%3Dru%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe'
      })], {
         class: 'controls-inlineheight-xl_theme-default SbisEnv-Parking__lineHeight_xl'
      }), li([$.createLink({
         caption: 'Safari (Только для устройств семейства Apple)',
         href: 'https://support.apple.com/102665'
      })], {
         class: 'controls-inlineheight-xl_theme-default SbisEnv-Parking__lineHeight_xl'
      }), li([$.createLink({
         caption: 'Mozilla Firefox',
         href: 'https://www.mozilla.org/ru/firefox/download/thanks/'
      })], {
         class: 'controls-inlineheight-xl_theme-default SbisEnv-Parking__lineHeight_xl'
      }), li([$.createLink({
         caption: 'Opera',
         href: 'https://www.opera.com/browsers'
      })], {
         class: 'controls-inlineheight-xl_theme-default SbisEnv-Parking__lineHeight_xl'
      }), li([$.createLink({
         caption: 'Microsoft Edge',
         href: 'https://www.microsoft.com/edge/download'
      })], {
         class: 'controls-inlineheight-xl_theme-default SbisEnv-Parking__lineHeight_xl'
      }),])
   }
   function setTitleIcon(type) {
      var iconEl = document.getElementById('Diagnostics__content-subheader_icon');
      var res = 'controls-Button__icon controls-icon icon-small controls-icon_size-s_theme-default';
      switch (type) {
         case 'danger':
            res += ' icon-Decline controls-icon_style-danger_theme-default'
            break;
         case 'expire':
            res += ' icon-Yes controls-icon_style-warning_theme-default'
            break;
         case 'ok':
            res += ' icon-Yes controls-icon_style-success_theme-default'
            break;
      }
      iconEl.className = res;

   }
   function setLogo() {
      var logoEl = document.getElementById('SbisEnv-ParkingPage__Header-logo');
      logoEl.setAttribute('src', '/cdn/SabyLogo/1.0.8/logo/saby/default/logo.svg');
   }
   /**
   * @param {String} header
   * @void
   */
   function setHeader(header) {
      var headerEl = document.getElementById('Diagnostics__content-header');
      headerEl.lastChild && headerEl.removeChild(headerEl.lastChild);
      headerEl.appendChild($.createEl('span', {}, [header]));
   }
   /**
   * @param {String} subheader
   * @void
   */
   function setSubHeader(subheader) {
      var subheaderEl = document.getElementById('Diagnostics__content-subheadern__wrapper');
      subheaderEl.lastChild && subheaderEl.removeChild(subheaderEl.lastChild);
      subheaderEl.appendChild($.createEl('span', {
         className: 'controls-BaseButton__text controls-text-link_theme-default controls-Button__text_gap_theme-default controls-Button__text_viewMode-link_theme-default'
      }, [subheader]));
   }
   /**
   * @param {HTMLElement[]} message
   * @void
   */
   function setMessage(message) {
      var messageEl = document.getElementById('Diagnostics__content-message');
      while (messageEl.lastChild) {
         messageEl.removeChild(messageEl.lastChild);
      }
      for (var el in message) {
         messageEl.appendChild(message[el]);
      }
   }
   /**
   * @param {HTMLElement[]} actions
   * @void
   */
   function setAction(actions) {
      var actionEl = document.getElementById('Diagnostics__content-action');
      while (actionEl.lastChild) {
         actionEl.removeChild(actionEl.lastChild);
      }
      for (var el in actions) {
         actionEl.appendChild(actions[el]);
      }
   }
   function langSelectorInit(callback) {
      var langSelectorEl = document.getElementById('langSelector');
      var langItem = document.getElementById('langSelector-langItem');
      var flagItem = document.getElementById('langSelector-flagItem');

      selectLang($.lang);

      $.addEvent(langSelectorEl, 'click', function () {
         var targetLang = ($.lang === 'en-US') ? 'ru-RU' : 'en-US';
         $.removeClass(flagItem, 'langSelector-flagItem-' + $.lang);
         $.lang = targetLang;
         document.cookie = 'lang=' + targetLang;
         selectLang(targetLang);
      });

      function selectLang(lang) {
         langItem.innerHTML = lang.split('-').pop();
         $.addClass(flagItem, 'langSelector-flagItem-' + lang);
         callback();
      }
   }

   /**
   * @param {String} content
   * @returns {HTMLElement}
   */
   function p(content) {
      return $.createEl('p', {}, content);
   }

   function ul(content) {
      return $.createEl('ul', {}, content);
   }

   function li(content, attrs) {
      return $.createEl('li', attrs, content);
   }

   function showTopTooltip(captions) {
      _showTooltip('top', captions);
   }
   function showBottomTooltip(captions) {
      _showTooltip('bottom', captions);
   }
   function _showTooltip(prefix, captions) {
      var captionEl = document.getElementById(prefix + 'TooltipMessage');
      var html = '';
      for (var caption in captions) {
         html += rk($.lang, captions[caption]);
      }
      captionEl.innerHTML = html;

      var tooltipEl = document.getElementById(prefix + 'Tooltip');
      var closeEl = document.getElementById('close' + prefix + 'Tooltip');

      $.addEvent(closeEl, 'click', function () {
         $.addClass(tooltipEl, 'ws-hidden');
      });
      setTimeout(function () {
         $.removeClass(tooltipEl, 'ws-hidden');
      }, DELAY);
   }

   function getDate(date) {
      var monthsGenitive = [
         'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
         'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];

      var formattedDate = `${date.getDate()} ${monthsGenitive[date.getMonth()]} ${date.getFullYear()}`;
      return formattedDate
   }
}());
