# 📚 AI Learning Assistant

An intelligent, full-stack learning platform that leverages **Google Gemini AI** to transform PDF study materials into interactive flashcards, quizzes, summaries, and a conversational chatbot — helping students learn smarter, not harder.

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?logo=google&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

### 📄 Document Management

- **PDF Upload & Processing** — Upload study PDFs, which are automatically parsed and split into intelligent text chunks for AI analysis
- **In-App PDF Viewer** — View uploaded documents directly in the browser
- **Document Library** — Organized dashboard with flashcard/quiz counts per document

### 🤖 AI-Powered Learning (Google Gemini)

- **Smart Flashcard Generation** — Auto-generate flashcards with difficulty ratings (easy/medium/hard)
- **Quiz Generation** — Create multiple-choice quizzes from your documents with explanations
- **Document Summarization** — Get concise AI summaries highlighting key concepts
- **Chat with Documents** — Ask questions about your uploaded material and get context-aware answers
- **Concept Explainer** — Select a concept and get a detailed, educational explanation with examples

### 📇 Flashcard System

- Interactive flip-card study interface
- Star/bookmark important cards
- Track review count and last reviewed date
- Difficulty-based filtering

### 📝 Quiz System

- 4-option multiple-choice format
- Instant scoring with correct/incorrect feedback
- Detailed explanations per question
- Score history and results tracking

### 📊 Progress Dashboard

- Visual overview of learning activity
- Document count, flashcard sets, and quiz scores
- Track study progress over time

### 👤 User Management

- Secure registration and login with JWT authentication
- Profile management (username, email, profile image)
- Password change functionality

---

## 🏗️ Tech Stack

| Layer             | Technology                                                       |
| ----------------- | ---------------------------------------------------------------- |
| **Frontend**      | React 19, Vite 7, Tailwind CSS 4, React Router 7                 |
| **Backend**       | Node.js, Express 5 (ES Modules)                                  |
| **Database**      | MongoDB Atlas (Mongoose 9)                                       |
| **AI Engine**     | Google Gemini API (`gemini-2.5-flash` / `gemini-2.5-flash-lite`) |
| **Auth**          | JWT (jsonwebtoken) + bcrypt.js                                   |
| **File Handling** | Multer (PDF upload), pdf-parse (text extraction)                 |
| **Hosting**       | Vercel (frontend) + Render (backend)                             |

---

## 📁 Project Structure

