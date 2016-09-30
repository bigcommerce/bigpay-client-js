import createForm from './create-form';

/**
 * Post form
 * @param {string} url
 * @param {Object} data
 * @param {Function} [callback]
 * @returns {void}
 */
export default function postForm(url, data, callback = () => {}) {
    const form = createForm(url, data);

    form.submit();

    window.addEventListener('beforeunload', function handleBeforeUnload() {
        window.removeEventListener('beforeunload', handleBeforeUnload);

        callback();
    });
}
