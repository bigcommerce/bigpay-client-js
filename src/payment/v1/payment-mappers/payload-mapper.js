import { omitNil } from '../../../common/utils';
import CustomerMapper from './customer-mapper';
import OrderMapper from './order-mapper';
import PaymentMapper from './payment-mapper';
import StoreMapper from './store-mapper';

export default class PayloadMapper {
    /**
     * @returns {PayloadMapper}
     */
    static create() {
        const customerMapper = CustomerMapper.create();
        const orderMapper = OrderMapper.create();
        const paymentMapper = PaymentMapper.create();
        const storeMapper = StoreMapper.create();

        return new PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper);
    }

    /**
     * @param {CustomerMapper} customerMapper
     * @param {OrderMapper} orderMapper
     * @param {PaymentMapper} paymentMapper
     * @param {StoreMapper} storeMapper
     */
    constructor(customerMapper, orderMapper, paymentMapper, storeMapper) {
        /**
         * @private
         * @type {CustomerMapper}
         */
        this.customerMapper = customerMapper;

        /**
         * @private
         * @type {OrderMapper}
         */
        this.orderMapper = orderMapper;

        /**
         * @private
         * @type {PaymentMapper}
         */
        this.paymentMapper = paymentMapper;

        /**
         * @private
         * @type {StoreMapper}
         */
        this.storeMapper = storeMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToPayload(data) {
        const { order = {}, additionalAction } = data;

        return omitNil({
            customer: this.customerMapper.mapToCustomer(data),
            notify_url: order.callbackUrl,
            order: this.orderMapper.mapToOrder(data),
            payment: this.paymentMapper.mapToPayment(data),
            store: this.storeMapper.mapToStore(data),
            additional_action: additionalAction,
        });
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
