import React from 'react'
import './NavBar.css'
import { GoLocation } from 'react-icons/go'
import { Navbar, Nav, Container } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className=''>
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='#'>Armá tu PC</Nav.Link>
            <Nav.Link href='#'>Retirá tu compra</Nav.Link>
            <Nav.Link href='#'>
              Encontrá nuestros locales <GoLocation />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
