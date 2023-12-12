import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const AuthContext = createContext();

// Initial state for authentication
const initialState = {
  isLoggedIn: false,
  user: null,
};

// Define actions for authentication
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login function
  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