```
AI-LEARNING-App/
├── backend/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── multer.js          # File upload config (PDF only, 10MB limit)
│   ├── controllers/
│   │   ├── aiController.js    # Flashcard/quiz/summary/chat generation
│   │   ├── authController.js  # Register, login, profile, password
│   │   ├── documentController.js  # Upload, CRUD, PDF processing
│   │   ├── flashcardController.js # CRUD, review, star/unstar
│   │   ├── quizController.js  # Generate, submit, results
│   │   └── progressController.js  # Dashboard statistics
│   ├── middleware/
│   │   ├── auth.js            # JWT verification middleware
│   │   └── errorHandler.js    # Global error handler
│   ├── models/
│   │   ├── User.js            # User schema (bcrypt password hashing)
│   │   ├── Document.js        # Document + extracted text + chunks
│   │   ├── Flashcard.js       # Flashcard sets with review tracking
│   │   ├── Quiz.js            # Quiz with questions + user answers
│   │   └── ChatHistory.js     # Document chat conversation history
│   ├── routes/                # Express route definitions
│   ├── utils/
│   │   ├── geminiServer.js    # Gemini AI service (all AI calls)
│   │   ├── textChunker.js     # Text chunking + relevance search
│   │   └── pdfParser.js       # PDF text extraction
│   ├── uploads/documents/     # Uploaded PDF storage
│   ├── server.js              # Express app entry point
│   ├── package.json
│   └── .env                   # Environment variables (not in git)
│
├── frontend/ai-learning-assistant/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ai/            # AI Actions panel
│   │   │   ├── auth/          # ProtectedRoute wrapper
│   │   │   ├── chat/          # ChatInterface component
│   │   │   ├── common/        # PageHeader, Spinner, Tabs, etc.
│   │   │   ├── documents/     # Document upload card
│   │   │   ├── flashcards/    # FlashcardManager, FlashcardViewer
│   │   │   ├── layout/        # AppLayout, Sidebar, Navbar
│   │   │   └── quizzes/       # QuizManager, QuizTaker
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Global auth state (React Context)
│   │   ├── pages/
│   │   │   ├── Auth/          # LoginPage, RegisterPage
│   │   │   ├── Dashboard/     # DashboardPage
│   │   │   ├── Documents/     # DocumentListPage, DocumentDetailPage
│   │   │   ├── Flashcards/    # FlashcardsListPage, FlashcardPage
│   │   │   ├── Profile/       # ProfilePage
│   │   │   └── Quizzes/       # QuizTakePage, QuizResultPage
│   │   ├── services/          # API service modules (axios)
│   │   ├── utils/
│   │   │   ├── apiPaths.js    # API endpoint definitions
│   │   │   └── axiosInstance.js # Axios config with JWT interceptor
│   │   ├── App.jsx            # React Router config
│   │   └── main.jsx           # App entry point
│   ├── vercel.json            # Vercel SPA routing config
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔌 API Reference

All endpoints are prefixed with `/api`. Protected routes require `Authorization: Bearer <token>` header.

### Authentication (`/api/auth`)

| Method | Endpoint           | Access  | Description           |
| ------ | ------------------ | ------- | --------------------- |
| `POST` | `/register`        | Public  | Create new account    |
| `POST` | `/login`           | Public  | Login & get JWT token |
| `GET`  | `/profile`         | Private | Get user profile      |
| `PUT`  | `/profile`         | Private | Update username/email |
| `POST` | `/change-password` | Private | Change password       |

### Documents (`/api/documents`)

| Method   | Endpoint  | Access  | Description                      |
| -------- | --------- | ------- | -------------------------------- |
| `POST`   | `/upload` | Private | Upload PDF (multipart/form-data) |
| `GET`    | `/`       | Private | List all user documents          |
| `GET`    | `/:id`    | Private | Get document details + chunks    |
| `DELETE` | `/:id`    | Private | Delete document                  |

### AI Features (`/api/ai`)

| Method | Endpoint                    | Access  | Description                       |
| ------ | --------------------------- | ------- | --------------------------------- |
| `POST` | `/generate-flashcards`      | Private | Generate flashcards from document |
| `POST` | `/generate-quiz`            | Private | Generate quiz questions           |
| `POST` | `/generate-summary`         | Private | Generate document summary         |
| `POST` | `/chat`                     | Private | Chat with document context        |
| `POST` | `/explain-concept`          | Private | Explain a concept from document   |
| `GET`  | `/chat-history/:documentId` | Private | Get chat history                  |

### Flashcards (`/api/flashcards`)

| Method   | Endpoint          | Access  | Description                   |
| -------- | ----------------- | ------- | ----------------------------- |
| `GET`    | `/`               | Private | Get all flashcard sets        |
| `GET`    | `/:documentId`    | Private | Get flashcards for a document |
| `PUT`    | `/:cardId/review` | Private | Mark card as reviewed         |
| `PUT`    | `/:cardId/star`   | Private | Toggle star on a card         |
| `DELETE` | `/:id`            | Private | Delete flashcard set          |

### Quizzes (`/api/quizzes`)

| Method   | Endpoint       | Access  | Description                |
| -------- | -------------- | ------- | -------------------------- |
| `GET`    | `/:documentId` | Private | Get quizzes for a document |
| `GET`    | `/quiz/:id`    | Private | Get quiz by ID             |
| `POST`   | `/:id/submit`  | Private | Submit quiz answers        |
| `GET`    | `/:id/results` | Private | Get quiz results           |
| `DELETE` | `/:id`         | Private | Delete quiz                |

### Progress (`/api/progress`)

| Method | Endpoint     | Access  | Description                  |
| ------ | ------------ | ------- | ---------------------------- |
| `GET`  | `/dashboard` | Private | Get learning dashboard stats |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **MongoDB Atlas** account (free tier works)
- **Google Gemini API Key** — [Get one here](https://aistudio.google.com/apikey)

### 1. Clone the Repository

```bash
git clone https://github.com/sakshamg92/AI-LEARNING-App.git
cd AI-LEARNING-App
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
MAX_FILE_SIZE=10485760
GEMINI_API_KEY=your_gemini_api_key_here
CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend/ai-learning-assistant
npm install
```

Optionally create a `.env` file (not required for local dev since it defaults to `localhost:5000`):

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

---

## 🌐 Deployment

### Backend → Render

1. Create a **Web Service** on [render.com](https://render.com)
2. Connect your GitHub repo
3. Set **Root Directory** to `backend`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `npm start`
6. Add all environment variables from `.env` (set `NODE_ENV=production`)
7. Set `CLIENT_URL` to your Vercel frontend URL

### Frontend → Vercel

1. Create a new project on [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Set **Root Directory** to `frontend/ai-learning-assistant`
4. Add environment variable: `VITE_API_URL` = your Render backend URL
5. Deploy — Vercel auto-detects Vite and builds accordingly

> **Note:** After deploying both, update Render's `CLIENT_URL` with the final Vercel URL for CORS to work.

---

## ⚙️ Environment Variables

### Backend

| Variable         | Description                         | Example                      |
| ---------------- | ----------------------------------- | ---------------------------- |
| `MONGODB_URI`    | MongoDB Atlas connection string     | `mongodb+srv://...`          |
| `PORT`           | Server port                         | `5000`                       |
| `JWT_SECRET`     | Secret key for JWT signing          | Random 64-char string        |
| `JWT_EXPIRE`     | Token expiry duration               | `7d`                         |
| `NODE_ENV`       | Environment mode                    | `development` / `production` |
| `MAX_FILE_SIZE`  | Max upload size in bytes            | `10485760` (10MB)            |
| `GEMINI_API_KEY` | Google Gemini API key               | `AIzaSy...`                  |
| `CLIENT_URL`     | Allowed frontend origin(s) for CORS | `http://localhost:5173`      |

