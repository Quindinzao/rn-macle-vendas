export const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .substr(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
};
