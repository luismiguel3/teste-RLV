const moneyMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d+)(\d{2})/g, "$1,$2")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
};

export default moneyMask;