export const cutStringIfLengthMoreThan = (maxLen, string) => {
  if (string != undefined && string.length != 0) {
    return string.substring(0, maxLen) + "...";
  }
}