import xhrMock from 'xhr-mock';
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

        xhrMock.setup();

        requestFactory = new RequestFactory();
        payloadTransformer = new PayloadTransformer();
        requestSender = new RequestSender(requestFactory, payloadTransformer);
    });

    afterEach(() => {
        xhrMock.teardown();
    });

    it('creates an instance of RequestSender', () => {
        const instance = RequestSender.create();

        expect(instance instanceof RequestSender).toBeTruthy();
    });

    it('creates a XHR', () => {
        jest.spyOn(requestFactory, 'createRequest');

        xhrMock.post(url, (req, res) => res.status(200));

        requestSender.sendRequest(url, data, options);

        const expectedOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: options.method,
        };

        expect(requestFactory.createRequest).toHaveBeenCalledWith(url, expectedOptions, expect.any(Function));
    });

    it('posts the XHR', () => {
        jest.spyOn(requestSender, 'sendRequest').mockImplementation(() => {});

        const callback = () => {};

        requestSender.postRequest(url, data, options, callback);

        expect(requestSender.sendRequest).toHaveBeenCalledWith('/endpoint', data, { method: 'POST' }, callback);
    });

    it('sends the XHR with a payload', () => {
        expect.assertions(3);

        xhrMock.post(url, (req, res) => {
            expect(req.url().path).toEqual(url);
            expect(req.method()).toEqual(options.method);
            expect(JSON.parse(req.body())).toEqual(data);

            return res.status(200);
        });

        requestSender.sendRequest(url, data, options);
    });

    it('returns the response in the callback if the request is successful', (done) => {
        xhrMock.post(url, (req, res) => res.status(200).body('{ "message": "foobar" }'));

        requestSender.sendRequest(url, data, options, (err, resp) => {
            expect(resp).toBeDefined();
            done();
        });
    });

    it('returns the error in the callback if the request is unsuccessful', (done) => {
        xhrMock.post(url, (req, res) => res.status(400));

        requestSender.sendRequest(url, data, options, (err) => {
            expect(err).toBeDefined();
            done();
        });
    });

    it('does not throw an error if no callback is provided', () => {
        expect(() => {
            xhrMock.post(url, (req, res) => res.status(200));

            requestSender.sendRequest(url, data, options);
        }).not.toThrow();
    });
});
