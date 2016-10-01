import { omitNil, toNumber } from '../../common/utils';

/**
 * Map to credit card
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCreditCard(data) {
    const { payment = {} } = data;

    return omitNil({
        account_name: payment.ccName,
        month: payment.ccExpiry ? toNumber(payment.ccExpiry.month) : null,
        number: payment.ccNumber,
        verification_value: payment.ccCvv,
        year: payment.ccExpiry ? toNumber(payment.ccExpiry.year) : null,
    });
}
