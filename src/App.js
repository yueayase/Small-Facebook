import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './auth/AuthContext';
import GlobalStyle from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import LoginFailedPage from './pages/LoginFailedPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginFailedPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
