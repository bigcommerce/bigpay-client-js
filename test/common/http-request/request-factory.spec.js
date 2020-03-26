import omit from 'lodash/omit';
import RequestFactory from '../../../src/common/http-request/request-factory';

describe('RequestFactory', () => {
    let options;
    let requestFactory;
    let url;
    let XMLHttpRequest;
    let XMLHttpRequestMock;

    beforeEach(() => {
        options = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        };
        url = '/endpoint';

        XMLHttpRequestMock = function XMLHttpRequestMockConstructor() {};
        XMLHttpRequestMock.prototype.open = jest.fn();
        XMLHttpRequestMock.prototype.setRequestHeader = jest.fn();

        XMLHttpRequest = global.XMLHttpRequest;
        global.XMLHttpRequest = XMLHttpRequestMock;

        requestFactory = new RequestFactory();
    });

    afterEach(() => {
        global.XMLHttpRequest = XMLHttpRequest;
    });

    it('creates an instance of RequestFactory', () => {
        const instance = RequestFactory.create();

        expect(instance instanceof RequestFactory).toBeTruthy();
    });

    it('creates a XHR', () => {
        const xhr = requestFactory.createRequest(url, options);

        expect(xhr.constructor).toEqual(XMLHttpRequestMock);
    });

    it('sets the URL for the XHR', () => {
        const xhr = requestFactory.createRequest(url, options);

        expect(xhr.open).toHaveBeenCalledWith(options.method, url, true);
    });

    it('sets the request headers for the XHR', () => {
        const xhr = requestFactory.createRequest(url, options);

        expect(xhr.setRequestHeader).toHaveBeenCalledWith('Content-Type', options.headers['Content-Type']);
    });

    it('does not set request headers if there are none', () => {
        const xhr = requestFactory.createRequest(url, omit(options, 'headers'));

        expect(xhr.setRequestHeader).not.toHaveBeenCalled();
    });

    it('returns an error to the callback if XHR fails to complete', (done) => {
        const statusText = 'Not found';
        const xhr = requestFactory.createRequest(url, options, (err) => {
            expect(err instanceof Error).toEqual(true);
            expect(err.message).toEqual(statusText);
            done();
        });

        xhr.statusText = statusText;
        xhr.onerror();
    });

    it('triggers the callback if XHR is successful', () => {
        const callback = jest.fn();
        const xhr = requestFactory.createRequest(url, options, callback);

        xhr.onload();

        expect(callback).toHaveBeenCalledWith();
    });

    it('does not throw an error if no callback is provided', () => {
        expect(() => {
            const xhr = requestFactory.createRequest(url, options);

            xhr.onload();
            xhr.onerror();
        }).not.toThrow();
    });
});
