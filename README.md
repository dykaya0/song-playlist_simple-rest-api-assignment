# 🎵 Next.js Playlist API

A simple **in-memory playlist API** built with **Next.js (App Router)**.  
You can **add**, **remove**, **list**, and **clear** songs — no database required.

---

## 🚀 Live Demo

👉 **[View on Vercel](https://rest-api-assignmentse4458.vercel.app/)**  

---

## 🧠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Swagger UI** (OpenAPI documentation)
- **In-memory storage** (data resets on server restart)

---

## 📂 API Endpoints

| Method | Endpoint | Description | Request Body | Example |
|--------|-----------|--------------|---------------|----------|
| **GET** | `/playlist` | Get all songs in the playlist | – | – |
| **POST** | `/playlist` | Add a new song | `{ "title": "Yellow", "artist": "Coldplay" }` | `curl -X POST -H "Content-Type: application/json" -d '{"title":"Yellow","artist":"Coldplay"}' https://rest-api-assignmentse4458.vercel.app/` |
| **DELETE** | `/playlist?id={id}` | Remove a song by ID | – | `curl -X DELETE https://rest-api-assignmentse4458.vercel.app/` |
| **DELETE** | `/playlist` | Clear the entire playlist | – | `curl -X DELETE https://rest-api-assignmentse4458.vercel.app/` |

---

## 🧾 Swagger Documentation

| Type | Endpoint | Description |
|------|-----------|-------------|
| **OpenAPI JSON** | `/api/docs` | Returns the OpenAPI spec |
| **Swagger UI (HTML)** | `/api/docs/ui` | Interactive documentation |

---

## ⚠️ Data Persistence Limitation Notice

This API uses **in-memory data** only.  
All playlist data (songs added or removed) is stored temporarily inside a variable in the serverless runtime.

When deployed on **Vercel**, each API route runs inside a **stateless serverless function**.  
That means:

- Every request may run in a new environment.
- The `playlist` array resets to its default values after each function restart or deployment.
- No data is saved between requests.

This behavior is **expected** — the project is meant to demonstrate a **simple REST API structure** using **Next.js App Router** and **Swagger documentation**

If you want to actually test the playlist’s “add” or “remove” functionality in sequence, it’s best to run the project **locally**:

```bash
npm run dev
```
## 🧩 Example Usage

### ➕ Add a song

```bash
curl -X POST http://localhost:3000/api/playlist \
  -H "Content-Type: application/json" \
  -d '{"title": "Blinding Lights", "artist": "The Weeknd"}'
```
