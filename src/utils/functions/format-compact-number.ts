export function formatCompactNumber(number: number, locale = 'en-US') {
  const formatter = new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short', // Use 'long' for words like "million"
  });

  return formatter.format(number);
}
