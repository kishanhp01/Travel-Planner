document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .hero-card");
  cards.forEach((card) => {
    card.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px) scale(1.01)";
      card.style.boxShadow = "0 24px 50px rgba(20, 33, 61, 0.16)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "";
    });
  });

  const message = document.createElement("div");
  message.className = "list-item";
  message.innerHTML = "<strong>Reminder</strong><div>Check your packing list 24 hours before departure.</div>";
  const target = document.getElementById("trip-list") || document.getElementById("history-list");
  if (target) {
    target.prepend(message);
  }
});
