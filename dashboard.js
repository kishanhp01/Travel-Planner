document.addEventListener("DOMContentLoaded", () => {
  const welcomeName = document.getElementById("welcome-name");
  const upcomingCount = document.getElementById("upcoming-count");
  const totalBudget = document.getElementById("total-budget");
  const tripList = document.getElementById("trip-list");
  const profileName = document.getElementById("profile-name");
  const profilePreference = document.getElementById("profile-preference");
  const profileStyle = document.getElementById("profile-style");
  const profileForm = document.getElementById("profile-form");
  const darkToggle = document.getElementById("dark-mode-toggle");

  const user = getStoredUser();
  if (user) {
    if (welcomeName) welcomeName.textContent = `Welcome back, ${user.name}!`;
    if (profileName) profileName.value = user.name || "";
    if (profilePreference) profilePreference.value = user.preferences?.destination || "";
    if (profileStyle) profileStyle.value = user.preferences?.style || "";
  }

  if (upcomingCount) upcomingCount.textContent = "3";
  if (totalBudget) totalBudget.textContent = "$3,500";

  if (tripList) {
    tripList.innerHTML = [
      { name: "Weekend in Lisbon", date: "Aug 18" },
      { name: "Business trip to Berlin", date: "Sep 02" },
      { name: "Family vacation", date: "Oct 10" }
    ]
      .map((trip) => `<li class="list-item"><strong>${trip.name}</strong><div>${trip.date}</div></li>`)
      .join("");
  }

  if (profileForm) {
    profileForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const updatedUser = {
        ...user,
        name: profileName?.value || user?.name || "Traveler",
        preferences: {
          destination: profilePreference?.value || "",
          style: profileStyle?.value || ""
        }
      };
      saveUserSession(updatedUser);
      window.location.reload();
    });
  }

  if (darkToggle) {
    darkToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark", darkToggle.checked);
      localStorage.setItem("travelPlannerDarkMode", darkToggle.checked ? "true" : "false");
    });

    const savedTheme = localStorage.getItem("travelPlannerDarkMode");
    if (savedTheme === "true") {
      document.body.classList.add("dark");
      darkToggle.checked = true;
    }
  }
});
