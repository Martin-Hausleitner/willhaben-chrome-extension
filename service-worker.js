// Im Service-Worker (service-worker.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Nachricht erhalten", message);
  if (message.action === "republishAll") {
    // Führen Sie hier Ihre Aktion aus
    console.log("Republish All wurde ausgelöst");
    sendResponse({ result: "Erfolg" }); // Senden Sie eine Antwort zurück
  }
  return true; // Gibt an, dass die Antwort asynchron ist
});
