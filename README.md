# 🚀 React Toast Notification Kit

[![npm version](https://badge.fury.io/js/react-toast-notification-kit.svg)](https://badge.fury.io/js/react-toast-notification-kit)
[![GitHub stars](https://img.shields.io/github/stars/prabashvijayanga/react-toast-notification-kit)](https://github.com/prabashvijayanga/react-toast-notification-kit/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/prabashvijayanga/react-toast-notification-kit)](https://github.com/prabashvijayanga/react-toast-notification-kit/issues)
[![GitHub license](https://img.shields.io/github/license/prabashvijayanga/react-toast-notification-kit)](https://github.com/prabashvijayanga/react-toast-notification-kit/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/react-toast-notification-kit.svg)](https://www.npmjs.com/package/react-toast-notification-kit)
[![Bundle Size](https://img.shields.io/bundlephobia/min/react-toast-notification-kit)](https://bundlephobia.com/package/react-toast-notification-kit)

> A lightweight, production-ready toast notification system built with **React** and **Tailwind CSS**. Perfect for displaying success, error, warning, and info messages in your React applications.

---

## ✨ Features

- 📦 **Zero Dependencies** - Only React & Tailwind CSS
- 🎨 **Beautiful UI** - Smooth animations and clean design
- ⚡ **Lightweight** - Only **2.8 kB** bundle size
- 🔧 **Easy to Use** - Simple hook-based API
- 📱 **Fully Responsive** - Works on all screen sizes
- 🧹 **Clean Code** - Follows industry standards
- 🔥 **Production Ready** - Tested and optimized

---

## 🚀 Installation

```bash
npm install react-toast-notification-kit
```

```bash
yarn add react-toast-notification-kit
```

### Prerequisites

- **React** >= 18.0.0
- **Tailwind CSS** >= 3.0.0 (for styling)

---

## 🎯 Usage

### 1. Wrap Your App with `ToastProvider`

```jsx
import { ToastProvider, ToastContainer } from 'react-toast-notification-kit';

function App() {
  return (
    <ToastProvider>
      <YourComponent />
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;
```

### 2. Use the `useToast` Hook Anywhere

```jsx
import { useToast } from 'react-toast-notification-kit';

function YourComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('Data saved successfully! 🎉');
  };

  const handleError = () => {
    toast.error('Something went wrong! ❌');
  };

  const handleWarning = () => {
    toast.warning('Please check your input! ⚠️');
  };

  const handleInfo = () => {
    toast.info('New update available! ℹ️');
  };

  return (
    <div className="flex gap-4">
      <button onClick={handleSuccess}>Success</button>
      <button onClick={handleError}>Error</button>
      <button onClick={handleWarning}>Warning</button>
      <button onClick={handleInfo}>Info</button>
    </div>
  );
}
```

---

## 📖 API Reference

| Method | Description | Parameters |
| ------ | ----------- | ---------- |
| `toast.success(message, duration?)` | Shows a green success toast | `message: string`, `duration?: number` |
| `toast.error(message, duration?)` | Shows a red error toast | `message: string`, `duration?: number` |
| `toast.warning(message, duration?)` | Shows a yellow warning toast | `message: string`, `duration?: number` |
| `toast.info(message, duration?)` | Shows a blue info toast | `message: string`, `duration?: number` |
| `toast.addToast(message, type, duration?)` | Generic method to add any toast | `message: string`, `type: 'success'\|'error'\|'warning'\|'info'`, `duration?: number` |

> **Note:** Default duration is `5000ms` (5 seconds).

---

## 🎨 Customization

### Change Toast Position

Update the `ToastContainer` component:

```jsx
<div className="fixed bottom-4 right-4 z-50 flex flex-col items-end max-h-screen overflow-y-auto p-2 space-y-2">
```

**Options:**
- `top-4 left-4` - Top Left
- `top-4 right-4` - Top Right
- `bottom-4 left-4` - Bottom Left
- `bottom-4 right-4` - Bottom Right (Default)

### Custom Colors

Update the `typeStyles` object in `ToastItem.jsx`:

```jsx
const typeStyles = {
  success: 'bg-green-500 border-green-700',
  error: 'bg-red-500 border-red-700',
  warning: 'bg-yellow-500 border-yellow-700 text-gray-900',
  info: 'bg-blue-500 border-blue-700',
};
```

### Custom Icons

Update the `iconMap` object in `ToastItem.jsx`:

```jsx
const iconMap = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

```bash
git clone https://github.com/prabashvijayanga/react-toast-notification-kit.git
cd react-toast-notification-kit
npm install
npm run dev
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Prabash Vijayanga**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/prabashvijayanga)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/prabashvijayanga)
