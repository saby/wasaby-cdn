/**
     * Проверяет параметр ret в адресной строке
     * Если параметр валидная ссылка и ведет на наш сайт, 
     * то происходит переход при включении пользователем js
     */
function getRedirectUrl(urlString, retPrefix) {
    function removeURLParameter(url, parameter) {
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {

            var prefix = encodeURIComponent(parameter) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            for (var i = pars.length; i-- > 0;) {
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
        }
        return url;
    }

    function getSecondLevel(domain) {
        return domain.split('.').splice(-2).join('.');
    }
    /**
     * Валидными считаются только абсолютные адреса
     * @param {string} link 
     */
    function isValidLink(link) {
        var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        return reg.test(link);
    }
    var locationHost;
    if (isValidLink(urlString)) {
        var link = document.createElement('a');
        link.href = urlString;
        locationHost = getSecondLevel(link.hostname)
        var returnLink = urlString.indexOf(retPrefix) !== -1 ? urlString.split(retPrefix).pop() : '';
        var validLink = getSecondLevel(locationHost);
        if (returnLink !== '') {
            if (isValidLink(returnLink)) {
                var link = document.createElement('a');
                link.href = returnLink;
                var retLink = getSecondLevel(link.hostname)
            }
        }
        returnLink = validLink === retLink ? returnLink : removeURLParameter(urlString, 'ret');
    }
    return returnLink;
}
