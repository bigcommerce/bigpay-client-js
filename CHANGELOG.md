# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.13.1](https://github.com/bigcommerce/bigpay-client-js/compare/v5.13.0...v5.13.1) (2020-11-20)

## [5.13.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.12.1...v5.13.0) (2020-10-20)


### Features

* **payments:** PAYPAL-702 Add alternative to mapper ([f7b5134](https://github.com/bigcommerce/bigpay-client-js/commit/f7b513419be98b08d8d4442441e5624868df5de6))

### [5.12.1](https://github.com/bigcommerce/bigpay-client-js/compare/v5.12.0...v5.12.1) (2020-09-15)

## [5.12.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.11.0...v5.12.0) (2020-08-12)


### Features

* **payments:** PAYPAL-202 Add paypalcommercecreditcards to PaymentMethodIdMapper ([dfea8c2](https://github.com/bigcommerce/bigpay-client-js/commit/dfea8c2c3957e99bac5e62a22f871ba850075df0))

## [5.11.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.10.0...v5.11.0) (2020-08-07)


### Features

* **vaulting:** CHECKOUT-4947 Forward payment method nonce when paying with stored instrument for card verification ([b2f1dc4](https://github.com/bigcommerce/bigpay-client-js/commit/b2f1dc43d7c7409af1047aa9d663927f3a62c508))

## [5.10.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.9.0...v5.10.0) (2020-07-29)


### Features

* **payments:** PAYMENTS-5513 rename setAsDefaultInstrument to shouldSetAsDefaultInstrument ([#105](https://github.com/bigcommerce/bigpay-client-js/issues/105)) ([50d96c3](https://github.com/bigcommerce/bigpay-client-js/commit/50d96c361a2018ff59aecbf83c6724cbe0abe360))

## [5.9.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.8.0...v5.9.0) (2020-07-02)


### Features

* **payments:** CHECKOUT-4973 Add hosted_form_nonce to payment request object ([436476a](https://github.com/bigcommerce/bigpay-client-js/commit/436476add620f0ecd3f2fcf725485c8c0bbec23f))

## [5.8.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.7.0...v5.8.0) (2020-06-08)


### Features

* **payments:** PAYMENTS-5513 add set_as_default_vaulted_instrument mapping ([#100](https://github.com/bigcommerce/bigpay-client-js/issues/100)) ([6eb926d](https://github.com/bigcommerce/bigpay-client-js/commit/6eb926db566d4ed52fd9244423d2825b7baa121e))

## [5.7.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.6.0...v5.7.0) (2020-05-22)


### Features

* **payments:** PAYMENTS-5425 Update payload-mapper for Carding remediation solution ([3a97902](https://github.com/bigcommerce/bigpay-client-js/commit/3a9790236eea5ade2381bcc0df108944fe53f3e0))

## [5.6.0](https://github.com/bigcommerce/bigpay-client-js/compare/v5.5.1...v5.6.0) (2020-05-05)


### Features

* **payments:** PAYPAL-293 Add paypalcommerce to payment methods ([0720e30](https://github.com/bigcommerce/bigpay-client-js/commit/0720e302d30ab92e74ecdcfdbb28db32fc840646))

### [5.5.1](https://github.com/bigcommerce/bigpay-client-js/compare/v5.5.0...v5.5.1) (2020-03-26)


### Bug Fixes

* **common:** PAYMENTS-5038 add missing standard-version dev dep ([97a4f11](https://github.com/bigcommerce/bigpay-client-js/commit/97a4f11a6f405c5adbd4608c493d6d88b3257a1f))

## 5.5.0 (2020-03-26)


### Features

* **client:** PAYMENTS-1986 Expose store request methods ([2cb4e8b](https://github.com/bigcommerce/bigpay-client-js/commit/2cb4e8b7bc776ac669e4ec5f7e71bef94954340a))
* **common:** CHECKOUT-3035 Provide setter for config ([0d58b2b](https://github.com/bigcommerce/bigpay-client-js/commit/0d58b2be7366768b5c849ed006f0f62d95d4aedf))
* **common:** PAYMENT-1986 Add DELETE method ([072ecaa](https://github.com/bigcommerce/bigpay-client-js/commit/072ecaaea70b1092f5fd567cc686d32e1c7e1944))
* **common:** PAYMENTS-4616 Allow a passthrough for payment data ([ab24e7a](https://github.com/bigcommerce/bigpay-client-js/commit/ab24e7ad67e05701a2a7220e8e8e84dea011b1d8))
* **instrument:** INT-1780 Map customer id in offsite payment ([83b98b8](https://github.com/bigcommerce/bigpay-client-js/commit/83b98b85f595cb83a7ed5e5db844c98c57ea76e5))
* **instrument:** PAYMENTS-4759 Include new instrument types in the response ([7c5d85b](https://github.com/bigcommerce/bigpay-client-js/commit/7c5d85b7048e788c60af803a58887d05546fc38e))
* **order:** CHECKOUT-2509 Map shipping method name for CyberSource ([1c1ffca](https://github.com/bigcommerce/bigpay-client-js/commit/1c1ffca52111a21f01c57d15073fc7c409d761a9))
* **payment:** Add BigPay v2 payload mappers ([6424089](https://github.com/bigcommerce/bigpay-client-js/commit/642408980c17e96a684edda4101c03cb683bd3c1))
* **payment:** Add client token generator and generate client token method ([8add2d7](https://github.com/bigcommerce/bigpay-client-js/commit/8add2d7d07ba89836484b7fa171ae76018ca8ac1))
* **payment:** CHECKOUT-2358 Add extra data for CyberSource ([e29dbf7](https://github.com/bigcommerce/bigpay-client-js/commit/e29dbf725c6543b874b5acdd371394b564fc6c6e))
* **payment:** INT-594 Send ChasePay CheckoutData needed for WePay ([7a5d9d3](https://github.com/bigcommerce/bigpay-client-js/commit/7a5d9d3dc729161db73b3b4ff9dd90459ec9730e))
* **payment:** PAYMENTS-1990 Map vault data to payload ([42c94f6](https://github.com/bigcommerce/bigpay-client-js/commit/42c94f6b575c01d0142f7e73861b87a5095674a0))
* **payment:** PAYMENTS-2675 Add CCNo. as part of the vaulting payment ([c6d708c](https://github.com/bigcommerce/bigpay-client-js/commit/c6d708cca51d66b0445c3c1613647362798dbae7))
* **payment:** PAYMENTS-889 Forward returnUrl to BigPay ([d1bae05](https://github.com/bigcommerce/bigpay-client-js/commit/d1bae05727f4cd4a57eecd92326ba07d5d67af2c))
* **Payment Mappers:** map BT PayPal Credit to braintree ([44e3183](https://github.com/bigcommerce/bigpay-client-js/commit/44e31834512b63f69e6112dfb9baf59a8fef9cce))
* **Payment Mappers:** Maps BT VisaCheckout to braintree ([4397abd](https://github.com/bigcommerce/bigpay-client-js/commit/4397abd2e7daff25ac75949fc053c1b404914261))
* **payment-mapper:** map referrer id to payment if available ([b434b67](https://github.com/bigcommerce/bigpay-client-js/commit/b434b6745b9e668e8f5066085606f8553e003c7c))
* **payments:** CHECKOUT-4418 Return response headers in success and error callbacks ([939add2](https://github.com/bigcommerce/bigpay-client-js/commit/939add267e6810508da07e26828e12b94915d4f5))
* **payments:** INT-1479 Add extraData to credit card payload ([a962d0f](https://github.com/bigcommerce/bigpay-client-js/commit/a962d0f5ac4d6a908ea3070573878d0a80e710bd))
* **payments:** INT-1577 Add support for paymentIntent creations endpoint ([fdc3c5d](https://github.com/bigcommerce/bigpay-client-js/commit/fdc3c5d1fb67c9580a84d84e7a6f2a640cfec480))
* **payments:** INT-1650 adding properties to vaulting object ([595fc00](https://github.com/bigcommerce/bigpay-client-js/commit/595fc002b805968501de89062930bea0be3383f5))
* **payments:** INT-1768 Revert Add support for paymentIntent creations endpoint ([a60aec4](https://github.com/bigcommerce/bigpay-client-js/commit/a60aec4802a0439fddbb243f0b2bd5e30c57c8a4))
* **payments:** INT-1778 Map formatted payload in offsite payment ([540dddd](https://github.com/bigcommerce/bigpay-client-js/commit/540dddd8dcd53fdda100ae2a61d9f5df10c183a8))
* **payments:** INT-1997 Add optional target parameter ([74ba9c9](https://github.com/bigcommerce/bigpay-client-js/commit/74ba9c91b7d05d252c6893d1a77cdc4be8adbcf3))
* **payments:** INT-275 Add a mapper for Cryptogram Payment instrument ([b1ddf87](https://github.com/bigcommerce/bigpay-client-js/commit/b1ddf879e7900a07b3f951f1bfffaadbf1e0fa97))
* **payments:** INT-417 Pass 'extraData' field to BigPay ([fdb1a43](https://github.com/bigcommerce/bigpay-client-js/commit/fdb1a43c0a9915bfde6e552abf40c50601f9f482))
* **payments:** INT-835 Update braintree payment methods ([df6d38a](https://github.com/bigcommerce/bigpay-client-js/commit/df6d38a1287138967efd782f50135ff6cc1bd88d))
* **payments:** PAYMENTS-4228 include currency code in shopper instrument calls ([a22917c](https://github.com/bigcommerce/bigpay-client-js/commit/a22917c8b806ff0bbd8e1d0e1689e2cac11ac3a4))
* **store:** PAYMENTS-1986 Add store instrument mapper ([da62453](https://github.com/bigcommerce/bigpay-client-js/commit/da624530adc5082c8e91e7a1d22b06862ca6c4d2))
* **store:** PAYMENTS-1986 Add store request sender class ([09d1eeb](https://github.com/bigcommerce/bigpay-client-js/commit/09d1eeb39c0f21f02c8fe6db52c74da4dd466ef7))
* **store:** PAYMENTS-1986 Add url helper to new store domain ([d5edcfb](https://github.com/bigcommerce/bigpay-client-js/commit/d5edcfb624e247f469494f79dae1afaaa05395a0))
* **store:** PAYMENTS-2672 Allow consumers to post a trusted shipping ([09e759d](https://github.com/bigcommerce/bigpay-client-js/commit/09e759dedd254f3cf4e458b34e2b164053605503))


### Bug Fixes

* **build:** Point to the correct file in bower.json ([dbe340b](https://github.com/bigcommerce/bigpay-client-js/commit/dbe340b6d845756c20a8b835ecf796068019803a))
* **build:** Remove bower.json as it is no longer supported ([8c455ef](https://github.com/bigcommerce/bigpay-client-js/commit/8c455efc60d02ac4dac89e5f9790799266c84b15))
* **build:** Remove prepublish script as the package is not in npm registry ([a1bec9e](https://github.com/bigcommerce/bigpay-client-js/commit/a1bec9e78cbcc7dc3441836836e39b3be4d08765))
* **common:** CHECKOUT-2702 Bump form-poster to fix callback getting called prematurely ([1189a97](https://github.com/bigcommerce/bigpay-client-js/commit/1189a974dac48de95b327398027e21f4b5ac2289))
* **instruments:** PAYMENTS-4759 Remove POST instrument for api/v2 ([29928a8](https://github.com/bigcommerce/bigpay-client-js/commit/29928a8c766de731c7d2fca52f591cafef0ae900))
* **payment:** Get the host value from config object ([bfb91de](https://github.com/bigcommerce/bigpay-client-js/commit/bfb91de38cbf66273410698a4e086ee47d9ee49e))
* **payment:** PAYMENTS-889 Forward returnUrl of order instead of payment object if possible ([5cfe022](https://github.com/bigcommerce/bigpay-client-js/commit/5cfe022a495b8b95034a0df0c13c7db6f6110d5a))
* **payment:** Swap gateway and id fields if multi-option provider ([60e23e4](https://github.com/bigcommerce/bigpay-client-js/commit/60e23e4df8243d8bac833b9bfe2dd222b8f0b9a3))
* **payments:** INT-1360 payment-mapper take method value from paymentMethod instead of payment object, and fix gulp dependency not found. ([1234b69](https://github.com/bigcommerce/bigpay-client-js/commit/1234b69b96a898f0adacc8bce3ea5d36d1a517d2))
* **payments:** PAYMENTS-2590 Omitting empty string from billing address ([6c3dcb7](https://github.com/bigcommerce/bigpay-client-js/commit/6c3dcb78c350ed7bb6bd858ae172a2e9fcacca1a))
* **payments:** PAYMENTS-2590 Review Feedback ([689b572](https://github.com/bigcommerce/bigpay-client-js/commit/689b572fdcfdc2c0fa10c4ac4751ed3b2341e010))
* **payments:** PAYMENTS-3064 Use deviceSessionId from payment ([d41ea18](https://github.com/bigcommerce/bigpay-client-js/commit/d41ea183b0e5b31f42a5db10709f0fedf0822be6))
* **payments:** PAYMENTS-4228 remove currency code for when ID already provided ([c9da8a8](https://github.com/bigcommerce/bigpay-client-js/commit/c9da8a828ab84be6a29c3131187bf01d496cc91d))
* **payments:** PAYMENTS-5037 Add Item Unit Price to Line Item object in order payment payload ([931482a](https://github.com/bigcommerce/bigpay-client-js/commit/931482ad0deffb5e03c63699d80e82374d12e3a7))
* **store:** PAYMENTS-1983 Inject 'storeRequestSender' in the correct position as per ([e1d7420](https://github.com/bigcommerce/bigpay-client-js/commit/e1d74200a1296ee684935ce232c8412389875315))
* **store:** PAYMENTS-2122 Ensure config reference is not lost when host is updated ([ca42158](https://github.com/bigcommerce/bigpay-client-js/commit/ca421587ea859617d644e95efdf5202ddbf4cd51))
* **travis:** PAYMENTS-2590 Enforce yarn 0.11 in travis ([07f544f](https://github.com/bigcommerce/bigpay-client-js/commit/07f544f106d6392211cc63866455409f52532a65))
* **vaulting:** PAYMENTS-4820 Add currency to checkout request to delete a stored card ([dbdfb4b](https://github.com/bigcommerce/bigpay-client-js/commit/dbdfb4bd4ddebd78ebb716ff37cba3eb32bb3e4c))


### Code Refactoring

* **client:** PAYMENTS-2672 Rename vaulting endpoints ([f875f2a](https://github.com/bigcommerce/bigpay-client-js/commit/f875f2a8513c72becb1e2e03efe882198eabd1c0))
* **common:** Decompose sendRequest function into smaller service classes ([f32344a](https://github.com/bigcommerce/bigpay-client-js/commit/f32344ab6635823e58ac282d021266d8c530671a))
* **common:** PAYMENTS-221: Extract the code of posting form data into a separate library ([f16dfc5](https://github.com/bigcommerce/bigpay-client-js/commit/f16dfc57ab62ec525181d311477449fd73a727df))
* **payment:** Extract classes from initializeOffsitePayment function ([ebb465e](https://github.com/bigcommerce/bigpay-client-js/commit/ebb465e3bab8c1f2c9636a47f15306f35f12a850))
* **payment:** Extract classes from submitPayment function ([04a5eeb](https://github.com/bigcommerce/bigpay-client-js/commit/04a5eeb4d420e685e4309178a07f3b6fee5d4676))
* **payment:** Inject dependencies to Client ([e835595](https://github.com/bigcommerce/bigpay-client-js/commit/e835595c6ccd35d0f0c6144927079afb5370595c))
* **payment:** INT-491 re-map wepay risk token into device_info field instead of using extra_data ([a6f8325](https://github.com/bigcommerce/bigpay-client-js/commit/a6f8325f181c63cd89f4855c6b0f01324160a812))
* **payment:** Move v1 mappers to v1 folder ([6a49923](https://github.com/bigcommerce/bigpay-client-js/commit/6a49923e9c19cb04f6b1d283ae6c932026f737e0))
* **payment:** PAYMENTS-1990 Remove unused shopperToken ([f78867c](https://github.com/bigcommerce/bigpay-client-js/commit/f78867c81530a2b62ec6a317d1d51e73dfb2fda7))
* **payment:** Use factory method to create payment method mapper ([f0c748c](https://github.com/bigcommerce/bigpay-client-js/commit/f0c748c2b6ca6a5df0c759600963b7a7b8ac442f))
* **store:** PAYMENTS-1986 Remove redundant object destructuring ([bebe89f](https://github.com/bigcommerce/bigpay-client-js/commit/bebe89f680b8e8f68146c7f923ff17d4a6fce1e4))
* **store:** PAYMENTS-2672 Rename shopperId to customerId ([509fe10](https://github.com/bigcommerce/bigpay-client-js/commit/509fe1066774f544935a3a8ff6a38a1dd4b68370))

<a name="5.4.1"></a>
## [5.4.1](https://github.com/bigcommerce/bigpay-client-js/compare/5.0.1...5.4.1) (2020-01-08)


### Bug Fixes

* **payments:** PAYMENTS-5037 Add Item Unit Price to Line Item object in order payment payload ([931482a](https://github.com/bigcommerce/bigpay-client-js/commit/931482a))


### Features

* **instrument:** INT-1780 Map customer id in offsite payment ([83b98b8](https://github.com/bigcommerce/bigpay-client-js/commit/83b98b8))
* **payments:** INT-1778 Map formatted payload in offsite payment ([540dddd](https://github.com/bigcommerce/bigpay-client-js/commit/540dddd))
* **payments:** INT-1997 Add optional target parameter ([74ba9c9](https://github.com/bigcommerce/bigpay-client-js/commit/74ba9c9))



<a name="5.4.0"></a>
# [5.4.0](https://github.com/bigcommerce/bigpay-client-js/compare/5.2.0...5.4.0) (2020-01-02)


### Features

* **instrument:** INT-1780 Map customer id in offsite payment ([83b98b8](https://github.com/bigcommerce/bigpay-client-js/commit/83b98b8))
* **payments:** INT-1997 Add optional target parameter ([74ba9c9](https://github.com/bigcommerce/bigpay-client-js/commit/74ba9c9))



<a name="5.3.0"></a>
# [5.3.0](https://github.com/bigcommerce/bigpay-client-js/compare/5.2.0...5.3.0) (2019-12-05)


### Features

* **instrument:** INT-1780 Map customer id in offsite payment ([83b98b8](https://github.com/bigcommerce/bigpay-client-js/commit/83b98b8))



<a name="5.2.0"></a>
# [5.2.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.0.1...5.2.0) (2019-11-27)


### Bug Fixes

* **instruments:** PAYMENTS-4759 Remove POST instrument for api/v2 ([29928a8](https://github.com/bigcommerce/bigpay-client-js/commit/29928a8))
* **vaulting:** PAYMENTS-4820 Add currency to checkout request to delete a stored card ([dbdfb4b](https://github.com/bigcommerce/bigpay-client-js/commit/dbdfb4b))


### Features

* **common:** PAYMENTS-4616 Allow a passthrough for payment data ([ab24e7a](https://github.com/bigcommerce/bigpay-client-js/commit/ab24e7a))
* **instrument:** PAYMENTS-4759 Include new instrument types in the response ([7c5d85b](https://github.com/bigcommerce/bigpay-client-js/commit/7c5d85b))
* **payments:** CHECKOUT-4418 Return response headers in success and error callbacks ([939add2](https://github.com/bigcommerce/bigpay-client-js/commit/939add2))
* **payments:** INT-1479 Add extraData to credit card payload ([a962d0f](https://github.com/bigcommerce/bigpay-client-js/commit/a962d0f))
* **payments:** INT-1577 Add support for paymentIntent creations endpoint ([fdc3c5d](https://github.com/bigcommerce/bigpay-client-js/commit/fdc3c5d))
* **payments:** INT-1650 adding properties to vaulting object ([595fc00](https://github.com/bigcommerce/bigpay-client-js/commit/595fc00))
* **payments:** INT-1768 Revert Add support for paymentIntent creations endpoint ([a60aec4](https://github.com/bigcommerce/bigpay-client-js/commit/a60aec4))
* **payments:** INT-1778 Map formatted payload in offsite payment ([540dddd](https://github.com/bigcommerce/bigpay-client-js/commit/540dddd))


### BREAKING CHANGES

* **instrument:** * Include new instrument types as part of the response. They need to be
handled by the consumer.



<a name="5.1.0"></a>
# [5.1.0](https://github.com/bigcommerce/bigpay-client-js/compare/5.0.1...5.1.0) (2019-11-26)


### Features

* **payments:** INT-1778 Map formatted payload in offsite payment ([540dddd](https://github.com/bigcommerce/bigpay-client-js/commit/540dddd))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/bigcommerce/bigpay-client-js/compare/5.0.0...5.0.1) (2019-11-26)


### Bug Fixes

* **vaulting:** PAYMENTS-4820 Add currency to checkout request to delete a stored card ([dbdfb4b](https://github.com/bigcommerce/bigpay-client-js/commit/dbdfb4b))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.6.0...5.0.0) (2019-10-23)


### Features

* **instrument:** PAYMENTS-4759 Include new instrument types in the response ([7c5d85b](https://github.com/bigcommerce/bigpay-client-js/commit/7c5d85b))


### BREAKING CHANGES

* **instrument:** * Include new instrument types as part of the response. They need to be
handled by the consumer.



<a name="4.6.0"></a>
# [4.6.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.5.0...4.6.0) (2019-10-16)


### Bug Fixes

* **instruments:** PAYMENTS-4759 Remove POST instrument for api/v2 ([29928a8](https://github.com/bigcommerce/bigpay-client-js/commit/29928a8))


### Features

* **common:** PAYMENTS-4616 Allow a passthrough for payment data ([ab24e7a](https://github.com/bigcommerce/bigpay-client-js/commit/ab24e7a))



<a name="4.5.0"></a>
# [4.5.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.3.0...4.5.0) (2019-09-17)


### Features

* **payments:** CHECKOUT-4418 Return response headers in success and error callbacks ([939add2](https://github.com/bigcommerce/bigpay-client-js/commit/939add2))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.2.0...4.3.0) (2019-08-02)


### Features

* **payments:** INT-1768 Revert Add support for paymentIntent creations endpoint ([a60aec4](https://github.com/bigcommerce/bigpay-client-js/commit/a60aec4))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.1.0...4.2.0) (2019-07-25)


### Features

* **payments:** INT-1577 Add support for paymentIntent creations endpoint ([fdc3c5d](https://github.com/bigcommerce/bigpay-client-js/commit/fdc3c5d))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/bigcommerce/bigpay-client-js/compare/4.0.1...4.1.0) (2019-07-16)


### Features

* **payments:** INT-1479 Add extraData to credit card payload ([a962d0f](https://github.com/bigcommerce/bigpay-client-js/commit/a962d0f))
* **payments:** INT-1650 adding properties to vaulting object ([595fc00](https://github.com/bigcommerce/bigpay-client-js/commit/595fc00))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/bigcommerce/bigpay-client-js/compare/4.0.0...4.0.1) (2019-05-22)


### Bug Fixes

* **payments:** PAYMENTS-4228 remove currency code for when ID already provided ([c9da8a8](https://github.com/bigcommerce/bigpay-client-js/commit/c9da8a8))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/bigcommerce/bigpay-client-js/compare/3.2.4...4.0.0) (2019-05-14)


### Features

* **payments:** PAYMENTS-4228 include currency code in shopper instrument calls ([a22917c](https://github.com/bigcommerce/bigpay-client-js/commit/a22917c))



<a name="3.2.4"></a>
## [3.2.4](https://github.com/bigcommerce/bigpay-client-js/compare/3.2.3...3.2.4) (2019-03-13)


### Bug Fixes

* **payments:** INT-1360 payment-mapper take method value from paymentMethod instead of payment object, and fix gulp dependency not found. ([1234b69](https://github.com/bigcommerce/bigpay-client-js/commit/1234b69))



<a name="3.2.3"></a>
## [3.2.3](https://github.com/bigcommerce/bigpay-client-js/compare/3.2.2...3.2.3) (2018-10-19)


### Features

* **payments:** INT-835 Update braintree payment methods ([df6d38a](https://github.com/bigcommerce/bigpay-client-js/commit/df6d38a))



<a name="3.2.2"></a>
# [3.2.2](https://github.com/bigcommerce/bigpay-client-js/compare/3.2.0...3.2.2) (2018-08-01)


### Features

* **payments:** INT-491 re-map wepay risk token into device_info field instead of using extra_data ([a6f8325](https://github.com/bigcommerce/bigpay-client-js/commit/a6f8325))



<a name="3.2.1"></a>
## [3.2.1](https://github.com/bigcommerce/bigpay-client-js/compare/3.2.0...3.2.1) (2018-07-05)


### Bug Fixes

* **payments:** PAYMENTS-3064 Use deviceSessionId from payment ([d41ea18](https://github.com/bigcommerce/bigpay-client-js/commit/d41ea18))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/bigcommerce/bigpay-client-js/compare/3.1.0...3.2.0) (2018-06-18)


### Features

* **payment:** INT-594 Send ChasePay CheckoutData needed for WePay ([7a5d9d3](https://github.com/bigcommerce/bigpay-client-js/commit/7a5d9d3))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/bigcommerce/bigpay-client-js/compare/3.0.0...3.1.0) (2018-05-29)


### Features

* **payment:** PAYMENTS-2675 Add CCNo. as part of the vaulting payment ([c6d708c](https://github.com/bigcommerce/bigpay-client-js/commit/c6d708c))
* **payment:** INT-275 Add a mapper for Cryptogram Payment instrument ([b1ddf87](https://github.com/bigcommerce/bigpay-client-js/commit/b1ddf87))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/bigcommerce/bigpay-client-js/compare/2.12.0...3.0.0) (2018-05-21)



<a name="2.12.0"></a>
# [2.12.0](https://github.com/bigcommerce/bigpay-client-js/compare/2.11.1...2.12.0) (2018-05-16)


### Features

* **payments:** INT-417 Pass 'extraData' field to BigPay ([fdb1a43](https://github.com/bigcommerce/bigpay-client-js/commit/fdb1a43))
* **store:** PAYMENTS-2672 Allow consumers to post a trusted shipping ([09e759d](https://github.com/bigcommerce/bigpay-client-js/commit/09e759d))



<a name="2.11.1"></a>
## [2.11.1](https://github.com/bigcommerce/bigpay-client-js/compare/2.11.0...2.11.1) (2018-04-18)


### Bug Fixes

* **store:** PAYMENTS-2122 Ensure config reference is not lost when host is updated ([ca42158](https://github.com/bigcommerce/bigpay-client-js/commit/ca42158))



<a name="2.11.0"></a>
# [2.11.0](https://github.com/bigcommerce/bigpay-client-js/compare/2.10.2...2.11.0) (2018-04-10)


### Features

* **common:** CHECKOUT-3035 Provide setter for config ([0d58b2b](https://github.com/bigcommerce/bigpay-client-js/commit/0d58b2b))



<a name="2.10.2"></a>
## [2.10.2](https://github.com/bigcommerce/bigpay-client-js/compare/2.10.1...2.10.2) (2018-03-27)



<a name="2.10.1"></a>
## [2.10.1](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.10.0...2.10.1) (2018-03-18)


### Bug Fixes

* **payments:** PAYMENTS-2590 Omitting empty string from billing address ([6c3dcb7](https://github.com/bigcommerce-labs/bigpay-client-js/commit/6c3dcb7))
* **payments:** PAYMENTS-2590 Review Feedback ([689b572](https://github.com/bigcommerce-labs/bigpay-client-js/commit/689b572))
* **travis:** PAYMENTS-2590 Enforce yarn 0.11 in travis ([07f544f](https://github.com/bigcommerce-labs/bigpay-client-js/commit/07f544f))



<a name="2.10.0"></a>
# [2.10.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.9.1...2.10.0) (2018-01-22)


### Features

* **payment:** PAYMENTS-1990 Map vault data to payload ([42c94f6](https://github.com/bigcommerce-labs/bigpay-client-js/commit/42c94f6))



<a name="2.9.1"></a>
## [2.9.1](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.9.0...2.9.1) (2018-01-08)


### Bug Fixes

* **store:** PAYMENTS-1983 Inject 'storeRequestSender' in the correct position as per ([e1d7420](https://github.com/bigcommerce-labs/bigpay-client-js/commit/e1d7420))



<a name="2.9.0"></a>
# [2.9.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.8.0...2.9.0) (2017-11-30)


### Features

* **payment** PAYMENTS-1983 Map shouldSaveIntrument to bigpay equivalent ([1a78a8e](https://github.com/bigcommerce-labs/bigpay-client-js/commit/1a78a8e))

### Bug Fixes

* **common:** CHECKOUT-2702 Bump form-poster to fix callback getting called prematurely ([1189a97](https://github.com/bigcommerce-labs/bigpay-client-js/commit/1189a97))



<a name="2.8.0"></a>
# [2.8.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.7.0...2.8.0) (2017-11-20)


### Features

* **client:** PAYMENTS-1986 Expose store request methods ([2cb4e8b](https://github.com/bigcommerce-labs/bigpay-client-js/commit/2cb4e8b))
* **common:** PAYMENT-1986 Add DELETE method ([072ecaa](https://github.com/bigcommerce-labs/bigpay-client-js/commit/072ecaa))
* **store:** PAYMENTS-1986 Add store instrument mapper ([da62453](https://github.com/bigcommerce-labs/bigpay-client-js/commit/da62453))
* **store:** PAYMENTS-1986 Add store request sender class ([09d1eeb](https://github.com/bigcommerce-labs/bigpay-client-js/commit/09d1eeb))
* **store:** PAYMENTS-1986 Add url helper to new store domain ([d5edcfb](https://github.com/bigcommerce-labs/bigpay-client-js/commit/d5edcfb))



<a name="2.7.0"></a>
# [2.7.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.6.0...2.7.0) (2017-10-18)


### Features

* **payment-mapper:** feat(provider) INT-69 Added variant_id:variantId for Vantiv eCommerce ([6487c2](https://github.com/bigcommerce-labs/bigpay-client-js/commit/6487c2))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.5.0...2.6.0) (2017-09-27)


### Features

* **order:** CHECKOUT-2509 Map shipping method name for CyberSource ([1c1ffca](https://github.com/bigcommerce-labs/bigpay-client-js/commit/1c1ffca))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.2.0...2.5.0) (2017-09-25)


### Features

* **payment:** CHECKOUT-2358 Add extra data for CyberSource ([e29dbf7](https://github.com/bigcommerce-labs/bigpay-client-js/commit/e29dbf7))
* **Payment Mappers:** map BT PayPal Credit to braintree ([44e3183](https://github.com/bigcommerce-labs/bigpay-client-js/commit/44e3183))
* **payment-mapper:** map referrer id to payment if available ([b434b67](https://github.com/bigcommerce-labs/bigpay-client-js/commit/b434b67))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.3.0...2.4.0) (2017-09-20)


### Features

* **Payment Mappers:** map BT PayPal Credit to braintree ([44e3183](https://github.com/bigcommerce-labs/bigpay-client-js/commit/44e3183))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.2.0...2.3.0) (2017-09-04)


### Features

* **payment:** CHECKOUT-2358 Add extra data for CyberSource ([e29dbf7](https://github.com/bigcommerce-labs/bigpay-client-js/commit/e29dbf7))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.1.0...2.2.0) (2017-09-01)


### Features

* **payment:** Map Braintree VisaCheckout to Braintree ([4397abd](https://github.com/bigcommerce-labs/bigpay-client-js/commit/4397abd))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.0.3...2.1.0) (2017-07-03)


### Bug Fixes

* **payment:** Get the host value from config object ([bfb91de](https://github.com/bigcommerce-labs/bigpay-client-js/commit/bfb91de))
* **payment:** Swap gateway and id fields if multi-option provider ([60e23e4](https://github.com/bigcommerce-labs/bigpay-client-js/commit/60e23e4))


### Features

* **payment:** Add BigPay v2 payload mappers ([6424089](https://github.com/bigcommerce-labs/bigpay-client-js/commit/6424089))
* **payment:** Add client token generator and generate client token method ([8add2d7](https://github.com/bigcommerce-labs/bigpay-client-js/commit/8add2d7))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.0.2...2.0.3) (2017-04-18)


### Bug Fixes

* **payment:** PAYMENTS-889 Forward returnUrl of order instead of payment object if possible ([5cfe022](https://github.com/bigcommerce-labs/bigpay-client-js/commit/5cfe022))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.0.1...2.0.2) (2017-04-05)


### Bug Fixes

* **build:** Remove bower.json as it is no longer supported in version >=2 ([8c455ef](https://github.com/bigcommerce-labs/bigpay-client-js/commit/8c455ef))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/bigcommerce-labs/bigpay-client-js/compare/2.0.0...2.0.1) (2017-04-05)

* Bad release



<a name="2.0.0"></a>
# [2.0.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/1.0.0...2.0.0) (2017-04-05)


### Features

* **payment:** PAYMENTS-889 Forward returnUrl to BigPay ([d1bae05](https://github.com/bigcommerce-labs/bigpay-client-js/commit/d1bae05))


### Breaking changes

* **build:** PAYMENTS-221 Export as CommonJS module instead of UMD bundle ([f8f014e](https://github.com/bigcommerce-labs/bigpay-client-js/commit/f8f014e4a88b8216eb5401f72430a28d79575dbb))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/bigcommerce-labs/bigpay-client-js/compare/0.7.0...1.0.0) (2017-02-13)


### Features

* CHECKOUT-1326 Forward billing email address to BigPay ([6614ee3](https://github.com/bigcommerce-labs/bigpay-client-js/commit/6614ee3))
