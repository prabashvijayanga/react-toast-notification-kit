import { useCallback } from 'react';
import { useToastDispatch } from '../context/ToastContext';

let toastId = 0; // Simple incrementing ID generator

export const useToast = () => {
  const dispatch = useToastDispatch();

  // Core function to add a toast
  const addToast = useCallback(
    (message, type = 'info', duration = 5000) => {
      const id = toastId++;
      const newToast = {
        id,
        message,
        type, // 'success' | 'error' | 'warning' | 'info'
        duration,
      };

      dispatch({ type: 'ADD_TOAST', payload: newToast });

      // Auto-remove the toast after the specified duration
      setTimeout(() => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
      }, duration);
    },
    [dispatch]
  );

  // Expose specific methods for convenience
  const success = useCallback(
    (message, duration) => addToast(message, 'success', duration),
    [addToast]
  );
  const error = useCallback(
    (message, duration) => addToast(message, 'error', duration),
    [addToast]
  );
  const warning = useCallback(
    (message, duration) => addToast(message, 'warning', duration),
    [addToast]
  );
  const info = useCallback(
    (message, duration) => addToast(message, 'info', duration),
    [addToast]
  );

  return { addToast, success, error, warning, info };
};