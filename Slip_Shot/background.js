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
  var str = info.srcUrl;
  var num = prompt("Your image:\n\n" + str + "\n\nPlease Enter your number:", "##########");
  if (jQuery.isNumeric(num) == true) {
	  var form_data = "str=" + str + "&num=" + num;
	  alert(form_data);
	  if (num.length > 10 || num.length < 10) {
		alert("Please enter a valid number with a 3 digit area code =) ");
		num = null;
	  }
	  else {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://slipshot-hackathon.appspot.com/', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(form_data);
		alert("Message is sent");
	  }
  }
  else {
    alert("Please enter a valid 10 digit phone number. Following this format 1111111111");
  }
};

// Create a menu item
function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId + " was clicked, state is now: " + info.checked + "(previous state was " + info.wasChecked + ")");
}





