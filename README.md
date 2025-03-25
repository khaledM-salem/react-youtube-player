# YouTube Player

A React + TypeScript YouTube video player built with Vite, React Router, Zustand, and TailwindCSS.

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/youtube-player.git
cd youtube-player
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

This will start a local development server. Open the provided URL in your browser.

---

## 🛠 Project Structure
```
youtube-player/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── store/             # Zustand store
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   ├── style.css          # Tailwind styles
│   └── ...
├── public/
├── index.html             # Main HTML file
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## ✅ Features
- React with TypeScript
- React Router for navigation
- Zustand for state management
- TailwindCSS for styling
- Vite for fast development

---

## 📦 Build for Production
```sh
npm run build
```
This will generate optimized assets in the `dist/` folder.

---

## 🔥 Deploying the Project
For GitHub Pages deployment, install `gh-pages`:
```sh
npm install gh-pages --save-dev
```
Then, add these scripts to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
Deploy with:
```sh
npm run deploy
```

---

## 📜 License
This project is licensed under the MIT License.

---

Made with ❤️ by Khaled Salem

