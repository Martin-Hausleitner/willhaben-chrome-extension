document.getElementById('republishAll').addEventListener('click', () => {
  console.log("Republish All button clicked");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "republishAll"}, function(response) {
      console.log(response);
    });
  });
});
