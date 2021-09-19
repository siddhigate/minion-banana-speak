var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorDiv = document.querySelector("#errorMessage");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

// formatting url
function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

// error handling function
function errorHandler(error) {
    errorDiv.innerText = "We are sorry. You can only use this for 5 times per hour. Try again later.";
}

// click event
btnTranslate.addEventListener("click", () => {

    errorDiv.innerText = "";
    outputDiv.innerText = "";
    clickEventHandler();
})

// handling click event 
function clickEventHandler() {
    
    var inputText = txtInput.value;
    if (inputText === "") {
        errorDiv.innerText = "Please enter some text";
    } else {
        fetch(getTranslationUrl(inputText))
            .then(response => response.json())
            .then(json => outputDiv.innerText = json.contents.translated)
            .catch(errorHandler)
            ;
    }

}

