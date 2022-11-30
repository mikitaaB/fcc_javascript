function palindrome(str) {
  let clearStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");
  return clearStr.trim().split("").reverse().join("") === clearStr;
}

palindrome("eye");