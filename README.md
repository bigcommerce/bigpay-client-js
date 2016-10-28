# bigpay-client.js

bigpay-client.js is a client-side library for posting payment data to Bigpay.

## Usage

In `checkout.js`
```{js}
import { createClient } from 'bigpay-client';
import { getPaymentData } from './payment';

const client = createClient({
    host: 'https://payments.bigcommerce.com',
});

const data = getPaymentData();

client.submitPayment(data, (error, response) => {
    if (error) {
        throw error;
    }

    console.log(response);
});
```

In `payment.js`
```{js}
export default function getPaymentData() {
    return {
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
                    id: '123',
                    integerAmount: 10000,
                    name: 'Cheese',
                    quantity: 1,
                    sku: '123456789',
                },
            ],
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
            currency: 'AUD',
            grandTotal: {
                integerAmount: 12000,
            },
            handling: {
                integerAmount: 0,
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
            config: {
                redirectUrl: '/checkout',
            },
            id: 'paypalprous',
            type: 'PAYMENT_TYPE_API',
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
    }
}
```

## Development

To run unit tests:
```
npm run test
```

To release a new version:
```
npm run release
```
