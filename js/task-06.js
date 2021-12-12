const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    if(textInput.getAttribute('data-length') == event.currentTarget.value.length) {
        textInput.setAttribute('class', 'valid');
    }
    else {
        textInput.setAttribute('class', 'invalid');
    };
});