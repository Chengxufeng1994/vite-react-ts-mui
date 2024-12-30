const toCapitalize = (str: string): string => {
  if (!str) return ''; // Handle empty string case
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default toCapitalize;
