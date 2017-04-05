'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createClient;

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create client
 * @param {Object} config
 * @returns {Client}
 */
function createClient(config) {
  return new _client2.default(config);
}
//# sourceMappingURL=create-client.js.map