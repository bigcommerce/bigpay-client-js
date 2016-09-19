import * as mapToBillingAddressModule from '../../../src/payment/mappers/map-to-billing-address';
import * as mapToItemsModule from '../../../src/payment/mappers/map-to-items';
import * as mapToOrderTotalsModule from '../../../src/payment/mappers/map-to-order-totals';
import * as mapToShippingAddressModule from '../../../src/payment/mappers/map-to-shipping-address';
import mapToOrder from '../../../src/payment/mappers/map-to-order';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToOrder', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToBillingAddressModule, 'default').and.returnValue('billingAddress');
        spyOn(mapToItemsModule, 'default').and.returnValue('items');
        spyOn(mapToOrderTotalsModule, 'default').and.returnValue('orderTotals');
        spyOn(mapToShippingAddressModule, 'default').and.returnValue('shippingAddress');
    });

    it('should map to order', () => {
        const output = mapToOrder(data);

        expect(output).toEqual({
            billing_address: 'billingAddress',
            currency: data.cart.currency,
            id: data.order.orderId,
            items: 'items',
            shipping_address: 'shippingAddress',
            totals: 'orderTotals',
            token: data.order.orderToken,
        });
    });
});
