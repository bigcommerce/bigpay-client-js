import { validate } from '../../common/validation';

/**
 * Validate store data
 * @param {StoreData} storeData
 * @returns {Object}
 */
export default function validateOrder(storeData) {
    return validate(storeData, {
        storeHash: ['required'],
        storeId: ['required'],
    });
}
