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