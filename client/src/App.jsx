import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';
import { ModalContext } from './context/ModalContext';
import Home from './pages/Home';
import Process from './pages/Process';
import Articles from './pages/Articles';
import ProjectDetail from './pages/ProjectDetail';
import ArticleDetail from './pages/ArticleDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-bg text-text selection:bg-accent selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
        {isModalOpen && <Modal />}
      </div>
    </Router>
  );
}

export default App;
