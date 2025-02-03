// Jeremy Auradou
// CSC193A-1 
// Assignment 5

function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
    alert("Changing style.")
    if (document.getElementById("fancyS").checked) {
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
    } else {
        document.getElementById("textInput").style.fontWeight = "normal";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
    }   
}

function applyMooStyle() {
        let textInput = document.getElementById("textInput");
        var str = textInput.value.toUpperCase();

        var parts = str.split("."); 
        str = parts.join("-MOO!"); 
        
        textInput.value = str;
}