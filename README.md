# PopX - React JS Front-end Mobile Simulator

A pixel-perfect, highly responsive mobile application simulator built using **React JS** and **Vite** for the PopX Front-end Qualifier Assignment. The app simulator mimics an iOS device layout and is centered dynamically on the screen.

🔗 **Live Deployment:** [https://popx-lime-eight.vercel.app/](https://popx-lime-eight.vercel.app/)  
📁 **Repository:** [https://github.com/AppuzMathew9/popx](https://github.com/AppuzMathew9/popx)

---

## 📱 Features

* **Centered Mobile Bezel Layout**: The entire mobile interface is modeled within a simulated matte black iPhone frame, horizontally and vertically centered with responsive scaling rules (keeps proportions intact on varying window sizes).
* **Responsive Styling**: Gracefully transitions to a fullscreen mobile application view on small handheld screens.
* **State & Navigation**: Fully functional page routing using `react-router-dom` with zero-latency screen transitions.
* **Component Design**:
  * **Floating Label Inputs**: Modern inputs with active label animations and border-cutout transitions.
  * **Custom Radio Group**: Custom styled radio buttons with smooth hover and click animations.
* **Seamless LocalStorage Flow**: Storing registered profile credentials locally to seamlessly log in across browser refreshes.
* **Interactive Logout**: Dedicated settings logout action to let reviewers quickly reset the sign-in/signup flow.

---

## 🛠️ Tech Stack

* **Core**: React JS (v19)
* **Build Tool**: Vite (v8)
* **Router**: React Router Dom (v7)
* **Icons**: Lucide React
* **Styling**: Vanilla CSS (Pixel-perfect Custom Styling)

---

## 🚀 Getting Started Locally

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/AppuzMathew9/popx.git
cd popx
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🔑 Test Credentials
For convenience during evaluation, the screens are pre-populated with correct test credentials:
* **Email:** `marry@gmail.com`
* **Password:** `Marry Doe`
