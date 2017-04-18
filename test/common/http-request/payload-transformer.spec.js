import PayloadTransformer from '../../../src/common/http-request/payload-transformer';

describe('PayloadTransformer', () => {
    let payloadTransformer;

    beforeEach(() => {
        payloadTransformer = new PayloadTransformer();
    });

    it('parses the response payload as JSON if its content type is JSON', () => {
        const xhr = {
            getResponseHeader: jasmine.createSpy('getResponseHeader').and.callFake(type => (
                type === 'Content-Type' ? 'application/json' : null
            )),
            response: '{ "message": "foobar" }',
            status: 200,
            statusText: 'OK',
        };

        expect(payloadTransformer.fromResponse(xhr)).toEqual({
            data: { message: 'foobar' },
            status: 200,
            statusText: 'OK',
        });
    });

    it('parses "responseText" field if the browser does not support "response" field', () => {
        const xhr = {
            getResponseHeader: jasmine.createSpy('getResponseHeader').and.callFake(type => (
                type === 'Content-Type' ? 'application/json' : null
            )),
            responseText: '{ "message": "foobar" }',
            status: 200,
            statusText: 'OK',
        };

        expect(payloadTransformer.fromResponse(xhr)).toEqual({
            data: { message: 'foobar' },
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
