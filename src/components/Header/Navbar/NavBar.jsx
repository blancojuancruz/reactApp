import React from 'react'
import './NavBar.css'
import { GoLocation } from 'react-icons/go'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className=''>
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/typeofproduct/notebook'>Notebooks</Nav.Link>
            <NavDropdown title='Hardware' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/typeofproduct/motherboard'>Placas Madre</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/ramMemory'>Memorias RAM</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/amdprocessor'>Prcesadores AMD</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/intelprocessor'>Prcesadores INTEL</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/ssdDisk'>Almacenamiento SSD</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/hddDisk'>Almacenamiento HDD</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/electricSource'>Fuentes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Perifericos' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/typeofproduct/mouse'>Mouse Gamer</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/keyboard'>Teclados</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/screen'>Monitores</NavDropdown.Item>
              <NavDropdown.Item href='/typeofproduct/videoCard'>Placas de video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Encontra nuestros locales<GoLocation /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
