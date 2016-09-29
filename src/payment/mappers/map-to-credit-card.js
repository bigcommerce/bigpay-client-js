import { toNumber } from '../../common/utils';

/**
 * Map to credit card
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCreditCard(data) {
    const { payment = {} } = data;

    return {
        account_name: payment.ccName,
        number: payment.ccNumber,
        month: payment.ccExpiry ? toNumber(payment.ccExpiry.month) : null,
        verification_value: payment.ccCvv,
        year: payment.ccExpiry ? toNumber(payment.ccExpiry.year) : null,
    };
}
