import React from 'react';

import { AuthProvider } from './context/AuthContext';

import Articles from './components/Articles';

const App = () => {
  return (
    <AuthProvider>
      <Articles />
    </AuthProvider>
  );
}

export default App;
