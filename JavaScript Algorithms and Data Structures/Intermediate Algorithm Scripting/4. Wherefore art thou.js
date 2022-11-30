function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let aSourceKey = Object.keys(source);
  let aSourceValue = Object.values(source);
  let collectionKeys = Object.keys(collection);
  let collectionValues = Object.values(collection);
  
  let iCollectionKeysLength = collectionKeys.length;
  let iSourceKeyLength = aSourceKey.length;
  for (let i = 0; i < iCollectionKeysLength; i++) {
    let k = 0;
    for (let j = 0; j < iSourceKeyLength; j++) {
      if (collectionValues[i]?.[aSourceKey[j]] === aSourceValue[j]) {
        k++;
      }
      if (k === iSourceKeyLength) {
        arr.push(collectionValues[i]);
      }
    }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


-----


function whatIsInAName(collection, source) {
  // Only change code below this line
  let aSourceKey = Object.keys(source);

  // Only change code above this line
  return collection.filter(oColObj => {
    return aSourceKey.every(sKey => {
      return oColObj.hasOwnProperty(sKey) && oColObj[sKey] === source[sKey];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });