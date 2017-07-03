import Client from './client/client';

/**
 * @param {Object} [config]
 * @returns {Client}
 */
export function createClient(config) {
    return Client.create(config);
}
