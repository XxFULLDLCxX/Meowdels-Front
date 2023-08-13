import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfoProvider from './utils/context';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
