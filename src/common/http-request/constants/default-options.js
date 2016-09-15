import { APPLICATION_JSON } from './content-types';
import { GET } from './method-types';

const DEFAULT_OPTIONS = {
    headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
    },
    method: GET,
};

export default DEFAULT_OPTIONS;
