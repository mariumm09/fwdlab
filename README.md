# 📚 Smart Library System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing a library's book collection. Librarians can add new books, view all available books, and remove books from the collection.

## 🎯 Features

- **Add Books**: Enter book details including title, author, ISBN, and publication year
- **View Books**: Display all books in a responsive card layout
- **Delete Books**: Remove books from the collection with a single click
- **Responsive Design**: Mobile-friendly UI that works on screens 320px and above
- **Real-time Updates**: UI updates dynamically without page reload

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React 18** - UI library with functional components and hooks
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Fetch API** - For making HTTP requests to the backend

### Backend (`/server`)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📁 Project Structure

```
smart-library-system/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html     # HTML template with Tailwind CDN
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookForm.js    # Form for adding new books
│   │   │   ├── BookList.js    # Display all books
│   │   │   └── BookCard.js    # Individual book card
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                 # Express backend
│   ├── models/
│   │   └── Book.js        # Mongoose Book schema
│   ├── routes/
│   │   └── bookRoutes.js  # API routes
│   ├── server.js          # Server entry point
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Local installation or MongoDB Atlas account
  - Local: [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)
  - Atlas: [Create free cluster](https://www.mongodb.com/cloud/atlas)

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/smart-library-system.git
cd smart-library-system
```

### Step 2: Setup Backend

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server folder:
```bash
touch .env
```

4. Add the following to `.env`:
```
MONGODB_URI=mongodb://localhost:27017/smart_library
PORT=5000
```

> **Note**: For MongoDB Atlas, replace the URI with your connection string:
> `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smart_library`

5. Start MongoDB (if using local):
```bash
# On Mac with Homebrew
brew services start mongodb-community
```

6. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Step 3: Setup Frontend

1. Open a new terminal and navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Retrieve all books |
| POST | `/api/books` | Add a new book |
| DELETE | `/api/books/:id` | Delete a book by ID |

### Request/Response Examples

**POST /api/books**
```json
// Request Body
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0743273565",
  "year": 1925
}

// Response
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "_id": "...",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565",
    "year": 1925,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## 📱 Screenshots

The application features:
- A clean, modern dark theme with amber accents
- Responsive card layout for book display
- Interactive form with validation
- Hover effects on delete buttons
- Loading states and error messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**Developed for CS-300L - Full Stack Web Development Lab**

Air University Multan Campus | Fall 2025

