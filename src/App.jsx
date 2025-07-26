import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import ProductCard from './components/productCard';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register';

function App() {
  return (
   
    <BrowserRouter>
      <div>
        <Toaster position='top-right'/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path='/testing' element={<TestPage/>} />
          <Route path='/admin/*' element={<AdminPage/>} />
          <Route path='/*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


//https://jmgxjrwvtirrxnrjarwa.supabase.co 

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZ3hqcnd2dGlycnhucmphcndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNzQ2MzQsImV4cCI6MjA2ODk1MDYzNH0.ZgiWBR8RviMUxZx48Dw3rOfgevFcGH1Zf9zLwRZtnWo