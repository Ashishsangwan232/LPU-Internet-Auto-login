# LPU Auto Login

A lightweight browser extension that automatically fills in and submits the login form on LPU's internet/Wi-Fi authentication portal (`internet.lpu.in`), so you don't have to log in manually every time.

Not affiliated with or endorsed by Lovely Professional University. This is an independent, personal-use convenience tool.

---

## Features

- Auto-fills username, password, and the policy checkbox, then submits the login form on `internet.lpu.in`
- Credentials are stored **locally only**, using the browser's built-in `chrome.storage.local` — never sent anywhere else
- Popup UI to view, update, or clear your saved credentials at any time (no code editing required)
- Bundled privacy policy page, linked directly from the popup

---

## Installation (unpacked / developer mode)

1. Download and unzip `lpu-auto-login.zip` (or clone/copy the files) into a folder.
2. Open `edge://extensions` (or `chrome://extensions` if using Chrome).
3. Turn on **Developer mode** (toggle, usually top-right).
4. Click **Load unpacked** and select the folder containing `manifest.json`.
5. The extension icon should appear in your toolbar.

---

## Usage

1. Click the extension icon in the toolbar.
2. Enter your LPU portal username and password.
3. Click **Save**.
4. Visit `internet.lpu.in` — the form will be filled in and submitted automatically.
5. To change your password later, just click the icon again, update the field, and hit **Save**.
6. To remove your saved credentials, click **Clear saved credentials**.

---

## File structure

| File | Purpose |
|---|---|
| `manifest.json` | Extension configuration (Manifest V3) |
| `content.js` | Runs on `internet.lpu.in`; reads saved credentials and submits the login form |
| `popup.html` / `popup.js` | Toolbar popup UI for saving/clearing credentials |
| `privacy.html` | In-extension privacy policy page, linked from the popup |
| `icon16.png` / `icon48.png` / `icon128.png` | Extension icons used in the browser UI |
| `icon.svg` | Editable source for the icon |
| `logo300.png` | 300×300 store listing logo (for Partner Center, not used in the zip) |
| `promo_tile.png` | 440×280 promotional tile (for Partner Center, not used in the zip) |
| `PRIVACY_POLICY.md` | Full privacy policy text, for hosting publicly if a store requires a URL |

---

## Permissions

- **`storage`** — the only permission requested. Used solely to save your username/password locally in the browser so you don't need to re-enter them each time.
- **`host_permissions` (`internet.lpu.in`)** — scopes the content script to run only on this domain; it has no access to or effect on any other site.

---

## Privacy

- No data collection, tracking, analytics, or telemetry.
- No network requests other than the LPU login page itself submitting your credentials to LPU's own server (the same as if you typed them in manually).
- Nothing is synced to the cloud or shared with the developer.
- Full details in `privacy.html` (in-extension) or `PRIVACY_POLICY.md` (for external hosting).

---


## Development notes

`content.js` locates form fields using generic selectors (`input[type='text']`, `input[type='password']`, `#agreepolicy`, and a submit button). If LPU changes their portal's HTML structure, these selectors may need updating.

---

## License

Personal-use project.