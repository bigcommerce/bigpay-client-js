import { omitNil } from '../../../common/utils';
import PaymentMethodIdMapper from '../../payment-method-mappers/payment-method-id-mapper';

export default class GatewayMapper {
    /**
     * @returns {GatewayMapper}
     */
    static create() {
        const paymentMethodIdMapper = PaymentMethodIdMapper.create();

        return new GatewayMapper(paymentMethodIdMapper);
    }

    /**
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @returns {void}
     */
    constructor(paymentMethodIdMapper) {
        /**
         * @private
         * @type {PaymentMethodIdMapper}
         */
        this.paymentMethodIdMapper = paymentMethodIdMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToGateway(data) {
        const { paymentMethod = {} } = data;

        return omitNil({
            name: this.paymentMethodIdMapper.mapToId(paymentMethod),
        });
    }
}
