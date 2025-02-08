// Jeremy Auradou
// CSC193A-1 
// Assignment 6

/* Starter file */
(function() {
  "use strict";

  /* The starting point in our program, setting up a listener
   * for the "load" event on the window, signaling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called. */
  window.addEventListener("load", init);
  
  /* Initializes the event listeners for the Encrypt-It and Reset buttons. */
  function init() {
    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    let resetButton = document.getElementById("reset");

    encryptButton.addEventListener("click", handleEncryption);
    resetButton.addEventListener("click", handleReset);
  }

  /* Handles the encryption. */
  function handleEncryption() {
    console.log("Button pressed!");

    let beforeEncryption = document.getElementById("input-text");
    let afterEncryption = document.getElementById("result");
    
    let encryptedText = shiftCipher(beforeEncryption.value);
    afterEncryption.textContent = encryptedText;
  }

  /* Clears the input and output when the reset button is clicked. */
    function handleReset() {
      document.getElementById("input-text").value = "";
      document.getElementById("result").textContent = "";
    }

  /* Encrypts text using shift cipher (shifts each letter by 1). Numbers remain the same. */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    let tmp = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= "a" && text[i] <= "z") {
        if (text[i] === "z") {
          tmp = "a"
        } else {
          tmp = String.fromCharCode(text[i].charCodeAt(0) + 1);
        }
        result += tmp;
      } else { 
        result += text[i];
      }
    }
    return result;
  }

})();
