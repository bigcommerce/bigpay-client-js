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
        XMLHttpRequestMock.prototype.open = jasmine.createSpy('open');
        XMLHttpRequestMock.prototype.setRequestHeader = jasmine.createSpy('setRequestHeader');

        XMLHttpRequest = global.XMLHttpRequest;
        global.XMLHttpRequest = XMLHttpRequestMock;

        requestFactory = new RequestFactory();
    });

    afterEach(() => {
        global.XMLHttpRequest = XMLHttpRequest;
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
});
