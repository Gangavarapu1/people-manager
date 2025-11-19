// server.js - simple in-memory people API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let people = [
  { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', phone: '111-222-3333' },
  { id: 2, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', phone: '222-333-4444' },
  { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com', phone: '333-444-5555' }
];

app.get('/people', (req, res) => res.json(people));

app.get('/people/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const p = people.find(x => x.id === id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

app.put('/people/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = people.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const updated = { ...people[idx], ...req.body, id };
  people[idx] = updated;
  res.json(updated);
});

app.delete('/people/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = people.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  people.splice(idx, 1);
  res.json({ success: true });
});

const port = 3000;
app.listen(port, () => console.log('Mock API listening on http://localhost:' + port));
