import React, { createContext, useReducer, useContext } from 'react';

// -------------------- Action Types --------------------
const ADD_TOAST = 'ADD_TOAST';
const REMOVE_TOAST = 'REMOVE_TOAST';

// -------------------- Reducer --------------------
// Manages the state of toasts. Handles adding new toasts and removing them by ID.
const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    default:
      return state;
  }
};

// -------------------- Context --------------------
const ToastStateContext = createContext();
const ToastDispatchContext = createContext();

// -------------------- Provider Component --------------------
export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

// -------------------- Custom Hooks for Context Access --------------------
export const useToastState = () => {
  const context = useContext(ToastStateContext);
  if (context === undefined) {
    throw new Error('useToastState must be used within a ToastProvider');
  }
  return context;
};

export const useToastDispatch = () => {
  const context = useContext(ToastDispatchContext);
  if (context === undefined) {
    throw new Error('useToastDispatch must be used within a ToastProvider');
  }
  return context;
};