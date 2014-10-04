chrome.contextMenus.create({
    "title": "Buzz This",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
  });

var clickHandler = function(e) {
    var url = e.pageUrl;
    var buzzPostUrl = "http://www.google.com/buzz/post?";

    if (e.selectionText) {
        // The user selected some text, put this in the message.
        buzzPostUrl += "message=" + encodeURI(e.selectionText) + "&";
    }

    if (e.mediaType === "image") {
        buzzPostUrl += "imageurl=" + encodeURI(e.srcUrl) + "&";
    }

    if (e.linkUrl) {
        // The user wants to buzz a link.
        url = e.linkUrl;
    }

    buzzPostUrl += "url=" + encodeURI(url);

    // Open the page up.
    chrome.tabs.create(
          {"url" : buzzPostUrl });
};