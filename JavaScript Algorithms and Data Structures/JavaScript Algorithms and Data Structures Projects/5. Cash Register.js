let aCurrencyUnit = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05 },
	{ name: 'PENNY', val: 0.01 }
];

function createMap(oCashMap, cid) {
  for (let i = 0; i < cid.length; i++) {
    oCashMap.set(cid[i][0], cid[i][1]);
  }
}

function checkCashRegister(price, cash, cid) {  
  let oCashMap = new Map();
  createMap(oCashMap, cid);

  let aCash = cid.flat().filter((elem, index) => index % 2 === 1);
  let fSumCid = aCash.reduce((prev, cur) => {
    return prev + cur;
  });

  let fChangeDue = cash - price;

  let bCannotReturnChange = false;
  let iSum = 0;
  let iTemp = -1;
  for (let i = 0; i < aCurrencyUnit.length; i++) {
    let iInitCur = oCashMap.get(aCurrencyUnit[i].name);
    if (!iInitCur || aCurrencyUnit[i].val > fChangeDue) {
      continue;
    }
    while (oCashMap.get(aCurrencyUnit[i].name) > (iInitCur - cid[cid.length - i - 1][1]) && iSum < fChangeDue) {
      if ((aCurrencyUnit[i].val + iSum).toFixed(2) > fChangeDue) {
        break;
      }
      iSum += aCurrencyUnit[i].val;
      oCashMap.set(aCurrencyUnit[i].name, oCashMap.get(aCurrencyUnit[i].name) - aCurrencyUnit[i].val);
    }
    if (iSum >= fChangeDue) {
      bCannotReturnChange = true;
      iTemp = i;
    }
  }

  if (fSumCid < fChangeDue || !bCannotReturnChange) {
    return {
      "status": "INSUFFICIENT_FUNDS",
      "change": []
    };
  }
  if (fSumCid === fChangeDue) {
    return {
      "status": "CLOSED",
      "change": cid
    };
  } else {
    let aChange = [];
    for (let i = 0; i <= iTemp; i++) {
      let iDelta = (cid[aCurrencyUnit.length - i - 1][1] - oCashMap.get(aCurrencyUnit[i].name));
      if (iDelta) {
        aChange.push([aCurrencyUnit[i].name, Math.round(iDelta*100)/100]);
      }
    }
    return {
      "status": "OPEN",
      "change": aChange
    };
  }
}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);