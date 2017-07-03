import objectAssign from 'object-assign';
import { omitNil, toString } from '../../common/utils';
import AddressMapper from './address-mapper';
import CustomerMapper from './customer-mapper';
import MetaMapper from './meta-mapper';
import PaymentMethodIdMapper from '../payment-method-mappers/payment-method-id-mapper';
import StoreMapper from './store-mapper';

export default class PayloadMapper {
    /**
     * @returns {PayloadMapper}
     */
    static create() {
        const addressMapper = AddressMapper.create();
        const customerMapper = CustomerMapper.create();
        const metaMapper = MetaMapper.create();
        const paymentMethodIdMapper = PaymentMethodIdMapper.create();
        const storeMapper = StoreMapper.create();

        return new PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper);
    }

    /**
     * @param {AddressMapper} addressMapper
     * @param {CustomerMapper} customerMapper
     * @param {MetaMapper} metaMapper
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @param {StoreMapper} storeMapper
     * @returns {Object}
     */
    constructor(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper) {
        /**
         * @private
         * @type {AddressMapper}
         */
        this.addressMapper = addressMapper;

        /**
         * @private
         * @type {CustomerMapper}
         */
        this.customerMapper = customerMapper;

        /**
         * @private
         * @type {MetaMapper}
         */
        this.metaMapper = metaMapper;

        /**
         * @private
         * @type {PaymentMethodIdMapper}
         */
        this.paymentMethodIdMapper = paymentMethodIdMapper;

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
        const { authToken, order = {}, paymentMethod = {} } = data;

        const payload = objectAssign(
            {
                amount: order.grandTotal ? order.grandTotal.integerAmount : null,
                bc_auth_token: authToken,
                currency: order.currency,
                gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
                notify_url: order.callbackUrl,
                order_id: order.orderId ? toString(order.orderId) : null,
                page_title: document.title ? document.title : null,
                payment_method_id: paymentMethod.id,
                reference_id: order.orderId ? toString(order.orderId) : null,
                return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null),
            },
            this.addressMapper.mapToBillingAddress(data),
            this.customerMapper.mapToCustomer(data),
            this.metaMapper.mapToMeta(data),
            this.addressMapper.mapToShippingAddress(data),
            this.storeMapper.mapToStore(data)
        );

        return omitNil(payload);
    }
}
