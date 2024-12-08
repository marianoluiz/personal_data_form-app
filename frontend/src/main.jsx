import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/main.scss';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* diferent http routes */}
            <AuthProvider>
                {/* This is the AuthContext */}
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
