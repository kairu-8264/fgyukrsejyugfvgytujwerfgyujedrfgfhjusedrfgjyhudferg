const fs = require('fs');
const export_data = JSON.parse(fs.readFileSync('./2fauth_export.json', 'utf8'));
let export_html = "<html><head><title>2FA Export</title></head><body><table><tr><th>Account</th><th>Link</th><th>Type</th></tr>";

for (const item of export_data.data) {
    export_html += `<tr><td>${item.service} (${item.account})</td><td><a href="${item.legacy_uri}">Add</a></td><td>${item.otp_type}</td></tr>`;
}

export_html += "</table></body></html>";

fs.writeFileSync('./output.html', export_html);