require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true, service: 'oblo-backend' }));
app.get('/', (req, res) => res.send('Oblò Go backend attivo!'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server listening on', PORT));
