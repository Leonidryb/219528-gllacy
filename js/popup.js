var link = document.querySelector(".feedback-link");
  
var popup = document.querySelector(".feedback");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form")

var nameFocus = popup.querySelector(".feedback-name");

var mailValid = popup.querySelector(".feedback-mail");

  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
    nameFocus.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
  });

form.addEventListener("submit", function (evt) {
	if (!nameFocus.value || !mailValid.value)
    evt.preventDefault();
	popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("feedback-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
      }
    }
  });

  