import PayloadTransformer from '../../../src/common/http-request/payload-transformer';

describe('PayloadTransformer', () => {
    let payloadTransformer;
    let xhr;

    beforeEach(() => {
        xhr = {
            getResponseHeader: (type) => {
                switch (type) {
                case 'Content-Type':
                    return 'application/json';

                case 'Content-Language':
                    return 'en';

                default:
                    return null;
                }
            },
            getAllResponseHeaders: () => 'Content-Type:application/json\nContent-Language:en',
            response: '{ "message": "foobar" }',
            status: 200,
            statusText: 'OK',
        };

        payloadTransformer = new PayloadTransformer();
    });

    it('creates an instance of PayloadTransformer', () => {
        const instance = PayloadTransformer.create();

        expect(instance instanceof PayloadTransformer).toBeTruthy();
    });

    it('parses the response payload as JSON if its content type is JSON', () => {
        expect(payloadTransformer.fromResponse(xhr)).toEqual({
            data: { message: 'foobar' },
            headers: {
                'content-language': 'en',
                'content-type': 'application/json',
            },
            status: 200,
            statusText: 'OK',
        });
    });

    it('omits empty lines within the request headers', () => {
        const xhrWithEmptyLinesInHeader = { ...xhr, getAllResponseHeaders: () => '\nContent-Type:application/json\n\n\nContent-Language:en\n' };

        expect(payloadTransformer.fromResponse(xhrWithEmptyLinesInHeader).headers).toEqual({
            'content-language': 'en',
            'content-type': 'application/json',
        });
    });

    it('parses "responseText" field if the browser does not support "response" field', () => {
        delete xhr.response;

        xhr.responseText = '{ "message": "foobar" }';

        expect(payloadTransformer.fromResponse(xhr)).toEqual({
            data: { message: 'foobar' },
            headers: {
                'content-language': 'en',
                'content-type': 'application/json',
            },
            status: 200,
            statusText: 'OK',
        });
    });

    it('converts the request payload to JSON if it is JSON', () => {
        const payload = '<p>Hello world</p>';

        expect(payloadTransformer.toRequest(payload, 'application/json')).toEqual(JSON.stringify(payload));
    });

    it('does not convert the request payload to JSON if it is not JSON', () => {
        const payload = { message: 'foobar' };

        expect(payloadTransformer.toRequest(payload, 'text/html')).toEqual(payload);
    });

    it('does not do any conversion if the request payload is empty', () => {
        expect(payloadTransformer.toRequest()).toEqual();
    });
});
