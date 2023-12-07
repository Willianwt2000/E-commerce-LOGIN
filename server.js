const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.options('/', cors()); // Habilita preflight requests para la raíz


// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a tu servidor Express!');
});

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Implementa tu lógica de autenticación aquí

  if (email === 'josetrucktrailer29@gmail.com' && password === '1234') {
    res.json({ success: true, message: 'Autenticación exitosa' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
