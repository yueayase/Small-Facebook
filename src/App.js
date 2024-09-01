import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './auth/AuthContext';
import GlobalStyle from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import LoginFailedPage from './pages/LoginFailedPage';
import UserProfile from './pages/UserProfile';
import UserSettingPrivacy from './pages/UserSettingPrivacy';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginFailedPage />} />
          <Route path="/:user" element={<UserProfile />}/>
          <Route path="/setting" element={<UserSettingPrivacy />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
