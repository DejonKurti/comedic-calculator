(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const result = document.querySelectorAll(".results");
    console.log(result)
    const defaultLabelText = "No file selected";
    const defaultResultText = "No results";
    const newResult = "You are in the 92nd percentile";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    // Set default text for results
    result.textContent = defaultResultText;
    document.getElementById("result").innerHTML = result.textContent;
    console.log(result.textContent)  

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
      result.textContent = newResult;
      document.getElementById("result").innerHTML = result.textContent;
    });
  }
);
