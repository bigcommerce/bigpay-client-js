import { omitNil } from '../../../common/utils';

export default class HeaderMapper {
    /**
     * @returns {HeaderMapper}
     */
    static create() {
        return new HeaderMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToHeaders(data) {
        const { authToken } = data;

        return omitNil({
            Authorization: authToken,
        });
    }
}
