function pairElement(str) {
  let aStr = str.split("");
  const map1 = new Map();
  map1.set('A', "T");
  map1.set('T', "A");
  map1.set('C', "G");
  map1.set('G', "C");

  return aStr.map(sSymbol => {
    return [sSymbol, map1.get(sSymbol)];
  });
}

pairElement("GCG");