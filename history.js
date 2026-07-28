document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("history-list");
  if (!historyList) return;

  const trips = [
    { name: "Santorini escape", destination: "Greece", date: "May 2025" },
    { name: "Tokyo weekend", destination: "Japan", date: "March 2025" },
    { name: "Alpine retreat", destination: "Switzerland", date: "January 2025" }
  ];

  historyList.innerHTML = trips
    .map(
      (trip) => `
        <div class="list-item">
          <strong>${trip.name}</strong>
          <div>${trip.destination} · ${trip.date}</div>
        </div>
      `
    )
    .join("");
});
