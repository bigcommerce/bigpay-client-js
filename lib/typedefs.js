/**
 * @typedef {Object} PaymentRequestData
 * @property {string} authToken
 * @property {AddressData} billingAddress
 * @property {CartData} cart
 * @property {CustomerData} customer
 * @property {OrderData} order
 * @property {PaymentData} payment
 * @property {PaymentMethodData} paymentMethod
 * @property {QuoteMetaData} quoteMeta
 * @property {AddressData} shippingAddress
 * @property {ShippingData} shippingOption
 * @property {StoreData} store
 */

/**
 * @typedef {Object} AddressData
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} city
 * @property {string} company
 * @property {string} country
 * @property {string} countryCode
 * @property {?string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} phone
 * @property {string} postCode
 * @property {string} province
 * @property {string} provinceCode
 */

/**
 * @typedef {Object} CartData
 * @property {ItemData[]} items
 */

/**
 * @typedef {Object} CustomerData
 * @property {string} customerId
 * @property {string} firstName
 * @property {string} lastName
 */

/**
 * @typedef {Object} ItemData
 * @property {string} id
 * @property {number} integerAmount
 * @property {string} name
 * @property {number} quantity
 * @property {string} sku
 */

/**
 * @typedef {Object} OrderData
 * @property {Object} [coupon]
 * @property {number} coupon.discountedAmount
 * @property {CouponData[]} coupon.coupons
 * @property {Object} grandTotal
 * @property {number} grandTotal.integerAmount
 * @property {Object} handling
 * @property {number} handling.integerAmount
 * @property {Object} shipping
 * @property {number} shipping.integerAmount
 * @property {Object} subtotal
 * @property {number} subtotal.integerAmount
 * @property {Object} taxTotal
 * @property {string} currency
 * @property {string} orderId
 * @property {number} taxTotal.integerAmount
 * @property {string} token
 * @property {string} [callbackUrl]
 * @property {Object} [payment]
 * @property {string} [payment.returnUrl]
 */

/**
 * @typedef {Object} CouponData
 * @property {string} code
 * @property {string} discount
 * @property {string} discountType
 */

/**
 * @typedef {Object} PaymentData
 * @property {string} ccCvv
 * @property {Object} ccExpiry
 * @property {number} ccExpiry.month
 * @property {number} ccExpiry.year
 * @property {string} ccName
 * @property {string} ccNumber
 * @property {?boolean} shouldSaveInstrument
 * @property {?string} instrumentId
 */

/**
 * @typedef {Object} PaymentMethodData
 * @property {string} id
 * @property {string} type
 * @property {string} [gateway]
 * @property {string} [nonce]
 */

/**
 * @typedef {Object} QuoteMetaData
 * @property {Object} request
 * @property {string} request.deviceSessionId
 * @property {string} request.geoCountryCode
 * @property {string} request.sessionHash
 */

/**
 * @typedef {Object} StoreData
 * @property {string} storeHash
 * @property {string} storeId
 * @property {string} storeLanguage
 * @property {string} storeName
 */

/**
 * @typedef {Object} ShippingData
 * @property {string} description
 * @property {string} formattedPrice
 * @property {string} id
 * @property {string} imageUrl
 * @property {number} method
 * @property {string} module
 * @property {number} price
 * @property {boolean} selected
 * @property {string} transitTime
 */

/**
 * @typedef {Object} Coupon
 * @property {string} code
 */

/**
  * @typedef {Object} Shipping
  * @property {string} method
  */

/**
 * @typedef {Object} ThreeDSecure
 * @property {string} version
 * @property {string} status
 * @property {string} vendor
 * @property {string} cavv
 * @property {string} eci
 * @property {string} xid
 */

/**
 * @typedef {Object} CreditCard
 * @property {string} cardholderName
 * @property {string} number
 * @property {number} month
 * @property {number} year
 * @property {string} verificationCode
 * @property {number} issueMonth
 * @property {number} issueYear
 * @property {number} issueNumber
 * @property {string} trackData
 * @property {boolean} isManualEntry
 * @property {string} iccData
 * @property {string} fallbackReason
 * @property {boolean} isContactless
 * @property {string} encryptedPinCryptogram
 * @property {string} encryptedPinKsn
 * @property {ThreeDSecure} threeDSecure
 */
"use strict";
//# sourceMappingURL=typedefs.js.map