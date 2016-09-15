import { capitalize } from '../utils';
import * as validators from './validators';

/**
 * Get validator
 * @param {string} validatorName
 * @returns {Function|void}
 */
function getValidator(validatorName) {
    const validateFunctionName = `validate${capitalize(validatorName)}`;

    return validators[validateFunctionName];
}

/**
 * Validate field
 * @param {*} fieldData
 * @param {string[]} fieldRules
 * @returns {Object}
 */
function validateField(fieldData, fieldRules) {
    return fieldRules.reduce((result, validatorName) => {
        const validator = getValidator(validatorName);

        if (validator) {
            result[validatorName] = validator(fieldData);
        }

        return result;
    }, {});
}

/**
 * Validate
 * @param {Object} data
 * @param {Object|string[]} rules
 * @returns {Object}
 */
export default function validate(data, rules) {
    const result = {};

    Object.keys(rules).forEach(key => {
        const fieldData = data[key];
        const fieldRules = rules[key];

        if (Array.isArray(fieldRules)) {
            result[key] = validateField(fieldData, fieldRules);
        } else {
            result[key] = validate(fieldData, fieldRules);
        }
    });

    return result;
}
