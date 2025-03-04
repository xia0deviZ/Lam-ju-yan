const disneyData = [
    {
        open: "120.54",
        high: "122.56",
        low: "120.54",
        close: "121.09"
    },
    {
        open: "123.15",
        high: "127.76",
        low: "123.02",
        close: "124.92"
    }
];

const averageClosingPrice = disneyData.reduce((sum, entry) => sum + parseFloat(entry.close), 0) / disneyData.length;

console.log("Average closing price of Disney is",averageClosingPrice)