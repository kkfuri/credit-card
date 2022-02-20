const creditCardSpacer = (value: string) => {
  return value.match(/.{1,4}/g)?.join(" ") || "";
};

export const creditCardInputMask = (value: string) => {
  let trimValue = value.replaceAll(" ", "").replace(/[^\d]/g, "");

  if (trimValue.length > 16) {
    trimValue = trimValue.slice(0, 16);
  }

  const formattedNumber = creditCardSpacer(trimValue);

  return formattedNumber;
};

export const cvvMask = (value: string) => {
  let onlyDigitsValue = value.replaceAll(" ", "").replace(/[^\d]/g, "");
  return onlyDigitsValue.length > 4
    ? onlyDigitsValue.slice(0, 4)
    : onlyDigitsValue;
};

export const creditCardMask = (value?: string) => {
  const masked = value
    ?.replaceAll(" ", "")
    .split("")
    .map((v, idx) => (idx > 3 && idx < 12 ? "*" : v))
    .join("");

  const maskedAndSpacedCard = creditCardSpacer((masked || "").padEnd(16, "#"));
  return maskedAndSpacedCard;
};

export const nameMask = (value?: string) => {
  if (!value) return;
  return value.length >= 20 ? `${value.slice(0, 17)}...` : value;
};
