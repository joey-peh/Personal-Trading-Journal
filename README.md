# 📈 Personal Trading Journal

A lightweight personal trading journal built with HTML, Node.js, and Express. Trade entries are saved to and read from a local `trades.txt` file — no database required.

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)
![HTML](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-E34F26?style=flat&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

## ✨ Features

| Feature | Description |
|---|---|
| 📝 Trade Logging | Log date, symbol, direction, entry/exit price, quantity, strategy, outcome, and notes |
| 💰 Auto P&L | Automatically calculates profit/loss based on direction (Long/Short) |
| 📊 Stats Bar | Displays total trades, win rate, total P&L, best and worst trade |
| 🔍 Filtering | Filter trade log by symbol, direction, and outcome |
| 💾 Flat File Storage | All entries persisted locally to `trades.txt` — no database needed |

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm (comes bundled with Node.js)

## 🚀 Setup & Run

**1. Initialise the project**

​```bash
mkdir trading-journal && cd trading-journal
npm init -y
npm install express
mkdir public
​```

**2. Place the files** as shown in the file structure above.

**3. Start the server**

​```bash
node server.js
​```

**4. Open your browser**

​```
http://localhost:3000
​```

## ⚙️ How It Works

Each trade entry is stored as a single JSON line in `trades.txt`. The backend exposes three REST endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/trades` | Reads and returns all entries from `trades.txt` |
| `POST` | `/api/trades` | Appends a new trade entry to `trades.txt` |
| `DELETE` | `/api/trades/:id` | Removes an entry from `trades.txt` by ID |

The frontend fetches from these endpoints and renders the trade log dynamically in the browser without any page reloads.

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Backend | Node.js, Express |
| Storage | Flat file (`.txt`) |

## 📄 License

This project is licensed under the [MIT License](LICENSE).
