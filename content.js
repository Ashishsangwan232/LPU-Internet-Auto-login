(function () {
    function autoLogin(username, password) {
        function tryLogin() {
            const userField = document.querySelector("input[type='text']");
            const passField = document.querySelector("input[type='password']");
            const checkbox = document.getElementById("agreepolicy");

            const loginBtn =
                document.querySelector("button[type='submit']") ||
                document.querySelector("input[type='submit']") ||
                [...document.querySelectorAll("button")].find(btn =>
                    btn.innerText.toLowerCase().includes("login")
                );

            if (userField && passField && checkbox && loginBtn) {
                userField.value = username;
                passField.value = password;

                userField.dispatchEvent(new Event("input", { bubbles: true }));
                passField.dispatchEvent(new Event("input", { bubbles: true }));

                if (!checkbox.checked) {
                    checkbox.click();
                }

                setTimeout(() => {
                    loginBtn.click();
                }, 100);
            } else {
                setTimeout(tryLogin, 100);
            }
        }
        tryLogin();
    }

    chrome.storage.local.get(["lpuUsername", "lpuPassword"], (result) => {
        const { lpuUsername, lpuPassword } = result;
        if (lpuUsername && lpuPassword) {
            autoLogin(lpuUsername, lpuPassword);
        } else {
            console.warn("LPU Auto Login: no saved credentials. Click the extension icon to set them.");
        }
    });
})();