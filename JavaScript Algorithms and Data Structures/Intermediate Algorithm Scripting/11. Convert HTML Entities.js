function convertHTML(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(getHtmlEnt(str[i]));
  }
  return res.join("");
}

function getHtmlEnt(sym) {
  switch(sym) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case "\"":
      return "&quot;";
    case "'":
      return "&apos;";
    default:
      return sym;
  }
}

convertHTML("Dolce & Gabbana");