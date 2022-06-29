import React from 'react'
import './NavBar.css'
import { GoLocation } from 'react-icons/go'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mainNav'>
            <Link className='paddingLink' to='/'>Inicio</Link>
            <Link className='paddingLink' to='/typeofproduct/notebook'>Notebooks</Link>
            <NavDropdown title='Hardware' id='basic-nav-dropdown'>
              <div className='dropdownMenu'>
                <Link to='/typeofproduct/motherboard'>Placas Madre</Link>
                <Link to='/typeofproduct/ramMemory'>Memorias RAM</Link>
                <Link to='/typeofproduct/amdprocessor'>Prcesadores AMD</Link>
                <Link to='/typeofproduct/intelprocessor'>Prcesadores INTEL</Link>
                <Link to='/typeofproduct/ssdDisk'>Almacenamiento SSD</Link>
                <Link to='/typeofproduct/hddDisk'>Almacenamiento HDD</Link>
                <Link to='/typeofproduct/electricSource'>Fuentes</Link>
              </div>
            </NavDropdown>
            <NavDropdown title='Perifericos' id='basic-nav-dropdown'>
              <div className='dropdownMenu'>
                <Link to='/typeofproduct/mouse'>Mouse Gamer</Link>
                <Link to='/typeofproduct/keyboard'>Teclados</Link>
                <Link to='/typeofproduct/screen'>Monitores</Link>
                <Link to='/typeofproduct/videoCard'>Placas de video</Link>
              </div>
            </NavDropdown>
            <Nav.Link to='#'>Encontra nuestros locales<GoLocation /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
