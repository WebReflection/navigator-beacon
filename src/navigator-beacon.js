navigator.sendBeacon = function (url, data) {
    var xhr = new XMLHttpRequest,
        contentType;
    xhr.open('POST', url, false);
    if (typeof data === 'string') {
        contentType = 'text/plain;charset=UTF-8';
        data = unescape(encodeURIComponent(data));
    } else if(data instanceof Node) {
        contentType = 'text/plain;charset=UTF-8';
        data = (data.documentElement || data).outerHTML;
    } else if(data.type) {
        contentType = data.type;
    } else {
        contentType = 'application/x-www-form-urlencoded';
    }
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(data);
    return 199 < xhr.status && xhr.status < 400;
};