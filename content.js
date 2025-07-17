(function autoLogin() {
  const USERNAME = "";
  const PASSWORD = "";

  function tryLogin() {
    try {
      // Click 'Okay' button if popup exists
      const okayBtn = document.querySelector('button.okay, button#okay, button[aria-label="Okay"]');
      if (okayBtn) {
        okayBtn.click();
        console.log("Clicked Okay button");
      }

      // Fill in login form
      const usernameField = document.querySelector('input[name="username"], input[type="text"]');
      const passwordField = document.querySelector('input[name="password"], input[type="password"]');
      const loginBtn = document.querySelector('button[type="submit"], button.login');

      if (usernameField && passwordField && loginBtn) {
        usernameField.value = USERNAME;
        passwordField.value = PASSWORD;

        // Dispatch input events (some sites need this)
        usernameField.dispatchEvent(new Event('input', { bubbles: true }));
        passwordField.dispatchEvent(new Event('input', { bubbles: true }));

        loginBtn.click();
        console.log("Submitted login form");
      }
    } catch (error) {
      console.error("Login automation failed:", error);
    }
  }

  // Run with delay to ensure page is loaded
  window.addEventListener("load", () => {
    setTimeout(tryLogin, 1000);
  });
})();