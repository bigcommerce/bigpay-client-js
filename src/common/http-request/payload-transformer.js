import objectAssign from 'object-assign';
import { APPLICATION_JSON } from './content-types';
import { includes } from '../utils';

export default class PayloadTransformer {
    /**
     * @returns {PayloadTransformer}
     */
    static create() {
        return new PayloadTransformer();
    }

    /**
     * @param {Object} data
     * @param {string} [contentType = APPLICATION_JSON]
     * @returns {Object}
     */
    toRequest(data, contentType = APPLICATION_JSON) {
        if (data && includes(contentType, APPLICATION_JSON)) {
            return JSON.stringify(data);
        }

        return data;
    }

    /**
     * @param {XMLHttpRequest} xhr
     * @returns {Object}
     * @property {Object} data
     * @property {number} status
     * @property {string} statusText
     */
    fromResponse(xhr) {
        const headers = this.parseResponseHeaders(xhr.getAllResponseHeaders());
        const contentType = xhr.getResponseHeader('Content-Type');
        const { status, statusText } = xhr;

        let data = 'response' in xhr ? xhr.response : xhr.responseText;

        if (data && includes(contentType, APPLICATION_JSON)) {
            data = JSON.parse(data);
        }

        return { data, headers, status, statusText };
    }

    /**
     * @private
     * @param {string} rawHeaders
     * @returns {Object}
     */
    parseResponseHeaders(rawHeaders) {
        const lines = rawHeaders ? rawHeaders.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/) : [];

        return lines.reduce((headers, line) => {
            const parts = line.split(':');
            const key = (parts.shift() || '').trim();

            if (!key) {
                return headers;
            }

            return objectAssign({}, headers, {
                [key.toLowerCase()]: parts.join(':').trim(),
            });
        }, {});
    }
}
