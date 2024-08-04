const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Verificar se o email já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email já cadastrado');
    }

    let user = new User({ name, email, password });
    await user.save();
    res.send(user);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send('Erro ao criar usuário');
  }
});

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.error('Erro ao obter usuários:', err);
    res.status(500).send('Erro ao obter usuários');
  }
});

// Rota para verificar nome de usuário
router.get('/check-username/:username', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.username });
    res.send({ exists: !!user });
  } catch (err) {
    console.error('Erro ao verificar nome de usuário:', err);
    res.status(500).send('Erro ao verificar nome de usuário');
  }
});

// Rota para atualizar um usuário
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ id: req.params.id });
    if (!user) return res.status(404).send('Usuário não encontrado');

    user.name = name;
    user.email = email;
    user.password = password;
    await user.save();
    res.send(user);
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    res.status(500).send('Erro ao atualizar usuário');
  }
});

// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
  try {
    let user = await User.findOne({ id: req.params.id });
    if (!user) return res.status(404).send('Usuário não encontrado');

    await user.remove();
    res.send('Usuário removido');
  } catch (err) {
    console.error('Erro ao deletar usuário:', err);
    res.status(500).send('Erro ao deletar usuário');
  }
});

module.exports = router;
