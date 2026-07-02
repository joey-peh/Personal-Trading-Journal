const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const TRADES_FILE = path.join(__dirname, 'trades.txt');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure trades.txt exists
if (!fs.existsSync(TRADES_FILE)) {
  fs.writeFileSync(TRADES_FILE, '');
}

// GET all trades
app.get('/api/trades', (req, res) => {
  const content = fs.readFileSync(TRADES_FILE, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim() !== '');
  const trades = lines.map(line => JSON.parse(line));
  res.json(trades);
});

// POST new trade
app.post('/api/trades', (req, res) => {
  const trade = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  fs.appendFileSync(TRADES_FILE, JSON.stringify(trade) + '\n');
  res.json({ success: true, trade });
});

// DELETE trade by id
app.delete('/api/trades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const content = fs.readFileSync(TRADES_FILE, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim() !== '');
  const updated = lines.filter(line => {
    const trade = JSON.parse(line);
    return trade.id !== id;
  });
  fs.writeFileSync(TRADES_FILE, updated.join('\n') + (updated.length ? '\n' : ''));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Trading Journal running at http://localhost:${PORT}`);
});
