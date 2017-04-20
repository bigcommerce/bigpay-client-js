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
        const contentType = xhr.getResponseHeader('Content-Type');
        const { status, statusText } = xhr;

        let data = 'response' in xhr ? xhr.response : xhr.responseText;

        if (data && includes(contentType, APPLICATION_JSON)) {
            data = JSON.parse(data);
        }

        return { data, status, statusText };
    }
}
