import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuizCategory from './pages/QuizCategory';
import Profile from './pages/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/country-capitals"
            element={<QuizCategory category="country-capital" />}
          />
          <Route
            path="/mountains-peaks"
            element={<QuizCategory category="mountains-peaks" />}
          />
          <Route
            path="/rivers-lakes"
            element={<QuizCategory category="rivers-lakes" />}
          />
          <Route
            path="/places-in-country"
            element={<QuizCategory category="places-in-country" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
