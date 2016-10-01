import { omitNil } from '../../common/utils';

/**
 * Map to meta
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToMeta(data) {
    const { source } = data;

    return omitNil({
        meta_referrer: document.referrer,
        meta_source: source,
        meta_user_agent: navigator.userAgent,
    });
}
