const msftData = [
    [190.15, 196.21, 191.07, 194.44],
    [193.61, 195.89, 190.12, 193.40]
  ];
  
  const closingPrices = msftData.map(row => row[3]); // Extract closing prices
  const avgClosingPrice = closingPrices.reduce((a, b) => a + b, 0) / closingPrices.length;
  
  console.log("Average closing price of MSFT is",avgClosingPrice)