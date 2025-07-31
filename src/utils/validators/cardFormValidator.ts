import valid from 'card-validator';

export const cardFormValidator = (form: {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}) => {
  const numberValidation = valid.number(form.cardNumber);
  const expiryValidation = valid.expirationDate(form.expirationDate);
  const cvvValidation = valid.cvv(form.cvv);

  return (
    numberValidation.isValid &&
    expiryValidation.isValid &&
    cvvValidation.isValid
  );
};