### Frontend

| Variable       | Description          | Example                 |
| -------------- | -------------------- | ----------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |

---

## 🔄 How It Works

```
┌──────────────┐    Upload PDF    ┌──────────────┐    Store    ┌──────────────┐
│              │ ───────────────► │              │ ─────────► │              │
│   Frontend   │                 │   Backend    │            │   MongoDB    │
│   (React)    │ ◄─────────────  │  (Express)   │ ◄─────────  │   Atlas     │
│              │   JSON Response │              │   Query    │              │
└──────────────┘                 └──────┬───────┘            └──────────────┘
                                       │
                           Text chunks + prompt
                                       │
                                       ▼
                                ┌──────────────┐
                                │  Google      │
                                │  Gemini AI   │
                                │  API         │
                                └──────────────┘
```

1. **User uploads a PDF** → Backend extracts text using `pdf-parse`
2. **Text is chunked** → Split into ~500-word overlapping chunks for optimal AI context
3. **AI features** → When requested, relevant chunks are sent to Gemini with structured prompts
4. **Flashcards/Quizzes** → AI output is parsed and stored in MongoDB for persistent access
5. **Chat** → Uses keyword-based relevance search to find the best chunks before querying Gemini

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Saksham Gaurkhede** — [@sakshamg92](https://github.com/sakshamg92)
