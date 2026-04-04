# ⚙️ Setup Documentation

## 📦 Clone the Repository

```bash
git clone https://github.com/sagardas25/react-landing-page
cd react-landing-page
```

---

## 💻 Run Locally (Without Docker)

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## 🐳 Run with Docker

### 1. Build and start container

```bash
docker compose up --build
```

### 2. Open in browser

```
http://localhost:5173
```

---

## 🛑 Stop Docker Container

```bash
docker compose down
```

---

## ⚠️ Prerequisites

* Node.js (v18 or above)
* npm
* Docker (for container setup)

---

## 📝 Notes

* If port `5173` is already in use, change it in `docker-compose.yml`
* Make sure Docker is running before executing Docker commands
