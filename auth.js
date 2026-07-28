document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const logoutLink = document.getElementById("logout-link");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      if (email && password) {
        saveUserSession({ email, name: email.split("@")[0] });
        window.location.href = "dashboard.html";
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      if (name && email && password) {
        saveUserSession({ name, email });
        window.location.href = "dashboard.html";
      }
    });
  }

  if (logoutLink) {
    logoutLink.addEventListener("click", (event) => {
      event.preventDefault();
      clearUserSession();
      window.location.href = "index.html";
    });
  }

  // safe stored user access & fixed redirect logic
  function getStoredUserSafe() {
    try {
      return (typeof getStoredUser === 'function') ? getStoredUser() : null;
    } catch (e) {
      return null;
    }
  }

  const user = getStoredUserSafe();
  if (user && (window.location.pathname.includes("login.html") || window.location.pathname.includes("signup.html"))) {
    window.location.href = "dashboard.html";
  }
});
