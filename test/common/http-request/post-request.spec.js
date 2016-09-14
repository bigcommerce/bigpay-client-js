import postRequest from '../../../src/common/http-request/post-request';
import * as sendRequestModule from '../../../src/common/http-request/send-request';

describe('postRequest', () => {
    let data;
    let options;
    let url;

    beforeEach(() => {
        data = { body: 'hello world' };
        options = {};
        url = '/endpoint';

        spyOn(sendRequestModule, 'default');
    });

    it('should post XHR', () => {
        const sendRequest = sendRequestModule.default;

        postRequest(url, data, options);

        expect(sendRequest).toHaveBeenCalledWith('/endpoint', data, { method: 'POST' });
    });
});
