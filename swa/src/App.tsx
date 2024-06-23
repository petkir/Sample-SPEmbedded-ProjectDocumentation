import React from 'react';

import './App.css';
import { StoreProvider } from './store/StoreContext';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Container from './pages/Container';
import { Login, useIsSignedIn } from '@microsoft/mgt-react';
import { CreateContainer } from './pages/CreateContainer';

function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <BrowserRouter>

      {!isSignedIn ?   <Login />: <>
        <StoreProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" Component={About} />
              <Route path="/container/:id" Component={Container} />
              <Route path="/createcontainer" Component={CreateContainer} />
            </Routes>
          </MainLayout>
        </StoreProvider>
      </>}

    </BrowserRouter>
  );
}

export default App;
