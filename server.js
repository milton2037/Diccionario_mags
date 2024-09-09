const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'db_contenido'
});

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Configurar Express para servir archivos estáticos
app.use(express.static('.'));

// Ruta para obtener términos
app.get('/api/terminos', (req, res) => {
  connection.query('SELECT * FROM terminos', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener los términos' });
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
