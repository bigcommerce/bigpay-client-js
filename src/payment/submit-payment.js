import { getPaymentUrl } from './urls';
import { postRequest } from '../common/http-request';
import { mapToHeaders, mapToPayment } from './mappers';

/**
 * @typedef {Object} PaymentInputData
 * @param {Object} billingAddress
 * @param {Object} cart
 * @param {Object} customer
 * @param {Object} order
 * @param {Object} orderMeta
 * @param {Object} payment
 * @param {Object} paymentMethod
 * @param {Object} shippingAddress
 * @param {Object} store
 */

/**
 * Submit payment
 * @param {PaymentInputData} inputData
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function submitPayment(inputData, options = {}) {
    const paymentData = mapToPayment(inputData);
    const requestOptions = {
        headers: mapToHeaders(inputData),
    };

    return postRequest(getPaymentUrl(options.host), paymentData, requestOptions);
}
