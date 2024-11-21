const express = require('express');
const mysql = require('mysql');
const faker = require('@faker-js/faker');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
});

connection.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
  );
`);

const app = express();

app.get('/', (_req, res) => {
  const peopleName = faker.fakerPT_BR.person.firstName();
  connection.query('INSERT INTO people (name) VALUES (?)', [peopleName]);

  connection.query('SELECT * FROM people', (err, results) => {
    if (err) {
      res.status(400).send('Ocorreu um erro :(');
      return;
    }

    const items = results.map(({ id, name }) => `<li>${id} - ${name}</li>`);
    const joinedItems = items.join('');
    const list = `<ul>${joinedItems}</ul>`;

    res.send(`<h1>Full Cycle Rocks!</h1>${list}`);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
