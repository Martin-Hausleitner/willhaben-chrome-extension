function clickButtons() {
  setTimeout(() => {
    const continueButton = document.querySelector(
      'button[data-testid="send-button"]'
    );
    if (continueButton) {
      console.log("Found continue button");
      continueButton.click();
      console.log("Clicked continue button");
    }

    setTimeout(() => {
      const submitStickyButton = document.querySelector(
        'button[data-testid="submitStickyButton"]'
      );
      if (submitStickyButton) {
        console.log("Found submitStickyButton");
        submitStickyButton.click();
        console.log("Clicked submitStickyButton");
      }

      setTimeout(() => {
        const publishButton = document.querySelector(
          'button[data-testid="submit-sticky-button"]'
        );
        if (publishButton) {
          console.log("Found publish button");
          publishButton.click();
          console.log("Clicked publish button");
        }

        setTimeout(() => {
          console.log("Navigating to myAds page");
          window.location.href =
            "https://www.willhaben.at/iad/myprofile/myadverts?statusFilters=EXPIRED";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

let maxAttempts = 50;
let attempts = 0;
let currentPage = 1;

function findAndClickRepublishButtons() {
  const republishButtons = document.querySelectorAll(
    'button[name="republish"]'
  );
  if (republishButtons.length > 0) {
    republishButtons.forEach((button, index) => {
      setTimeout(() => {
        console.log(`Found republish button ${index + 1}`);
        button.click();
        console.log(`Clicked republish button ${index + 1}`);
      }, index * 2000);
    });
    clickButtons();
  } else if (attempts >= maxAttempts) {
    console.log("Max attempts reached, moving to next page");
    currentPage++;
    window.location.href = `https://www.willhaben.at/iad/myprofile/myadverts?statusFilters=EXPIRED&page=${currentPage}`;
  }
  attempts++;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "republishAll") {
    console.log("Received republishAll message");
    findAndClickRepublishButtons();
    sendResponse({ result: "Success" });
  }
});

// Listen for the page load event to start the process again
window.addEventListener("load", () => {
  if (
    window.location.href.startsWith(
      "https://www.willhaben.at/iad/myprofile/myadverts?statusFilters=EXPIRED"
    )
  ) {
    findAndClickRepublishButtons();
  }
});
