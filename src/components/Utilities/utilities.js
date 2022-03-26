function checkStateWinning(gameState) {
  const xMarker = [];
  const oMarker = [];

  // TODO: Edit function to handle draw situation
  const strikes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [key, value] of Object.entries(gameState)) {
    if (value === "X") {
      xMarker.push(parseInt(key));
    } else if (value === "O") {
      oMarker.push(parseInt(key));
    }
  }

  const markerDict = {
    x: xMarker,
    o: oMarker,
  };

  const isSuperset = (arr1, arr2) => {
    return arr2.every(function (val) {
      return arr1.indexOf(val) >= 0;
    });
  };

  const resultX = strikes.some((strike) => isSuperset(markerDict.x, strike));
  const resultO = strikes.some((strike) => isSuperset(markerDict.o, strike));
  

  if (resultX) {
      return "X"
  } else if (resultO) {
      return "O"
  } else {
      return ""
  }

}

export  {checkStateWinning};
