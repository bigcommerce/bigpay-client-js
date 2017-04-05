"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsitePaymentUrl = getOffsitePaymentUrl;
exports.getPaymentUrl = getPaymentUrl;
/**
 * Get offsite payment URL
 * @param {string} host
 * @returns {string}
 */
function getOffsitePaymentUrl(host) {
  return host + "/pay/initialize";
}

/**
 * Payment URL
 * @param {string} host
 * @returns {string}
 */
function getPaymentUrl(host) {
  return host + "/api/public/v1/orders/payments";
}
//# sourceMappingURL=urls.js.map