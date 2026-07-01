# 📝 Task Buddy - The Friendly Task Manager

A clean, responsive, and modern task management application built with **React** and styled using custom **CSS**. It features an interactive layout with categories, priority tags, and a task progress completion tracker.

---

## ✨ Features

* **Add Tasks:** Create new tasks with ease.
* **Prioritize & Categorize:** Tag tasks by priority levels (`High`, `Medium`, `Low`) and categories (`General`, `Work`, `Personal`).
* **Progress Tracking:** Dynamic calculation showing completed tasks vs total tasks.
* **Clean Layout:** Vibrant bright teal theme with clear, accessible rounded component cards.
* **Clear State Actions:** Safely delete individual tasks or clear your complete workload list.

---

## 🛠️ Project Structure

Your project structure inside the `src` directory is organized as follows:

```text
src/
├── components/
│   ├── ProgressTracker.jsx  # Tracks and displays completion count
│   ├── Taskform.jsx         # Input text, tags, and 'Add Task' trigger
│   └── Tasklist.jsx         # Renders the individual active task item rows
├── App.css                  # Component level styling
├── App.jsx                  # Root layout containing application logic
├── index.css                # Global theme styles (Background & Base UI)
└── main.jsx                 # Entry point for Vite