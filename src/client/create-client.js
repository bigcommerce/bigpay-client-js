import Client from './client';

/**
 * Create client
 * @param {Object} config
 * @returns {Client}
 */
export function createClient(config) {
    return new Client(config);
}
