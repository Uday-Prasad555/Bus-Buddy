import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';     
import { GetstartedPage } from './components/GetstartedPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<GetstartedPage />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/login" element= {<LoginPage />} />
      </Routes>
    </>
  );
}

export default App
