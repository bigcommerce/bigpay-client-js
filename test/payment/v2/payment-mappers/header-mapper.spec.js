import paymentRequestDataMock from '../../../mocks/payment-request-data';
import HeaderMapper from '../../../../src/payment/v2/payment-mappers/header-mapper';

describe('HeaderMapper', () => {
    let data;
    let headerMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        headerMapper = new HeaderMapper();
    });

    it('creates an instance of HeaderMapper', () => {
        const instance = HeaderMapper.create();

        expect(instance instanceof HeaderMapper).toBeTruthy();
    });

    it('maps the input data into a HTTP header object', () => {
        const output = headerMapper.mapToHeaders(data);

        expect(output).toEqual({
            Authorization: data.authToken,
        });
    });

    it('returns an empty object if the input does not contain HTTP header information', () => {
        const output = headerMapper.mapToHeaders({});

        expect(output).toEqual({});
    });
});
