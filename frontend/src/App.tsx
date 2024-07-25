//import React from 'react';
/* import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; */
import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container className='mt-3'>
            <Navbar.Brand>PrimeStore</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>Cart</a>
            <a href='/signin' className='nav-link'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
      <Container className="mt-3">
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<LoginPage />} />
          </Routes> */}
          <Outlet />
          </Container>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
