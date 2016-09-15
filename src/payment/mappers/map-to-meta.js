/**
 * Map to meta
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToMeta(inputData) {
    const { orderMeta = {} } = inputData;

    return {
        geo_ip_country_code: orderMeta.geoCountryCode,
    };
}
