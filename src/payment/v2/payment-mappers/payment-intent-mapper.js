import { omitNil } from '../../../common/utils';
import GatewayMapper from './gateway-mapper';

export default class PaymentIntentMapper {
    /**
     * @returns {PaymentIntentMapper}
     */
    static create() {
        const gatewayMapper = GatewayMapper.create();

        return new PaymentIntentMapper(gatewayMapper);
    }

    /**
     * @param {GatewayMapper} gatewayMapper
     */
    constructor(gatewayMapper) {
        /**
         * @private
         * @type {GatewayMapper}
         */
        this.gatewayMapper = gatewayMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToPaymentIntent(data) {
        return omitNil({
            stripe_data: this.mapStripeData(data),
            gateway: this.gatewayMapper.mapToGateway(data),
        });
    }

    mapStripeData(data) {
        const {
            shouldSavePaymentInstrument = false,
            customer = {},
            cart = {},
            store = {},
        } = data;

        return omitNil({
            should_save_payment_instrument: shouldSavePaymentInstrument,
            customer_id: customer.customerId,
            customer_name: customer.name,
            customer_email: customer.email,
            grand_total: cart.grandTotal.integerAmount,
            currency_code: cart.currency,
            store_id: store.storeId,
            store_name: store.storeName,
        });
    }
}
