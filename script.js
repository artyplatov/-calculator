function calculate() {
  const materials = parseFloat(document.getElementById("materials").value) || 0;
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const rate = parseFloat(document.getElementById("rate").value) || 0;
  const rent = parseFloat(document.getElementById("rent").value) || 0;
  const other = parseFloat(document.getElementById("other").value) || 0;

  const workCost = hours * rate;
  const totalCost = materials + workCost + rent + other;

  const recommendedPrice = Math.round(totalCost * 1.3); // 30% profit
  const profit = recommendedPrice - totalCost;

  document.getElementById("result").innerHTML = `
    <p>💸 Себестоимость: <strong>${totalCost.toFixed(0)} ₽</strong></p>
    <p>💰 Рекомендуемая цена: <strong>${recommendedPrice} ₽</strong></p>
    <p>📈 Прибыль: <strong>${profit} ₽</strong></p>
  `;
}
