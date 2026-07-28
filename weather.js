document.addEventListener("DOMContentLoaded", () => {
  const weatherCard = document.getElementById("weather-card");
  if (!weatherCard) return;

  const forecast = [
    { city: "Barcelona", temperature: "24°C", condition: "Sunny" },
    { city: "Reykjavík", temperature: "12°C", condition: "Cloudy" },
    { city: "Tokyo", temperature: "29°C", condition: "Humid" }
  ];

  weatherCard.innerHTML = forecast
    .map(
      (item) => `
        <div class="list-item">
          <strong>${item.city}</strong>
          <div>${item.temperature} · ${item.condition}</div>
        </div>
      `
    )
    .join("");

  const alerts = document.getElementById("weather-alerts");
  if (alerts) alerts.textContent = "2 active";
});
