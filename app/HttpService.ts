import * as Q from 'q';

export interface httpCallOptions {
    url: string;
    method?: string;
    headers?: string[];
    data?: any;
}

interface HttpCallDataEventTarget extends EventTarget {
    response: string;
}

interface HttpCallDataEvent extends ProgressEvent {
    target: HttpCallDataEventTarget;
    getMessage(): string;
}

export default class HttpService {

    constructor() { }

    public makeCall(options: httpCallOptions): Q.Promise<any> {
        let xhr = new XMLHttpRequest();
        let deferred = Q.defer();
        Object.keys(options.headers || {}).forEach((key) => {
            xhr.setRequestHeader(key, options.headers[key]);
        });
        xhr.open(options.method || 'GET', options.url, true);
        xhr.onreadystatechange = (e: HttpCallDataEvent) => {
            if (xhr.readyState !== 4) return;
            if ([200, 304].indexOf(xhr.status) === -1) {
                deferred.reject(new Error('Server responded with a status of ' + xhr.status));
            } else { deferred.resolve(JSON.parse(e.target.response)); }
        };
        xhr.send(options.data || void 0);
        return deferred.promise;
    }

}
