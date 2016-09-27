import createForm from './create-form';

/**
 * Post form
 * @param {string} url
 * @param {Object} data
 * @returns {Promise}
 */
export default function postForm(url, data) {
    const form = createForm(url, data);

    form.submit();

    return new Promise(resolve => {
        window.addEventListener('beforeunload', function handleBeforeUnload() {
            window.removeEventListener('beforeunload', handleBeforeUnload);

            resolve();
        });
    });
}
