document.getElementById("save").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  chrome.storage.local.set({ username, password }, () => {
    const status = document.getElementById("status");
    status.textContent = "✅ Credentials saved!";
    status.style.display = "block";

    setTimeout(() => {
      status.style.display = "none";
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["username", "password"], (data) => {
    if (data.username) document.getElementById("username").value = data.username;
    if (data.password) document.getElementById("password").value = data.password;
  });
});
