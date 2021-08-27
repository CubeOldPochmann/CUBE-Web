import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import ContatoHome from '../../views/contents/ContatoHome'
import SobreCompleto from '../../views/contents/SobreCompleto'

const Sobre = props => (
    <div>
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src="https://economaster.com.br/wp-content/uploads/cubosolution.gif"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    CUBE: Old Pochmann
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <NavDropdown title="Materiais" id="basic-nav-dropdown">
                        <NavDropdown.Item href="*">O que é cubo mágico</NavDropdown.Item>
                        <NavDropdown.Item href="*">O que é Old Pochmann</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        <a id="sobre"> <SobreCompleto /> </a> <br />

        <div className="rodape">
            <a id="contato"> <ContatoHome /> </a>
        </div>

    </div>
)

export default Sobre