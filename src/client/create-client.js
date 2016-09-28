import Client from './client';

/**
 * Create client
 * @param {Object} config
 * @returns {Client}
 */
export default function createClient(config) {
    return new Client(config);
}
