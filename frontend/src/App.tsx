//import React from 'react';
/* import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; */
import './App.css';
import { useContext, useEffect } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'

import Footer from './components/Footer';

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg">
          <Container className='mt-3'>
          <LinkContainer to="/">
              <Navbar.Brand>PrimeStore</Navbar.Brand>
            </LinkContainer>
          </Container>
          <Nav>
          <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
            </Button>
            <Link to="/cart" className='nav-link'>Cart  {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}</Link>
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
