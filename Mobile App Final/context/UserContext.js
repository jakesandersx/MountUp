import React, { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
            lastName: '',
            email: '',
            password: '',
            verifyPassword: '',
            checked: '',
            id: '',
    });

    const updateUser = (newUserInfo) => {
        setUserInfo({...userInfo, ...newUserInfo});
    };

    const updatePassword = (newPassword) => {
        setUserInfo({ ...userInfo, password: newPassword });
    };

    return (
        <UserContext.Provider value={{userInfo, updateUser, updatePassword}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access user context
export const useUser = () => useContext(UserContext);
