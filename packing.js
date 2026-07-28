document.addEventListener("DOMContentLoaded", () => {
  const packingList = document.getElementById("packing-list");
  if (!packingList) return;

  const essentials = ["Passport", "Phone charger", "Travel insurance", "Water bottle", "Daypack"];
  packingList.innerHTML = `
    <div class="list-item">
      <strong>Packing checklist</strong>
      <ul>${essentials.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
});
