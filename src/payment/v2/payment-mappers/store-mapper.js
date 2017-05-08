import { omitNil, toNumber } from '../../../common/utils';

export default class StoreMapper {
    /**
     * @returns {StoreMapper}
     */
    static create() {
        return new StoreMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToStore(data) {
        return omitNil({
            locale: this.mapToLocale(data),
            store_identity: this.mapToIdentity(data),
            urls: this.mapToUrls(data),
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToLocale(data) {
        const { store = {} } = data;

        return omitNil({
            country_code: store.countryCode,
            currency_code: store.currencyCode,
            language_code: store.storeLanguage,
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToIdentity(data) {
        const { store = {} } = data;

        return omitNil({
            id: store.storeId ? toNumber(store.storeId) : null,
            name: store.storeName,
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToUrls(data) {
        const { store = {} } = data;

        return omitNil({
            cart: store.cartLink,
            checkout: store.checkoutLink,
            confirmation: store.orderConfirmationLink,
            home: store.shopPath,
        });
    }
}
