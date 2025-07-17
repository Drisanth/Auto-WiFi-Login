(function autoLogin() {
  function tryLogin(username, password) {
    try {
      const okayBtn = document.querySelector('button.okay, button#okay, button[aria-label="Okay"]');
      if (okayBtn) {
        okayBtn.click();
        console.log("Clicked Okay button");
      }

      const usernameField = document.querySelector('input[name="username"], input[type="text"]');
      const passwordField = document.querySelector('input[name="password"], input[type="password"]');
      const loginBtn = document.querySelector('button[type="submit"], button.login');

      if (usernameField && passwordField && loginBtn) {
        usernameField.value = username;
        passwordField.value = password;

        usernameField.dispatchEvent(new Event('input', { bubbles: true }));
        passwordField.dispatchEvent(new Event('input', { bubbles: true }));

        loginBtn.click();
        console.log("Submitted login form");

        // Notify background to close tab
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    } catch (error) {
      console.error("Login automation failed:", error);
    }
  }

  window.addEventListener("load", () => {
    chrome.storage.local.get(["username", "password"], (data) => {
      if (data.username && data.password) {
        setTimeout(() => tryLogin(data.username, data.password), 3000);
      } else {
        console.warn("No credentials saved.");
      }
    });
  });
})();
