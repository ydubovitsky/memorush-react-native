export const cutStringIfLengthMoreThan = (maxLen, string) => {
  if (string != undefined && string.length != 0 && string.length > maxLen) {
    return string.substring(0, maxLen) + "...";
  }
  if(string != undefined && string.length != 0 && string.length < maxLen) {
    return string;
  }
}