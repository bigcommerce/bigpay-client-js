/**
 * Map to credit card
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToCreditCard(inputData) {
    const { payment = {} } = inputData;

    return {
        account_name: payment.ccName,
        issue_number: payment.ccNumber,
        month: payment.ccExpiry ? payment.ccExpiry.month : undefined,
        verification_value: payment.ccCvv,
        year: payment.ccExpiry ? payment.ccExpiry.year : undefined,
    };
}
