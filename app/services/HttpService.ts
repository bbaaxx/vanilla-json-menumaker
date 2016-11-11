import * as Q from 'q';
import mergeObjects from '../utilities/mergeObjects';

export interface httpCallOptions {
    url: string;
    method?: string;
    headers?: Object;
    data?: Object;
    isJson?: boolean;
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

        // Uppercase or default GET for HTTP method
        options.method = (options.method || 'get').toUpperCase();
        // Add default headers if the request contains data
        if (options.data) options.isJson = true;

        if (options.isJson) {
            options.headers = this.addJsonDefaultHeaders(options.headers);
            options.data = JSON.stringify(options.data);
        };

        // Open the request
        xhr.open(options.method, options.url, true);
        // Register headers recursively
        Object.keys(options.headers || {}).forEach((key) => {
            xhr.setRequestHeader(key, options.headers[key]);
        });

        // Register handler
        xhr.onreadystatechange = (e: HttpCallDataEvent) => {
            if (xhr.readyState !== 4) return;
            if (xhr.status.toString().substr(0, 2) !== '20') {
                deferred.reject(new Error('Server responded with a status of ' + xhr.status));
            } else {
                let callResponse = e.target.response;
                if (options.isJson) callResponse = JSON.parse(e.target.response);
                deferred.resolve(callResponse);
            }
        };

        // Send the request and return the promise
        xhr.send(options.data || void 0);
        return deferred.promise;
    }

    private addJsonDefaultHeaders(headers: Object): Object {
        return mergeObjects(headers, {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
    }

}
