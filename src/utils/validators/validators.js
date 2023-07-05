export const required = value => {
   if (value) return undefined;
   return 'error';
}

// export const maxLength30 = value => {
//    if (value.length > 30) return "max length 30 symbols";
//    return undefined;
// }

export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) return `max length ${maxLength} symbols`;
   return undefined;
}