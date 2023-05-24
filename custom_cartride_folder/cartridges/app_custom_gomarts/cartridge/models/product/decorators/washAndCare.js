'use strict';

module.exports = function (object, apiProduct, type) {
    Object.defineProperty(object, 'washAndCare', {
        enumerable: true,
        value: apiProduct.custom.washAndCare
    });
};   