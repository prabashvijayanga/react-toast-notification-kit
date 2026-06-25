import React from 'react';
import { ToastProvider } from './context/ToastContext'; 
import { ToastContainer } from './components/ToastContainer';
import { useToast } from './hooks/useToast';

// This is a test component that uses the toast hook
const TestComponent = () => {
  const toast = useToast();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold text-white mb-8">
        🚀 Toast Notification System
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => toast.success('✅ Data saved successfully!')}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
        >
          Success Toast
        </button>
        <button
          onClick={() => toast.error('❌ Something went wrong!')}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
        >
          Error Toast
        </button>
        <button
          onClick={() => toast.warning('⚠️ Please check your input!')}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
        >
          Warning Toast
        </button>
        <button
          onClick={() => toast.info('ℹ️ New update available!')}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
        >
          Info Toast
        </button>
      </div>
      <p className="text-gray-400 mt-8 text-sm">
        Click any button to trigger a notification!
      </p>
    </div>
  );
};

function App() {
  return (
    <ToastProvider>
      <TestComponent />
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;