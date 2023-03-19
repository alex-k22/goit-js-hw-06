const form = document.querySelector('form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля");
  }

const userData = {
    [email.name]: email.value,
    [password.name]: password.value,
}
    console.log(userData);

    event.currentTarget.reset();
  
}