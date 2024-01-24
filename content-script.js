chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "republishAll") {
    console.log("Received republishAll message");
    const republishButtons = document.querySelectorAll(
      'button[name="republish"]'
    );
    republishButtons.forEach((button, index) => {
      setTimeout(() => {
        console.log(`Found republish button ${index + 1}`);
        button.click();
        console.log(`Clicked republish button ${index + 1}`);
      }, index * 2000);
    });

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
            const myAdsButton = document.querySelector(
              'a[href="/iad/myprofile/myadverts"]'
            );
            if (myAdsButton) {
              console.log("Found myAds button");
              myAdsButton.click();
              console.log("Clicked myAds button");
            }

            sendResponse({ result: "Success" });
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
});
