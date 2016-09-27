import { API } from '../../src/payment/payment-types';

const paymentRequestDataMock = {
    authToken: 'aaa.bbb.ccc',
    billingAddress: {
        addressLine1: '1-3 Smail St',
        addressLine2: 'Ultimo',
        city: 'Sydney',
        company: 'BigCommerce',
        country: 'Australia',
        countryCode: 'AU',
        firstName: 'Foo',
        lastName: 'Bar',
        phone: '98765432',
        postCode: '2007',
        provinceCode: 'NSW',
        province: 'New South Wales',
    },
    cart: {
        currency: 'AUD',
        grandTotal: {
            integerAmount: 12000,
        },
        handling: {
            amount: 0,
        },
        id: '123',
        items: [
            {
                amount: 10000,
                id: '123',
                name: 'Cheese',
                quantity: 1,
                sku: '123456789',
            },
        ],
        shipping: {
            amount: 1000,
        },
        subTotal: {
            amount: 10000,
        },
        taxTotal: {
            amount: 1000,
        },
    },
    customer: {
        customerId: '123',
        firstName: 'Foo',
        geoCountryCode: 'AU',
        lastName: 'Bar',
        locale: 'en-AU',
        sessionHash: 'abc123',
    },
    order: {
        orderId: '123',
        token: 'abc123',
    },
    payment: {
        ccCvv: '123',
        ccExpiry: {
            month: 1,
            year: 2018,
        },
        ccName: 'Foo Bar',
        ccNumber: '4007000000027',
    },
    paymentMethod: {
        config: {
            redirectUrl: '/checkout',
        },
        id: 'paypalprous',
        type: API,
    },
    shippingAddress: {
        addressLine1: '685 Market St',
        addressLine2: 'Third Floor',
        city: 'San Francisco',
        company: 'BigCommerce',
        country: 'United States',
        countryCode: 'US',
        firstName: 'Joe',
        lastName: 'Bar',
        phone: '98765432',
        postCode: '94105',
        provinceCode: 'CA',
        province: 'California',
    },
    source: 'bcapp-checkout-uco',
    store: {
        storeHash: 's123456789',
        storeName: 'Test Store',
        storeId: '100',
    },
};

export default paymentRequestDataMock;
