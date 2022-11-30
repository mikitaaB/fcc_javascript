function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(oObj => {
    let iOrbitalPeriod = Math.round(2* Math.PI * Math.sqrt(Math.pow((earthRadius + oObj.avgAlt), 3) / GM));
    return {
      "name": oObj.name,
      "orbitalPeriod": iOrbitalPeriod
    }
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);