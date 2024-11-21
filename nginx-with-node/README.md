#### Para subir a aplicação:

```
docker-compose up -d
```

#### Para derrubar e remover a aplicação:

```
docker-compose down
```

- Os dados do banco de dados ficam salvos na pasta "mysql" por meio de um volume.
- Um volume para o código da aplicação foi criado para a pasta "node".
- A aplicação rodará na porta 8080.

---

Desafio para criação de um docker compose para uma aplicação Node.js que ao chamar a rota adicione um novo registro na tabela `people` e retorne `<h1>Full Cycle Rocks!</h1>` com a listagem de pessoas cadastradas no banco de dados. Além disso, também deve ser utilizado o Nginx.
