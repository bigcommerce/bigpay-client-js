import { MULTI_OPTION } from '../payment-method-types';
import {
    BIGCOMMERCE_PAYMENTS,
    BIGCOMMERCE_PAYMENTS_PAYLATER,
    BIGCOMMERCE_PAYMENTS_CREDIT_CARDS,
    BIGCOMMERCE_PAYMENTS_FASTLANE,
    BIGCOMMERCE_PAYMENTS_APMS,
    BIGCOMMERCE_PAYMENTS_VENMO,
    BRAINTREE,
    BRAINTREE_GOOGLEPAY,
    BRAINTREE_PAYPAL,
    BRAINTREE_PAYPAL_CREDIT,
    BRAINTREE_VISACHECKOUT,
    BRAINTREE_LOCAL_METHODS,
    BRAINTREE_ACH,
    BRAINTREE_ACCELERATED_CHECKOUT,
    PAYPAL_COMMERCE,
    PAYPAL_COMMERCE_CREDIT,
    PAYPAL_COMMERCE_CREDIT_CARDS,
    PAYPAL_COMMERCE_ACCELERATED_CHECKOUT,
    PAYPAL_COMMERCE_ALTERNATIVE_METHODS,
    PAYPAL_COMMERCE_VENMO,
} from '../payment-method-ids';

/**
 * @param {string} id
 * @return {Boolean}
 */
function isBraintreePaymentMethod(id) {
    switch (id) {
    case BRAINTREE_PAYPAL:
    case BRAINTREE_PAYPAL_CREDIT:
    case BRAINTREE_VISACHECKOUT:
    case BRAINTREE_GOOGLEPAY:
    case BRAINTREE_ACH:
    case BRAINTREE_LOCAL_METHODS:
    case BRAINTREE_ACCELERATED_CHECKOUT:
        return true;
    default:
        return false;
    }
}

/**
 * @param {string} id
 * @return {Boolean}
 */
function isPaypalCommercePaymentMethod(id) {
    switch (id) {
    case PAYPAL_COMMERCE_CREDIT:
    case PAYPAL_COMMERCE_CREDIT_CARDS:
    case PAYPAL_COMMERCE_ACCELERATED_CHECKOUT:
    case PAYPAL_COMMERCE_ALTERNATIVE_METHODS:
    case PAYPAL_COMMERCE_VENMO:
        return true;
    default:
        return false;
    }
}

/**
 * @param {string} id
 * @return {Boolean}
 */
function isBigCommercePaymentsPaymentMethod(id) {
    switch (id) {
    case BIGCOMMERCE_PAYMENTS:
    case BIGCOMMERCE_PAYMENTS_PAYLATER:
    case BIGCOMMERCE_PAYMENTS_CREDIT_CARDS:
    case BIGCOMMERCE_PAYMENTS_FASTLANE:
    case BIGCOMMERCE_PAYMENTS_APMS:
    case BIGCOMMERCE_PAYMENTS_VENMO:
        return true;
    default:
        return false;
    }
}

export default class PaymentMethodIdMapper {
    /**
     * @returns {PaymentMethodIdMapper}
     */
    static create() {
        return new PaymentMethodIdMapper();
    }

    /**
     * @param {PaymentMethod} paymentMethod
     * @returns {string}
     */
    mapToId(paymentMethod) {
        let { id } = paymentMethod;

        if (paymentMethod.method === MULTI_OPTION) {
            id = paymentMethod.gateway;
        }

        if (isBraintreePaymentMethod(id)) {
            return BRAINTREE;
        }

        if (isPaypalCommercePaymentMethod(id)) {
            return PAYPAL_COMMERCE;
        }

        if (isBigCommercePaymentsPaymentMethod(id)) {
            return BIGCOMMERCE_PAYMENTS;
        }

        return id;
    }
}
