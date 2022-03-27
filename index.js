module.exports = {
  // Variables
  _with: {},
  _message: '',
  _status: 200,

  /**
   * add `message` parameter to response
   * @param msg
   * @returns {exports}
   */
  message(msg) {
    this._message = msg;
    return this;
  },

  /**
   * Set status of response
   * @param code
   * @returns {exports}
   */
  status(code) {
    this._status = code;
    return this;
  },

  /**
   * Additional parameters for response
   * @param payload
   * @returns {exports}
   */
  with(payload) {
    this._with = payload;
    return this;
  },

  /**
   * Return json directly
   * @param payload
   * @param status
   * @returns {exports}
   */
  json(payload, status = 200) {
    return {
      ...payload,
      status,
    };
  },

  catch() {
    return {
      message: this._message,
      ...this._with,
      status: this._status,
    }
  },

  // Status Codes
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  CONTENT: 210,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  SHOULD_USE_PROXY: 407,
  TIME_OUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  REQUEST_ENTITY_TOO_LARGE: 413,
  REQUEST_URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  REQUESTED_RANGE_UNSATIFIABLE: 416,
  EXPECTATION_FAILED: 417,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  METHOD_FAILURE: 424,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
}
