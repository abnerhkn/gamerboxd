const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Certifique-se de que o modelo User está correto
const router = express.Router();

// Secret para JWT
const JWT_SECRET = 'your_jwt_secret'; // Mude isso para um valor seguro em produção

// Rota para verificar se a autenticação está funcionando
router.get('/', (req, res) => {
    res.send('Autenticação funcionando!');
});

// Registro de usuário
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Validação básica dos dados
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    try {
        // Verificar se o usuário já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já registrado' });
        }

        // Hash da senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Criar novo usuário
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

// Login de usuário
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validação básica dos dados
    if (!email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    try {
        // Verificar se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário ou senha incorretos' });
        }

        // Verificar a senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Usuário ou senha incorretos' });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

// Middleware para proteger rotas
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};

module.exports = { router, authMiddleware };
