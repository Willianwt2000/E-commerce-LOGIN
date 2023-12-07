let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.querySelector('button');

function datosDeUsuarios(correo, contrasena) {
  console.log(email.value + " " + password.value)
  return email.value === correo && password.value === contrasena;
}

function enviarInfo(event) {
  event.preventDefault();
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email.value) && datosDeUsuarios('josetrucktrailer29@gmail.com', '1234')) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = "https://wt-shop.netlify.app";
          console.log('Correcto');
        } else {
          email.classList.add("active");
          password.classList.add("active");
        }
      })
      .catch(error => console.error('Error en la solicitud Fetch:', error));
  } else {
    email.classList.add("active");
    password.classList.add("active");
    console.log('Por favor, ingrese una dirección de correo válida o verifique sus credenciales.');
  }

  email.value = "";
  password.value = "";
}

button.addEventListener('click', enviarInfo);
