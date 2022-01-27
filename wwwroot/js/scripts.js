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