import { omitNil } from '../../common/utils';

export default class MetaMapper {
    /**
     * @returns {MetaMapper}
     */
    static create() {
        return new MetaMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToMeta(data) {
        const { source } = data;

        return omitNil({
            meta_referrer: document.referrer,
            meta_source: source,
            meta_user_agent: navigator.userAgent,
        });
    }
}
