import sendRequest from '../../../src/common/http-request/send-request';
import * as createRequestModule from '../../../src/common/http-request/create-request';

describe('sendRequest', () => {
    let data;
    let options;
    let url;

    beforeEach(() => {
        data = { body: 'hello world' };
        options = { method: 'POST' };
        url = '/endpoint';

        spyOn(createRequestModule, 'default').and.callThrough();

        jasmine.Ajax.install();
    });

    afterEach(() => {
        jasmine.Ajax.uninstall();
    });

    it('should create XHR', () => {
        const { default: createRequest } = createRequestModule;

        const expectedOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: options.method,
        };

        sendRequest(url, data, options);

        expect(createRequest).toHaveBeenCalledWith(url, expectedOptions, jasmine.any(Function));
    });

    it('should send XHR with payload', () => {
        sendRequest(url, data, options);

        const request = jasmine.Ajax.requests.mostRecent();

        expect(request.url).toEqual(url);
        expect(request.method).toEqual(options.method);
        expect(request.data()).toEqual(data);
    });

    it('should return response in callback if successful', done => {
        sendRequest(url, data, options, (err, resp) => {
            expect(resp).toBeDefined();
            done();
        });

        const request = jasmine.Ajax.requests.mostRecent();

        request.respondWith({
            responseText: '{ "message": "foobar" }',
            status: 200,
        });
    });

    it('should return error in callback if unsuccessful', done => {
        sendRequest(url, data, options, err => {
            expect(err).toBeDefined();
            done();
        });

        const request = jasmine.Ajax.requests.mostRecent();

        request.respondWith({ status: 400 });
    });

    it('should parse response body as JSON if content type is JSON', done => {
        sendRequest(url, data, options, (err, resp) => {
            expect(resp).toEqual({
                data: { message: 'foobar' },
                status: 200,
                statusText: 'OK',
            });

            done();
        });

        const request = jasmine.Ajax.requests.mostRecent();

        request.respondWith({
            responseText: '{ "message": "foobar" }',
            status: 200,
            statusText: 'OK',
        });
    });
});
