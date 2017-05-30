import _ from 'lodash';
// Source: http://emailregex.com/
// tslint:disable-next-line:max-line-length
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isValid(regexPattern) {
    return (value) => regexPattern.test(value);
}
export function isNotEmpty(value) {
    return !_.isNull(value) && !_.isUndefined(value) && !_.isEmpty(value);
}
export const isEmailValid = isValid(EMAIL_PATTERN);
//# sourceMappingURL=validation.js.map