export const getFirstLetterOfWords = words => {
  try {
    const capitalizeWords = words
    .split(' ')
    .map(word => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
    return capitalizeWords.match(/[A-Z]/g).join('');
  } catch (error) {
    return '';
  }
}; 