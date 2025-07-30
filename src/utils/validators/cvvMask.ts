export const formatCvv = (value: string) => {
  return value.replace(/\D/g, '').substr(0, 4);
};
