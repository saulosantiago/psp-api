const schema = require('schm');
const invert = require('../utils/invert');
const enums = require('../../../infra/database/enums/transaction');

const captureMethod = invert(enums.captureMethod);
const paymentMethod = invert(enums.paymentMethod);
const status = invert(enums.status);

const transactionObject = schema({
  object: String,
  id: String,
  status: String,
  refuseReason: String,
  value: Number,
  capture: Boolean,
  authorizedValue: Number,
  capturedValue: Number,
  paymentMethod: String,
  captureMethod: String,
  cardLastDigits: String,
  cardHolderName: String,
  cardBrand: String,
  authorizationCode: String,
  usedKey: String,
});

const transactionModel = (object, brandAuthorizationCode, usedKey, card, transaction) => {
  const transactionTemp = { ...transaction };
  transactionTemp.captureMethod = captureMethod[transaction.captureMethodId];
  transactionTemp.paymentMethod = paymentMethod[transaction.paymentMethodId];
  transactionTemp.status = status[transaction.statusId];

  const cardTemp = {
    cardHolderName: card.holderName,
    cardLastDigits: card.lastDigits,
    cardBrand: card.brand,
  };

  return transactionObject.parse({
    object, brandAuthorizationCode, usedKey, ...cardTemp, ...transactionTemp,
  });
};

module.exports = transactionModel;