/**
 * @typedef {Object} PaymentRequestData
 * @param {string} authToken
 * @param {AddressData} billingAddress
 * @param {CartData} cart
 * @param {CustomerData} customer
 * @param {OrderData} order
 * @param {OrderMetaData} orderMeta
 * @param {PaymentData} payment
 * @param {PaymentMethodData} paymentMethod
 * @param {AddressData} shippingAddress
 * @param {StoreData} store
 */

/**
 * @typedef {Object} AddressData
 * @param {string} addressLine1
 * @param {string} addressLine2
 * @param {string} city
 * @param {string} company
 * @param {string} country
 * @param {string} countryCode
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} phone
 * @param {string} postCode
 * @param {string} province
 */

/**
 * @typedef {Object} CartData
 * @param {string} currency
 * @param {Object} grandTotal
 * @param {number} grandTotal.integerAmount
 * @param {Object} handling
 * @param {number} handling.amount
 * @param {string} id
 * @param {ItemData[]} items
 * @param {Object} shipping
 * @param {number} shipping.amount
 * @param {Object} subTotal
 * @param {number} subTotal.amount
 * @param {Object} taxTotal
 * @param {number} taxTotal.amount
 */

/**
 * @typedef {Object} CustomerData
 * @param {string} customerId
 */

/**
 * @typedef {Object} ItemData
 * @param {number} amount
 * @param {number} quantity
 * @param {string} id
 * @param {string} name
 * @param {string} sku
 */

/**
 * @typedef {Object} OrderData
 * @param {string} orderId
 */

/**
 * @typedef {Object} OrderMetaData
 * @param {string} geoCountryCode
 */

/**
 * @typedef {Object} PaymentData
 * @param {string} ccCvv
 * @param {Object} ccExpiry
 * @param {number} ccExpiry.month
 * @param {number} ccExpiry.year
 * @param {string} ccName
 * @param {string} ccNumber
 */

/**
 * @typedef {Object} PaymentMethodData
 * @param {string} id
 * @param {string} type
 */

/**
 * @typedef {Object} StoreData
 * @param {string} storeHash
 * @param {string} storeName
 * @param {string} storeId
 */
