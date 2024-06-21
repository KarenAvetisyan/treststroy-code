import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Index';
import AboutPage from './pages/AboutPage/Index';
import NotFoundPage from './pages/NotFoundPage/Index';
import AdvantagesPage from './pages/AdvantagesPage/Index';
import OfferPage from './pages/OfferPage/Index';
import ProjectsPage from './pages/ProjectsPage/Index';
import NewsPage from './pages/NewsPage/Index';
import ContactPage from './pages/ContactPage/Index';
import ModalForm from './components/modal/ModalForm';

function App() {

  // location scroll top 
  const location = useLocation();
  document.title = location.pathname === '/' ? "Трестстрой | Home" : `Трестстрой | ${location.pathname.replace('/', '')}`
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  // modal show
  document.addEventListener('click', function (e) {
      if (!e.target.matches('[data-show-modal]')) return;
      else{
      e.preventDefault();
      var modal = document.querySelectorAll('#'+e.target.dataset.id);
      Array.prototype.forEach.call(modal, function (el) {
          el.classList.add('active');
      });
      }
  });

  return (
    <>
    <div id="wrapper">
        <Header />
        <main>
              <Routes>
                  <Route exact path="/" element={<HomePage />}/>
                  <Route path='/advantages' element={<AdvantagesPage />} />
                  <Route path='/offer' element={<OfferPage />} />
                  <Route path="/about" element={<AboutPage />}/>
                  <Route path="/projects" element={<ProjectsPage />}/>
                  <Route path="/news" element={<NewsPage />}/>
                  <Route path="/contact" element={<ContactPage />}/>
                  <Route path="*" element={<NotFoundPage />}/>
              </Routes>
        </main>
    </div>
    <ModalForm />
    </>
  );
}

export default App;
