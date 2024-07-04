function formatCurrency(amount) {
  var reverse = amount.toString().split("").reverse().join("");
  var formatted = reverse.match(/\d{1,3}/g);
  formatted = formatted.join(".").split("").reverse().join("");
  return "Rp. " + formatted;
}

function calculate() {
  var buyPrice = parseFloat(document.getElementById("buyPrice").value);
  var buyLot = parseFloat(document.getElementById("buyLot").value);
  var buyFee = parseFloat(document.getElementById("buyFee").value);
  var sellPrice = parseFloat(document.getElementById("sellPrice").value);
  var sellLot = parseFloat(document.getElementById("sellLot").value);
  var sellFee = parseFloat(document.getElementById("sellFee").value);

  var nominalBuy = buyPrice * buyLot * 100;
  document.getElementById("nominalBuy").textContent = formatCurrency(nominalBuy.toFixed(0));

  var nominalSell = sellPrice * sellLot * 100;
  document.getElementById("nominalSell").textContent = formatCurrency(nominalSell.toFixed(0));

  var totalBuyFee = (nominalBuy * buyFee) / 100;
  document.getElementById("totalBuyFee").textContent = formatCurrency(totalBuyFee.toFixed(0));

  var totalSellFee = (nominalSell * sellFee) / 100;
  document.getElementById("totalSellFee").textContent = formatCurrency(totalSellFee.toFixed(0));

  var totalBuy = nominalBuy + totalBuyFee;
  document.getElementById("totalBuy").textContent = formatCurrency(totalBuy.toFixed(0));

  var totalSell = nominalSell - totalSellFee;
  document.getElementById("totalSell").textContent = formatCurrency(totalSell.toFixed(0));

  var netGainLoss = totalSell - totalBuy;
  var absoluteGainLoss = Math.abs(netGainLoss);
  var percentageGainLoss = ((totalSell - totalBuy) / totalBuy) * 100;
  
  if (netGainLoss < 0) {
    document.getElementById("netGainLoss").textContent = "- " + formatCurrency(absoluteGainLoss.toFixed(0)) + " (" + percentageGainLoss.toFixed(2) + "%)";
  } else {
    document.getElementById("netGainLoss").textContent = formatCurrency(absoluteGainLoss.toFixed(0)) + " (" + percentageGainLoss.toFixed(2) + "%)";
  }
}

function reset() {
  document.getElementById("buyPrice").value = "";
  document.getElementById("buyLot").value = "";
  document.getElementById("buyFee").value = "";
  document.getElementById("sellPrice").value = "";
  document.getElementById("sellLot").value = "";
  document.getElementById("sellFee").value = "";
  document.getElementById("nominalBuy").textContent = "";
  document.getElementById("nominalSell").textContent = "";
  document.getElementById("totalBuyFee").textContent = "";
  document.getElementById("totalSellFee").textContent = "";
  document.getElementById("totalBuy").textContent = "";
  document.getElementById("totalSell").textContent = "";
  document.getElementById("netGainLoss").textContent = "";
}
