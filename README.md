
# GamerBoxd

GamerBoxd é uma aplicação web inspirada no Letterboxd, onde os usuários podem avaliar jogos com até 5 estrelas, deixar comentários/reviews, procurar jogos para postar reviews, comentar reviews de outras pessoas, fazer login, registrar, seguir pessoas, comentar nas reviews e curtir, e também excluir. 

## Sobre o Projeto

Este projeto foi desenvolvido para a disciplina de Desenvolvimento Web do curso de Engenharia de Software da Universidade Federal do Ceará, sob orientação do professor Sidartha Carvalho. O design do Figma foi criado por Lorena.

## Funcionalidades

- **Avaliação de Jogos**: Os usuários podem avaliar jogos com uma classificação de até 5 estrelas.
- **Reviews e Comentários**: Deixe comentários detalhados sobre os jogos e leia as reviews de outros usuários.
- **Interação Social**: Siga outros jogadores, comente nas reviews deles e curta os comentários.
- **Gerenciamento de Conta**: Crie uma conta, faça login, edite seu perfil e acompanhe suas atividades.
- **Pesquisa de Jogos**: Procure por jogos para postar reviews ou ver o que outros estão dizendo.
- **Administração de Conteúdo**: Modere seus próprios comentários e reviews, excluindo-os quando necessário.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js com MongoDB
- **Hospedagem**: Heroku

## Arquitetura do Projeto

O GamerBoxd segue o padrão de arquitetura MVC (Model-View-Controller):

- **Model (Modelo)**: Representa a estrutura dos dados e a lógica de negócios da aplicação.
- **View (Visão)**: Responsável pela apresentação dos dados ao usuário. No nosso caso, as views são gerenciadas pelo React.js.
- **Controller (Controlador)**: Lida com a comunicação entre o Model e a View, processando as entradas do usuário e atualizando os dados no Model.

## Estrutura do Projeto

```plaintext
projeto/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

## Instalação

### Pré-requisitos

- Node.js
- MongoDB
- Heroku CLI (para deploy)

### Backend

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gamerboxd.git
cd gamerboxd/backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` e adicione suas configurações de MongoDB e outras variáveis de ambiente necessárias.

```plaintext
MONGO_URI=sua-string-de-conexao-do-mongodb
PORT=5000
```

4. Inicie o servidor:

```bash
npm start
```

### Frontend

1. Navegue para o diretório do frontend:

```bash
cd ../frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm start
```

## Deploy no Heroku

1. Faça login no Heroku CLI:

```bash
heroku login
```

2. Crie um novo aplicativo Heroku:

```bash
heroku create nome-do-seu-app
```

3. Configure as variáveis de ambiente no Heroku:

```bash
heroku config:set MONGO_URI=sua-string-de-conexao-do-mongodb
```

4. Faça deploy para o Heroku:

```bash
git push heroku main
```

## Contribuição

1. Fork o repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adicionei minha feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

- Email: seu-email@example.com
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-usuario)
- GitHub: [Seu GitHub](https://github.com/seu-usuario)

---

Obrigado por contribuir para o GamerBoxd!
