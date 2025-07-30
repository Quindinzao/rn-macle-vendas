export const formatExpirationDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .substr(0, 4)
    .replace(/^(\d{2})(\d{1,2})/, '$1/$2')
    .substr(0, 5);
};
