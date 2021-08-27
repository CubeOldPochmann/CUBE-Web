import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import ContatoHome from '../../views/contents/ContatoHome'
import SobreHome from '../../views/contents/SobreHome'
import EquipeHome from '../../views/contents/EquipeHome'
import MateriaisCards from '../../views/contents/MateriaisCards'

const Home = props => (
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
                        <NavDropdown.Item href="#materiais">O que é cubo mágico</NavDropdown.Item>
                        <NavDropdown.Item href="#materiais">O que é Old Pochmann</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Image src="https://images.hdqwalls.com/download/rubik-cube-5k-8r-2560x1080.jpg" fluid />
        
        <a id="sobre"> <SobreHome /> </a> <br />
        
        <Button variant="primary" href="/sobre">Saiba Mais...</Button> <br />

        <EquipeHome /> <br />

        <a id="materiais"> <MateriaisCards /> </a> <br />

        <div className="rodape">
            <a id="contato"> <ContatoHome /> </a>
        </div>
        
    </div>
)

export default Home