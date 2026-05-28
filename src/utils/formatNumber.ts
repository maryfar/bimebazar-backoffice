export const formatNumber = (num: number): string => {
  if (num >= 100) return "99+";
  return num.toString();
};