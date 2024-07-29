import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import { NewsProvider } from './context/NewsContext';

function App() {
  return (
    <NewsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </Router>
    </NewsProvider>
  );
}

export default App;
