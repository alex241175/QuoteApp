var bookmark = {}

window.alert = function(text){
    alert(text)
}

window.triggerinput = function(elementId){
    var element = document.getElementById(elementId)
    element.dispatchEvent(new Event('input'));
}

window.replicateValue = function(element){
    element.parentNode.dataset.replicatedValue = element.value

}

window.getScrollPos = function(){
    return window.scrollY
}

window.setScrollPos = function(scrollPos){
    window.scrollTo(0, scrollPos)
}

window.getInsertAtCursorValue =  function (myField, myValue) {
    //IE support
    if (document.selection) {
        // myField.focus();
        // sel = document.selection.createRange();
        // sel.text = myValue;
        return myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        // myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        return  myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        // myField.value += myValue;
        return myField.value + myValue;
    }
}

window.storeBookmark = function (){
    // below not working. when you click outside editor, it will lose cursor
    bookmark = tinymce.activeEditor.selection.getBookmark();
}

window.moveToBookmark = function(){
    tinymce.activeEditor.selection.moveToBookmark(bookmark);
}
window.insertContent = function (text){
    // below not working. when you click outside editor, it will lose cursor
    var ed = tinyMCE.activeEditor
    ed.execCommand('mceInsertContent', false, "some text");
}
window.clipboardCopy = {
    copyText: function(text) {
       
        /* write to the clipboard now */
        navigator.clipboard.writeText(text).then(function () {
            alert("Copied to clipboard!");
        })
        .catch(function (error) {
            alert(error);
        });
             
    }
};

window.identifyBrowser = function() {
    var sBrowser, sUsrAg = navigator.userAgent;
    
    if (sUsrAg.indexOf("Firefox") > -1) {   // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        sBrowser = "Mozilla Firefox";   
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {     // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
        sBrowser = "Samsung Internet";
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {         // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        sBrowser = "Microsoft Internet Explorer";
    } else if (sUsrAg.indexOf("Edge") > -1) {               // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        sBrowser = "Microsoft Edge";
    } else if (sUsrAg.indexOf("Chrome") > -1) {             // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        sBrowser = "Google Chrome or Chromium";
    } else if (sUsrAg.indexOf("Safari") > -1) {             // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        sBrowser = "Apple Safari";
    } else {
        sBrowser = "unknown";
    }
    
    return sBrowser;
}