document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trip-form");
  const budgetSummary = document.getElementById("budget-summary");

  if (!form || !budgetSummary) return;

  form.addEventListener("input", () => {
    const budget = Number(document.getElementById("trip-budget").value || 0);
    const travelers = Number(document.getElementById("trip-travelers").value || 1);
    const estimate = budget / travelers;
    budgetSummary.innerHTML = `<div class="list-item"><strong>Budget estimate</strong><div>$${estimate.toFixed(0)} per traveler</div></div>`;
  });
});
