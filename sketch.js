class Operation {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    sum (a, b) {
        return a + b;
    }
    rest (a, b) {
        return a - b;
    }
    multiplication (a, b) {
        return a * b;
    }
    divide (a, b) {
        return a / b;
    }
    residue (a, b) {
        return a % b;
    }
    exponential (a, b) {
        return a ^ b;
    }

}

module.exports = new Operation;