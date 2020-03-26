import StoreRequestSender from '../../src/store/store-request-sender';
import { instrumentRequestDataMock } from '../mocks/store-instrument-data';
import * as mappers from '../../src/store/v2/mappers';

describe('StoreRequestSender', () => {
    let data;
    let requestSenderMock;
    let storeRequestSender;
    let urlHelperMock;

    beforeEach(() => {
        data = instrumentRequestDataMock;

        jest.spyOn(mappers, 'mapToHeaders');
        jest.spyOn(mappers, 'mapToInstrumentPayload');
        jest.spyOn(mappers, 'mapToTrustedShippingAddressPayload');

        urlHelperMock = {
            getTokenUrl: jest.fn(),
            getInstrumentsUrl: jest.fn(),
            getInstrumentByIdUrl: jest.fn(),
            getTrustedShippingAddressUrl: jest.fn(),
        };

        requestSenderMock = {
            postRequest: jest.fn(),
            sendRequest: jest.fn(),
        };

        storeRequestSender = new StoreRequestSender(urlHelperMock, requestSenderMock);
    });

    it('creates an instance of StoreRequestSender', () => {
        const config = { host: 'https://bigpay.dev' };
        const instance = StoreRequestSender.create(config);

        expect(instance instanceof StoreRequestSender).toBeTruthy();
    });

    it('request a shopper instrument with the appropriately mapped headers', () => {
        storeRequestSender.loadInstruments(data, () => {});

        expect(urlHelperMock.getInstrumentsUrl).toHaveBeenCalledWith(
            data.storeId,
            data.customerId,
            data.currencyCode,
        );
        expect(requestSenderMock.sendRequest).toHaveBeenCalled();
        expect(mappers.mapToHeaders).toHaveBeenCalled();
    });

    it('posts a trusted shipping address with the appropriately mapped headers and payload', () => {
        storeRequestSender.loadInstrumentsWithAddress(data, () => {});

        expect(urlHelperMock.getTrustedShippingAddressUrl).toHaveBeenCalledWith(
            data.storeId,
            data.customerId,
            data.currencyCode,
        );
        expect(requestSenderMock.postRequest).toHaveBeenCalled();
        expect(mappers.mapToHeaders).toHaveBeenCalled();
        expect(mappers.mapToTrustedShippingAddressPayload).toHaveBeenCalled();
    });

    it('requests the deletion of a shopper\'s payment instrument', () => {
        storeRequestSender.deleteShopperInstrument(data, () => {});

        expect(urlHelperMock.getInstrumentByIdUrl).toHaveBeenCalledWith(
            data.storeId,
            data.customerId,
            data.instrumentId,
            data.currencyCode,
        );
        expect(requestSenderMock.sendRequest).toHaveBeenCalled();
        expect(mappers.mapToHeaders).toHaveBeenCalled();
    });
});
