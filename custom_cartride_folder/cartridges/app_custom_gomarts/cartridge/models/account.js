'use strict';

var base = module.superModule;

var URLUtils = require('dw/web/URLUtils');


function getLoyaltyInfo(profile) {
    var result = null;
    if (profile) {
        result = {
          loyaltySignup: profile.custom.loyaltySignup,
          rewardPoints: profile.custom.rewardPoints
        }
    };
    return result;
} 

function getCustomerPaymentInstruments(userPaymentInstruments) {
    var paymentInstruments;

    paymentInstruments = userPaymentInstruments.map(function (paymentInstrument) {
        var result = {
            creditCardHolder: paymentInstrument.creditCardHolder,
            maskedCreditCardNumber: paymentInstrument.maskedCreditCardNumber,
            creditCardType: paymentInstrument.creditCardType,
            creditCardExpirationMonth: paymentInstrument.creditCardExpirationMonth,
            creditCardExpirationYear: paymentInstrument.creditCardExpirationYear,
            UUID: paymentInstrument.UUID
        };

        result.cardTypeImage = {
            src: URLUtils.staticURL('/images/' +
                paymentInstrument.creditCardType.toLowerCase().replace(/\s/g, '') +
                '-dark.svg'),
            alt: paymentInstrument.creditCardType
        };

        return result;
    });

    return paymentInstruments;
}



function account(currentCustomer, addressModel, orderModel) {
    base.call(this,currentCustomer, addressModel, orderModel); 
    this.loyaltyInfo = getLoyaltyInfo(currentCustomer.raw.profile);
}

account.getCustomerPaymentInstruments = getCustomerPaymentInstruments;

module.exports = account;