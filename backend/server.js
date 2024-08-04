require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const initializeCounter = require('./controllers/initializeCounter');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth').router;

const app = express();

// Verificação da variável de ambiente
console.log('MONGODB_URI:', process.env.MONGODB_URI);

// Configuração de CORS
app.use(cors({
  origin: 'http://localhost:3000' // Permitir apenas esta origem
}));

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
    // Inicializar contador após conexão com o banco de dados
    initializeCounter();
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Middleware para parsing do body
app.use(bodyParser.json());

// Rotas
app.use('/api/usuarios', usersRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
