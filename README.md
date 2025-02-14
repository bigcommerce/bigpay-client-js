# bigpay-client.js

[![Build Status](https://circleci.com/gh/bigcommerce/bigpay-client-js.svg?style=svg)](https://circleci.com/gh/bigcommerce/bigpay-client-js)

bigpay-client.js is a client-side library for posting payment data to BigPay.

## Usage1
In `checkout.js`
```js
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
```js
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
            currency: 'AUD',
            grandTotal: {
                integerAmount: 12000,
            },
            handling: {
                integerAmount: 0,
            },
            shipping: {
                integerAmount: 1000,
            },
            subtotal: {
                integerAmount: 10000,
            },
            taxTotal: {
                integerAmount: 1000,
            },
            items: [
                {
                    id: '123',
                    integerAmount: 10000,
                    integerAmountAfterDiscount: 10000,
                    integerDiscount: 0,
                    integerTax: 1000,
                    integerUnitPrice: 10000,
                    integerUnitPriceAfterDiscount: 10000,
                    name: 'Cheese',
                    quantity: 1,
                    sku: '123456789',
                    type: 'ItemPhysicalEntity',
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
            ccCustomerCode: 'XYZ',
        },
        paymentMethod: {
            id: 'paypalprous',
            type: 'PAYMENT_TYPE_API',
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
            cartLink: '/cart',
            checkoutLink: '/checkout',
            countryCode: 'AU',
            currencyCode: 'AUD',
            orderConfirmationLink: '/order-confirmation',
            shopPath: '/',
            storeHash: 's123456789',
            storeId: '100',
            storeLanguage: 'en-AU',
            storeName: 'Test Store',
        },
    };
}
```

## Development

```sh
npm install
```

Link with other projects:

Inside `bigpay-client-js`

```sh
npm link
npm build -- --watch
```

Other project(s):

```sh
npm link @bigcommerce/bigpay-client
npm run dev
```

To run unit tests:

```sh
npm test
```

To release a new version:

```sh
npm run release
```
