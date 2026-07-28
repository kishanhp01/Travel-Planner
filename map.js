document.addEventListener("DOMContentLoaded", () => {
  const mapPreview = document.getElementById("map-preview");
  if (!mapPreview) return;

  mapPreview.innerHTML = `
    <div class="list-item">
      <strong>Route preview</strong>
      <div>Airport → Hotel → Landmark district</div>
    </div>
  `;
});
