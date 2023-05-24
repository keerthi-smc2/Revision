'use strict';

var extend = require('server/assign');
module.exports = extend(module.superModule, {

    washandcare: require('*/cartridge/models/product/decorators/washAndCare'),
    custom: require('*/cartridge/models/product/decorators/custom')
});