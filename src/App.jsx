import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import AddModel from './pages/meows/Add.jsx';
import ModelsDetails from './pages/meows/Details.jsx';
import ManageModels from './pages/meows/Manage.jsx';
import InfoProvider from './utils/context';

function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/models/add" element={<AddModel />} />
          <Route path="/models/manage" element={<ManageModels />} />
          <Route path="/models/details" element={<ModelsDetails />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
