let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.querySelector('button');

// Esta función devuelve true si los datos son correctos, y false en caso contrario
function datosDeUsuarios(correo, contrasena) {
    console.log(email.value + " " + password.value)
    if (email.value === correo && password.value === contrasena) {
        return true;
    } else {
        return false
    }
}

function enviarInfo(event) {
    event.preventDefault();

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Verificacion de campos vacio
    if (email.value.trim() === "" || password.value.trim() === "") {
        console.log('Por favor, complete todos los campos.');
        return;
    }
    // Llamamos a datosDeUsuarios con los valores deseados y verificamos el regex
    if (emailRegex.test(email.value) && datosDeUsuarios('josetrucktrailer29@gmail.com', '1234')) {
        // Redirección solo si la dirección de correo es válida y los datos son correctos
        window.location.href = "https://wt-shop.netlify.app";
        console.log('correcto');
    } 
    else {
        email.classList.add("active")
        password.classList.add("active")
        console.log('Por favor, ingrese una dirección de correo válida o verifique sus credenciales.');
    }

    email.value = "";
    password.value = "";
}

button.addEventListener('click', enviarInfo);
