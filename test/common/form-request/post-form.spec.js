import * as createFormModule from '../../../src/common/form-request/create-form';
import postForm from '../../../src/common/form-request/post-form';

describe('postForm', () => {
    let actionUrl;
    let data;
    let form;

    beforeEach(() => {
        actionUrl = '/pay/initialize';
        data = { id: 'adyen' };
        form = jasmine.createSpyObj('form', ['submit']);

        spyOn(createFormModule, 'default').and.returnValue(form);
    });

    it('should create form', () => {
        const createForm = createFormModule.default;

        postForm(actionUrl, data);

        expect(createForm).toHaveBeenCalledWith(actionUrl, data);
    });

    it('should submit form', () => {
        postForm(actionUrl, data);

        expect(form.submit).toHaveBeenCalled();
    });
});
