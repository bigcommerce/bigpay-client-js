'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;

var _client = require('./client/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Object} [config]
 * @returns {Client}
 */
function createClient(config) {
  return _client2.default.create(config);
}
//# sourceMappingURL=index.js.map