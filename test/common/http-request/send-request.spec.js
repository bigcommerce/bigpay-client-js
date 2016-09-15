import sendRequest from '../../../src/common/http-request/send-request';
import * as createRequestModule from '../../../src/common/http-request/create-request';

describe('sendRequest', () => {
    let data;
    let options;
    let Promise;
    let PromiseMock;
    let rejectPromise;
    let resolvePromise;
    let url;
    let xhr;

    beforeEach(() => {
        data = { body: 'hello world' };
        options = { method: 'POST' };
        Promise = global.Promise;
        rejectPromise = jasmine.createSpy('reject');
        resolvePromise = jasmine.createSpy('resolve');
        url = '/endpoint';
        xhr = jasmine.createSpyObj('xhr', ['getResponseHeader', 'send']);

        spyOn(createRequestModule, 'default').and.callFake((xhrUrl, xhrOptions, { onload, onerror }) => {
            xhr.onerror = () => onerror(xhr);
            xhr.onload = () => onload(xhr);

            return xhr;
        });

        PromiseMock = function PromiseMockConstructor(closure) {
            closure(resolvePromise, rejectPromise);
        };

        global.Promise = PromiseMock;
    });

    afterEach(() => {
        global.Promise = Promise;
    });

    it('should create XHR', () => {
        const { default: createRequest } = createRequestModule;

        const callbacks = {
            onerror: jasmine.any(Function),
            onload: jasmine.any(Function),
        };

        const expectedOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: options.method,
        };

        sendRequest(url, data, options);

        expect(createRequest).toHaveBeenCalledWith(url, expectedOptions, callbacks);
    });

    it('should send XHR with payload', () => {
        sendRequest(url, data, options);

        expect(xhr.send).toHaveBeenCalled();
    });

    it('should resolve promise if successful', () => {
        sendRequest(url, data, options);

        xhr.status = 200;
        xhr.onload();

        expect(resolvePromise).toHaveBeenCalled();
    });

    it('should reject promise if unsuccessful', () => {
        sendRequest(url, data, options);

        xhr.status = 400;
        xhr.onload();

        expect(rejectPromise).toHaveBeenCalled();
    });

    it('should parse response body as JSON if content type is JSON', () => {
        sendRequest(url, data, options);

        xhr.getResponseHeader.and.returnValue('application/json');
        xhr.response = '{ "success": true }';
        xhr.status = 200;
        xhr.onload();

        expect(resolvePromise).toHaveBeenCalledWith(jasmine.objectContaining({
            data: { success: true },
            status: 200,
        }));
    });
});
