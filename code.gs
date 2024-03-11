// This function is called when a POST request is made to your web app.
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse JSON data from the request body.
    var requestData = JSON.parse(e.postData.contents);
    
    // Assuming the JSON data contains fields 'name' and 'value'
    var name = requestData.name;
    var value = requestData.value;
    
    // Append the data to the sheet
    sheet.appendRow([name, value]);
    
    // Return success message
    return ContentService.createTextOutput("Data added successfully.");
  } catch (error) {
    // Return error message
    return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
  }
}

// This function is called when a GET request is made to your web app.
function doGet(e) {
  try {
    // Return HTML content explaining how to use the webhook
    var htmlOutput = '<html><body><h1>Google Sheets Webhook</h1><p>This is a webhook to interact with a Google Sheet. To use it, send a POST request to the webhook URL with JSON data containing "name" and "value" fields.</p></body></html>';
    return HtmlService.createHtmlOutput(htmlOutput);
  } catch (error) {
    // Return error message
    return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
