'use strict';

module.exports = function (object, apiProduct, type) {
    Object.defineProperty(object, 'manufacturerSKU', {
        enumerable: true,
        value: apiProduct.manufacturerSKU
    });

    Object.defineProperty(object, 'isDiscontinuedFlag', {
        enumerable: true,
        value: apiProduct.custom.isDiscontinuedFlag
    });

};   