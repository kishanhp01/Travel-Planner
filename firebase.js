const firebaseConfig = {
  apiKey: "demo-key",
  authDomain: "travel-planner-pro.firebaseapp.com",
  projectId: "travel-planner-pro",
  storageBucket: "travel-planner-pro.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo"
};

window.firebaseConfig = firebaseConfig;

function saveUserSession(user) {
  const profile = {
    name: user.name || user.email || "Traveler",
    email: user.email || "",
    preferences: user.preferences || {}
  };
  localStorage.setItem("travelPlannerUser", JSON.stringify(profile));
}

function getStoredUser() {
  const stored = localStorage.getItem("travelPlannerUser");
  return stored ? JSON.parse(stored) : null;
}

function clearUserSession() {
  localStorage.removeItem("travelPlannerUser");
}
