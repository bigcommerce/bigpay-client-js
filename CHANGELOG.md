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
