import React, { createContext, useState } from 'react';

// Define context
const AuthContext = createContext();

// Define the Provider
const AuthProvider = props => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <AuthContext.Provider value={isLoggedIn}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Define the Consumer
const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };