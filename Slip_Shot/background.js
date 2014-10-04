// A generic onclick callback function
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Set up context menu for right click extension
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Slip Shot this photo";
  var id = chrome.contextMenus.create({"title": title, "contexts":["image"],
                                         "id": "context" + "image"});  
});

// add the click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked function. Creates prompt for user, and sends data to Twilio cloud server
function onClickHandler(info, tab) {
  var imageUrl = info.srcUrl;
  console.log(imageUrl);
  var phone = prompt("Your image:\n\n" + imageUrl + "\n\nPlease Enter your number:", "###-###-####");
  if (phone != null) {
    document.getElementById("demo").innerHTML =
    "Image sent to " + person;
  }
};

// Create a menu item
function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId + " was clicked, state is now: " + info.checked + "(previous state was " + info.wasChecked + ")");
}





