"use strict";
var Q = require('q');
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.makeCall = function (options) {
        var xhr = new XMLHttpRequest();
        var deferred = Q.defer();
        Object.keys(options.headers || {}).forEach(function (key) {
            xhr.setRequestHeader(key, options.headers[key]);
        });
        xhr.open(options.method || 'GET', options.url, true);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState !== 4)
                return;
            if ([200, 304].indexOf(xhr.status) === -1) {
                deferred.reject(new Error('Server responded with a status of ' + xhr.status));
            }
            else {
                deferred.resolve(JSON.parse(e.target.response));
            }
        };
        xhr.send(options.data || void 0);
        return deferred.promise;
    };
    return HttpService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpService;
//# sourceMappingURL=HttpService.js.map