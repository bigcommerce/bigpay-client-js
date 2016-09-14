import createRequest from '../../../src/common/http-request/create-request';

describe('createRequest', () => {
    let options;
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
    });

    afterEach(() => {
        global.XMLHttpRequest = XMLHttpRequest;
    });

    it('should create XHR', () => {
        const xhr = createRequest(url, options);

        expect(xhr.constructor).toEqual(XMLHttpRequestMock);
    });

    it('should configure XHR', () => {
        const xhr = createRequest(url, options);

        expect(xhr.open).toHaveBeenCalledWith(options.method, url, true);
        expect(xhr.setRequestHeader).toHaveBeenCalledWith('Content-Type', options.headers['Content-Type']);
    });
});
