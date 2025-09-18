# 🏡 Real Estate Web Application

This is a **React + TypeScript + Tailwind** frontend project built for the Real Estate Web Application assignment.
The app fetches property listings from a live API, implements **Firebase Authentication** for signup & login, and follows a modern responsive design based on the provided Figma mockups.

---

## 🚀 Features

* **Home Page**

  * Hero section with banner
  * "What We Do" section (4 cards)
  * Featured Properties (fetched from API)
  * Properties for Sale & Rent (API data, filterable)
  * Newsletter subscription section
  * Footer

* **Property Listings Page**

  * Displays full property list (API data)
  * Filter by property type (sale / rent)

* **Authentication**

  * Signup with name, email, password, confirm password
  * Login with email + password
  * Firebase Authentication integration
  * User session stored with Context API + localStorage
  * Redirects to homepage on login/signup

* **Other**

  * Responsive design (mobile, tablet, desktop)
  * Code structured with components, pages, and services

---

## 🛠️ Tech Stack

* **React + TypeScript** (Functional Components + Hooks)
* **React Router** (Navigation)
* **TailwindCSS** (Styling & Responsive Design)
* **Firebase Authentication** (Signup/Login)
* **Context API + localStorage** (User session handling)
* **MockAPI** (Dynamic property listings API)

---

## 📂 Project Structure

```
src/
 ├─ components/   # Reusable UI components (Navbar, Footer, PropertyCard, etc.)
 ├─ pages/        # Page-level components (Home, Listings, Login, Signup)
 ├─ services/     # Firebase configuration + API helpers
 ├─ context/      # Authentication context
 ├─ types/        # TypeScript interfaces (Property, User, etc.)
 ├─ App.tsx       # Routes setup
 └─ main.tsx      # Entry point
```

---

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) → Create Project.
2. Add a new **Web App** and copy the config values.
3. Enable **Email/Password Authentication** in Firebase Authentication settings.
4. Create a `.env.local` file in the root directory and add:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Restart your dev server after updating env variables.

---

## ⚡ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-username/real-estate-app.git
cd real-estate-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production

```bash
npm run build
```

---

## 🌍 API Used

Property listings are fetched from:

```
https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing
```

Each property includes details such as:

```json
{
  "id": "1",
  "name": "Lester Hackett",
  "city": "Andersonfurt",
  "state": "New Jersey",
  "country": "Tajikistan",
  "image": "https://picsum.photos/seed/rko0Qcmc/1736/389",
  "ownerName": "Christy Hane",
  "contactNumber": "1-839-606-5135 x9492"
}
```

---

## 📸 Screenshots

(Add screenshots of **Home Page, Listings Page, Signup, Login** here)

---

## 🎥 Demo Video

📌 [Google Drive Link to Demo Video](#)

---

## 🌐 Deployment

This project is deployed on:
🔗 [Live Demo (Vercel/Netlify)](#)

---

## ✅ Evaluation Checklist

* [x] Pixel-perfect UI (close to Figma design)
* [x] Firebase Authentication integration
* [x] Dynamic API data (no hardcoded listings)
* [x] Code structure & readability
* [x] Responsive and user-friendly

