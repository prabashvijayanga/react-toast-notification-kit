import React from 'react';
import { createPortal } from 'react-dom';
import { useToastState } from '../context/ToastContext';
import { ToastItem } from './ToastItem';

export const ToastContainer = () => {
  const { toasts } = useToastState();

  // If there are no toasts, render nothing to save performance
  if (toasts.length === 0) return null;

  return createPortal(
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end max-h-screen overflow-y-auto p-2 space-y-2">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </div>,
    document.body // Render outside the main app root to avoid CSS overflow conflicts
  );
};