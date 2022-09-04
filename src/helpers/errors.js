
class DomainError extends Error {
    errorName = 'DOMAIN_ERROR';

    httpStatusCode = 500;

    data = {};

    constructor(message = '', data = {}) {
        super(message);
        this.data = data;
    }

    getHttpCode() {
        return this.httpStatusCode;
    }
    getData() {
        return this.data;
    }

    getName() {
        return this.errorName;
    }
}

export class ValidationError extends DomainError {
    constructor(message, data = {}) {
        super(message);
        this.errorName = 'INVALID_REQUEST';
        this.httpStatusCode = 400;
        this.data = data;
    }
}

export class BadRequestError extends DomainError {
    constructor(message, data = {}) {
        super(message);
        this.errorName = 'BAD_REQUEST';
        this.httpStatusCode = 400;
        this.data = data;
    }
}

export class RequestLimitError extends DomainError {
    constructor(message, data = {}) {
        super(message);
        this.errorName = 'REQUEST_LIMIT_EXCEEDED';
        this.httpStatusCode = 429;
        this.data = data;
    }
}