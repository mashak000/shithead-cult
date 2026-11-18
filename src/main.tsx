import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import Chart from './pages/Chart';
import { BrowserRouter, Route, Routes } from 'react-router';
import AuthProvider from './auth/AuthProvider';
import DevLogin from './pages/DevLogin';
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<DevLogin />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="" element={<Home />} />
              <Route path="/chart" element={<Chart />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
