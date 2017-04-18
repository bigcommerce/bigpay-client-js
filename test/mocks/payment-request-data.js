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
        items: [
            {
                integerAmount: 10000,
                id: '123',
                name: 'Cheese',
                quantity: 1,
                sku: '123456789',
            },
        ],
    },
    customer: {
        customerId: '123',
        email: 'email@bigcommerce.com',
        firstName: 'Foo',
        lastName: 'Bar',
        name: 'Foo Bar',
        phoneNumber: '98765432',
    },
    order: {
        callbackUrl: '/order/123/payment',
        currency: 'AUD',
        grandTotal: {
            integerAmount: 12000,
        },
        handling: {
            integerAmount: 500,
        },
        orderId: '123',
        shipping: {
            integerAmount: 1000,
        },
        subtotal: {
            integerAmount: 10000,
        },
        taxTotal: {
            integerAmount: 1000,
        },
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
        id: 'paypalprous',
        type: API,
        returnUrl: '/checkout',
    },
    quoteMeta: {
        request: {
            deviceSessionId: 'xyz123',
            geoCountryCode: 'AU',
            sessionHash: 'abc123',
        },
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
        storeId: '100',
        storeLanguage: 'en-AU',
        storeName: 'Test Store',
    },
};

export default paymentRequestDataMock;
