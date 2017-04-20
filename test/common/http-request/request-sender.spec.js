import RequestFactory from '../../../src/common/http-request/request-factory';
import RequestSender from '../../../src/common/http-request/request-sender';
import PayloadTransformer from '../../../src/common/http-request/payload-transformer';

describe('RequestSender', () => {
    let data;
    let options;
    let payloadTransformer;
    let requestFactory;
    let requestSender;
    let url;

    beforeEach(() => {
        data = { body: 'hello world' };
        options = { method: 'POST' };
        url = '/endpoint';

        jasmine.Ajax.install();

        requestFactory = new RequestFactory();
        payloadTransformer = new PayloadTransformer();
        requestSender = new RequestSender(requestFactory, payloadTransformer);
    });

    afterEach(() => {
        jasmine.Ajax.uninstall();
    });

    it('creates an instance of RequestSender', () => {
        const instance = RequestSender.create();

        expect(instance instanceof RequestSender).toBeTruthy();
    });

    it('creates a XHR', () => {
        spyOn(requestFactory, 'createRequest').and.callThrough();

        requestSender.sendRequest(url, data, options);

        const expectedOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: options.method,
        };

        expect(requestFactory.createRequest).toHaveBeenCalledWith(url, expectedOptions, jasmine.any(Function));
    });

    it('posts the XHR', () => {
        spyOn(requestSender, 'sendRequest');

        const callback = () => {};

        requestSender.postRequest(url, data, options, callback);

        expect(requestSender.sendRequest).toHaveBeenCalledWith('/endpoint', data, { method: 'POST' }, callback);
    });

    it('sends the XHR with a payload', () => {
        requestSender.sendRequest(url, data, options);

        const request = jasmine.Ajax.requests.mostRecent();

        expect(request.url).toEqual(url);
        expect(request.method).toEqual(options.method);
        expect(request.data()).toEqual(data);
    });

    it('returns the response in the callback if the request is successful', (done) => {
        requestSender.sendRequest(url, data, options, (err, resp) => {
            expect(resp).toBeDefined();
            done();
        });

        const request = jasmine.Ajax.requests.mostRecent();

        request.respondWith({
            responseText: '{ "message": "foobar" }',
            status: 200,
        });
    });

    it('returns the error in the callback if the request is unsuccessful', (done) => {
        requestSender.sendRequest(url, data, options, (err) => {
            expect(err).toBeDefined();
            done();
        });

        const request = jasmine.Ajax.requests.mostRecent();

        request.respondWith({ status: 400 });
    });

    it('does not throw an error if no callback is provided', () => {
        expect(() => {
            requestSender.sendRequest(url, data, options);

            const request = jasmine.Ajax.requests.mostRecent();

            request.respondWith({ status: 200 });
        }).not.toThrow();
    });
});
