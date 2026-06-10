# Google Sheets Form Setup

Use this when you are ready to connect the `/apply` form to your Google Sheet.

## 1. Create The Sheet

Create a Google Sheet with this first row:

```text
Submitted At | Name | WhatsApp | Email | Social Link | Experience | Is 18+ | Agreed Terms | Source
```

## 2. Add Apps Script

In Google Sheets, go to `Extensions > Apps Script` and paste:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.whatsapp || "",
    data.email || "",
    data.socialLink || "",
    data.experience || "",
    data.is18OrOlder ? "Yes" : "No",
    data.agreeNDA ? "Yes" : "No",
    data.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy The Script

Click `Deploy > New deployment`.

Choose:

- Type: `Web app`
- Execute as: `Me`
- Who has access: `Anyone`

Copy the Web app URL.

## 4. Add Environment Variables

Create `.env.local` from `.env.example`:

```text
VITE_WHATSAPP_NUMBER=919999999999
VITE_WHATSAPP_MESSAGE=Hello IM Models Agency, I would like to apply as a creator.
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart the dev server after changing environment variables.
