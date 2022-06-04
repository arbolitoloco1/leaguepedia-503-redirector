let target = "https://lol.fandom.com/wiki/*?action=submit";
const failedStatusCodes = [503, 504]

function processResponse(responseDetails) {
  if (failedStatusCodes.includes(responseDetails.statusCode)) {
    console.log("Redirecting!")
    return {
      redirectUrl: responseDetails.url.replace("?action=submit", "")
    };
  }
}

browser.webRequest.onHeadersReceived.addListener(
  processResponse,
  {urls: [target]},
  ["blocking"]
);
