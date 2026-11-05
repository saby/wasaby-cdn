/* eslint-disable no-unused-vars */
var rk = (function () {
   var dict = {
      'Ваша операционная система ': 'Your operating system ',
      'Ваш браузер ': 'Your browser ',
      ' версии ': ' version ',
      ' больше не поддерживается.': ' is no longer supported.',
      'Пожалуйста, обновите операционную систему.': 'Please update the operating system.',
      ' не поддерживается!': ' is not supported!',
      'Пожалуйста, обновите его в настройках устройства или перейдите на другую операционную систему.': 'Please update it in the device settings or change the operating system.',
      'Технические требования к рабочему месту': 'Workplace specification',
      'XP и Vista не поддерживаются компанией Microsoft.': 'XP and Vista are not supported by Microsoft Company.',
      'Пожалуйста, обновите вашу операционную систему или установите Яндекс Браузер.': 'Please update your operating system or install Yandex Browser.',
      'Запустите мастер установки Yandex Browser и следуйте подсказкам': 'Please run the Yandex Browser setup wizard and follow the prompt',
      'Запустите и установите ': 'Please run and install ',
      'Пожалуйста, обновите его до последней версии.': 'Please update it to the latest version',
      'У вас обнаружен устаревший браузер ': 'You have an outdated browser ',
      'Пожалуйста, обновитесь до последней версии, выбрав "Справка" - "О браузере" или ': 'Please use "Help" - "Browser Info" or ',
      'скачав дистрибутив': 'download distribution',
      ' с сайта разработчика': ' from the developer’s website to update to the latest version',
      'Обновите браузер с помощью функции "Справка" - "О браузере"': 'Use "Help" - "Browser Info" to update your browser',
      'Скачать': 'Download',
      'Браузер не удовлетворяет требованиям': 'The browser does not meet the requirements',
      'Диагностика рабочего места': 'Workplace diagnostics',
      'Установить': 'Install',
      'У вас работает режим совместимости!': 'Compatibility mode is enabled!',
      'Пожалуйста, откройте среду разработчика с помощью клавиши F12 и на вкладке "Эмуляция" выберите режим документов "По умолчанию".': 'Please open the developer environment with the help of F12 key and select the "By Default" document mode on the "Emulation" tab.',
      'Подробнее': 'More',
      'Пожалуйста, используйте браузер Google Chrome.': 'Please use Google Chrome browser.',
      'Safari (Только для операционной системы MacOS)': 'Safari (Only for MacOS)',
      'Safari (Только для устройств семейства Apple)': 'Safari (for Apple devices only)',
      'Пожалуйста, установите любой браузер из списка.': 'Please install any browser from the list.',
      'Браузер Internet Explorer больше не поддерживается.': 'The Internet Explorer browser is no longer supported.',
      'рекомендуем как наиболее быстрый и стабильный браузер': 'recommended as the fastest and most stable browser',
      'При использовании других браузеров или их более ранних версий доступ к некоторым возможностям системы может быть ограничен.': 'When using other browsers or their earlier versions, access to some system features may be limited.',
      'C ': 'Starting from ',
      'приложения Saby не будут поддерживать ': 'Saby applications will stop supporting ',
      'Пожалуйста, ': 'Please,  ',
      'обновите': 'update',
      ' его до последней версии или установите любой из списка:': ' to the latest version or install one of the browsers from the list below',
      'Браузер удовлетворяет требованиям': 'The browser complies with the requirements.',
      'Система не удовлетворяет требованиям': 'The system does not comply with the requirements.',
   };
   return function (lang, phrase) {
      if (!dict.hasOwnProperty(phrase) || lang !== 'en-US') {
         return phrase;
      }
      return dict[phrase];
   };
}());
