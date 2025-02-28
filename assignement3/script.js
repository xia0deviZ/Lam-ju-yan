const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]

let total =0;
total += msftData[0]
total += msftData[1]
total += msftData[2]
total += msftData[3]
total += msftData[4]

console.log (total /5)

const msftaData = [190.15, 194.21, 191.07, 190.44, 200.15]

msftData.push("205.67")

console.log(msftData)


const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
}

const result = parseFloat(disneyData.open) -parseFloat(disneyData.high) +parseFloat(disneyData.low) -parseFloat(disneyData.close);
console.log(result. toFixed(2))

disneyData.volume ="1512311";
console.log(disneyData);


























