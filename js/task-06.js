const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => {
    console.log(event.currentTarget.value.length)
    console.log(dataLength)

    if (event.currentTarget.value.length === dataLength) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
});