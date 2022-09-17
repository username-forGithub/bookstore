import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BooksList from './pages/Books_list';
import Category from './pages/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
