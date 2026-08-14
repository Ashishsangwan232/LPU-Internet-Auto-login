# Privacy Policy — LPU Auto Login

**Last updated:** August 14, 2026

## Summary

LPU Auto Login does not collect, transmit, store remotely, sell, or share any user data. Everything stays on your device.

## What the extension does

This extension automatically fills in and submits the login form on `internet.lpu.in` (LPU's internet/Wi-Fi authentication portal) using a username and password that you provide.

## What data is stored, and where

- The only data the extension handles is the username and password you type into its popup.
- This data is saved using the browser's built-in `chrome.storage.local` API.
- It is stored **locally on your device only** — inside your browser profile.
- It is never sent to a remote server, database, analytics service, or any third party.
- It is never synced to the cloud (the extension does not use `chrome.storage.sync`).

## What the extension does NOT do

- It does not use any network requests, APIs, or servers of its own.
- It does not include analytics, telemetry, or crash-reporting SDKs.
- It does not read, log, or transmit your browsing history or activity on any site other than `internet.lpu.in`.
- It does not share data with the developer or anyone else.

## Permissions explained

- **storage** — used only to save your username/password locally so you don't have to re-enter them each time.
- **activeTab / scripting** — used only to fill in and submit the login form on the LPU portal page.
- **host_permissions (`internet.lpu.in`)** — the extension's content script only runs on this specific domain and does nothing on any other website.

## Removing your data

You can delete your saved username and password at any time by clicking "Clear saved credentials" in the extension popup, or by uninstalling the extension (which removes all locally stored data).

## Contact

If you have questions about this extension, contact the developer directly.
