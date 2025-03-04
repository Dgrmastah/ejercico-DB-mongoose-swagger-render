const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const taskRoutes = require('./routes/tasks'); // Asegúrate de importar las rutas correctamente

dotenv.config({ path: './config/.env' });

const app = express();

app.use(express.json()); // Necesario para parsear el cuerpo de la solicitud

connectDB();

// Usa las rutas de tareas con el prefijo adecuado
app.use('/api/tareas', taskRoutes);  // Esto es importante

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Servidor corriendo y conectado a la base de datos');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
