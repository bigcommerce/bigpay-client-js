import * as mapToCustomerModule from '../../../src/payment/mappers/map-to-customer';
import * as mapToOrderModule from '../../../src/payment/mappers/map-to-order';
import * as mapToPaymentModule from '../../../src/payment/mappers/map-to-payment';
import * as mapToStoreModule from '../../../src/payment/mappers/map-to-store';
import mapToPayload from '../../../src/payment/mappers/map-to-payload';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToPayload', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToCustomerModule, 'default').and.returnValue('customer');
        spyOn(mapToOrderModule, 'default').and.returnValue('order');
        spyOn(mapToPaymentModule, 'default').and.returnValue('payment');
        spyOn(mapToStoreModule, 'default').and.returnValue('store');
    });

    it('should map to payload', () => {
        const output = mapToPayload(data);

        expect(output).toEqual({
            customer: 'customer',
            notify_url: data.order.callbackUrl,
            order: 'order',
            payment: 'payment',
            store: 'store',
        });
    });
});
