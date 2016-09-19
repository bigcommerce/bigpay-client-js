/**
 * Map to meta
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToMeta(data) {
    const { orderMeta = {} } = data;

    return {
        geo_ip_country_code: orderMeta.geoCountryCode,
    };
}
