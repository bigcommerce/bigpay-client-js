import paymentRequestDataMock from '../../../mocks/payment-request-data';
import StoreMapper from '../../../../src/payment/v2/payment-mappers/store-mapper';

describe('StoreMapper', () => {
    let data;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        storeMapper = new StoreMapper();
    });

    it('creates an instance of StoreMapper', () => {
        const instance = StoreMapper.create();

        expect(instance instanceof StoreMapper).toBeTruthy();
    });

    it('maps the input data into a store object', () => {
        const output = storeMapper.mapToStore(data);

        expect(output).toEqual({
            locale: {
                country_code: data.store.countryCode,
                currency_code: data.store.currencyCode,
                language_code: data.store.storeLanguage,
            },
            store_identity: {
                id: parseInt(data.store.storeId, 10),
                name: data.store.storeName,
            },
            urls: {
                cart: data.store.cartLink,
                checkout: data.store.checkoutLink,
                confirmation: data.store.orderConfirmationLink,
                home: data.store.shopPath,
            },
        });
    });

    it('returns an empty object if the input does not contain store information', () => {
        const output = storeMapper.mapToStore({});

        expect(output).toEqual({
            locale: {},
            store_identity: {},
            urls: {},
        });
    });
});
