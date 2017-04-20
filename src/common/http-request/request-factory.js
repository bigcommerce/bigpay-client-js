export default class RequestFactory {
    /**
     * @returns {RequestFactory}
     */
    static create() {
        return new RequestFactory();
    }

    /**
     * @param {string} url
     * @param {Object} options
     * @param {Function} [callback]
     * @returns {XMLHttpRequest}
     */
    createRequest(url, options, callback) {
        const xhr = new XMLHttpRequest();

        xhr.onerror = () => {
            if (callback) {
                callback(new Error(xhr.statusText));
            }
        };

        xhr.onload = () => {
            if (callback) {
                callback();
            }
        };

        xhr.open(options.method, url, true);
        this.setOptions(xhr, options);

        return xhr;
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @param {Object} headers
     * @returns {void}
     */
    setHeaders(xhr, headers) {
        const headerKeys = Object.keys(headers);

        headerKeys.forEach((key) => {
            const value = headers[key];

            xhr.setRequestHeader(key, value);
        });
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @param {Object} options
     * @returns {void}
     */
    setOptions(xhr, options) {
        xhr.withCredentials = options.withCredentials;

        if (options.headers) {
            this.setHeaders(xhr, options.headers);
        }
    }
}
