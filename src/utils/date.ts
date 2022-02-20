export const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1}`.padStart(2, "0"),
}));

export const yearOptions = (numberOfYears: number = 10) =>
  Array.from({ length: numberOfYears }, (_, i) => ({
    value: new Date().getFullYear() + i,
    label: `${new Date().getFullYear() + i}`,
  }));
