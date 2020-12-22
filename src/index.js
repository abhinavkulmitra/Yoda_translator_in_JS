import "./styles.css";

var btnTag = document.querySelector(".inputBtn");

btnTag.addEventListener("click", apiCall);

function apiCall() {
  var userInput = document.querySelector("#textarea");
  let text = userInput.value;

  function errorHandler(error) {
    alert("Error happened. Try later.", error);
  }

  fetch("https://api.funtranslations.com/translate/yoda.json?text=" + text)
    .then((response) => response.json())
    .then((data) => {
      let translatedText = data.contents.translated;
      document.querySelector("#output").textContent = translatedText;
    })
    .catch(errorHandler);
}
