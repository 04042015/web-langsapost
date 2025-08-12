import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Category from './pages/Category';
import Infographic from './pages/Infographic';
import Video from './pages/Video';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NotificationPopup from './components/NotificationPopup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            {/* Admin routes without header/footer */}
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            
            {/* Public routes with header/footer */}
            <Route path="/*" element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artikel/:id" element={<ArticleDetail />} />
                    <Route path="/kategori/:slug" element={<Category />} />
                    <Route path="/infografik" element={<Infographic />} />
                    <Route path="/video" element={<Video />} />
                  </Routes>
                </main>
                <Footer />
                <NotificationPopup />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;