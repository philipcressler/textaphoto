// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Slip Shot this photo";
  var id = chrome.contextMenus.create({"title": title, "contexts":["image"],
                                         "id": "context" + "image"});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var imageUrl = info.srcUrl;
  console.log(imageUrl);
  var url = "https://www.google.com/search?q=" + encodeURIComponent(imageUrl);  
  window.open(url, '_blank');
};

// Create some checkbox items.
function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

}
var slip_shot = chrome.contextMenus.create(
  {"title": "Slip Shot Photo", "type": "normal", "onclick":checkboxOnClick});
console.log("Slip Shot Photo:" + slip_shot);



