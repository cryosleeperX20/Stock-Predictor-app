let tickers = [];

function addTicker() {
  const input = document.getElementById("tickerInput");
  const ticker = input.value.trim().toUpperCase();

  if (ticker && tickers.length < 3 && !tickers.includes(ticker)) {
    tickers.push(ticker);
    updateTickerList();
    input.value = "";
  }
}

function updateTickerList() {
  document.getElementById("tickerList").textContent = tickers.join(", ");
}

function generateReport() {
  const report = document.getElementById("report");

  if (tickers.length === 0) {
    report.textContent = "Please add at least one ticker!";
    return;
  }

  report.textContent = `Predictions generated for: ${tickers.join(", ")}`;
}
