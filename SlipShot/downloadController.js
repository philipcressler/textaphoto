//The script to manage downloads

chrome.downloads.search({}, function (DownloadItem) {
    for (var i=0; i<DownloadItem.length; i++) {
        var itemID = DownloadItem[i].id;
        (function(index) {
            chrome.downloads.getFileIcon(index, function(iconURL) {
                DL_icons[index] = iconURL;
                console.log(DL_icons);
            });
        })(itemID);         
    }
});