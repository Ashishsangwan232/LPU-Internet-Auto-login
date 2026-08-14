document.addEventListener("DOMContentLoaded", () => {
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("password");
  const toggleEl = document.getElementById("toggle");
  const saveBtn = document.getElementById("save");
  const clearBtn = document.getElementById("clear");
  const statusEl = document.getElementById("status");

  // Load any previously saved credentials into the form
  chrome.storage.local.get(["lpuUsername", "lpuPassword"], (result) => {
    if (result.lpuUsername) usernameEl.value = result.lpuUsername;
    if (result.lpuPassword) passwordEl.value = result.lpuPassword;
  });

  toggleEl.addEventListener("click", () => {
    const isHidden = passwordEl.type === "password";
    passwordEl.type = isHidden ? "text" : "password";
    toggleEl.textContent = isHidden ? "hide" : "show";
  });

  saveBtn.addEventListener("click", () => {
    const username = usernameEl.value.trim();
    const password = passwordEl.value;

    if (!username || !password) {
      statusEl.style.color = "#dc2626";
      statusEl.textContent = "Enter both username and password.";
      return;
    }

    chrome.storage.local.set(
      { lpuUsername: username, lpuPassword: password },
      () => {
        statusEl.style.color = "#16a34a";
        statusEl.textContent = "Saved.";
        setTimeout(() => (statusEl.textContent = ""), 2000);
      }
    );
  });

  clearBtn.addEventListener("click", () => {
    chrome.storage.local.remove(["lpuUsername", "lpuPassword"], () => {
      usernameEl.value = "";
      passwordEl.value = "";
      statusEl.style.color = "#555";
      statusEl.textContent = "Cleared.";
      setTimeout(() => (statusEl.textContent = ""), 2000);
    });
  });
});
