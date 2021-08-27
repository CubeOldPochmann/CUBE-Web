import React from "react"
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Conteudo01 = props => {

    const { usuario } = useParams()

    return (
        <div>
            <Navbar bg="primary" variant="dark">
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
                        <Nav.Link href="/conteudo01/Gabriel">Sobre</Nav.Link>
                        <NavDropdown title="Materiais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">O que é cubo mágico</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">O que é Old Pochmann</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/conteudo04">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <b><h3>Sobre Nós</h3></b>
            <h4>
                A ideia do projeto saiu do interesse dos membros do projeto, em relação ao cubo mágico. Escolhemos explicar e ensinar como montar o cubo mágico de olhos vendados por conta da falta de informações escritas em português, o que se torna uma barreira para muitos.
                Para realização, escolhemos explicar o método "Old Pochmann", que é o método de iniciantes para resolução do cubo mágico de olhos vendados. Sendo o site o passo inicial para aqueles que querem montar o cubo 3X3X3 com os olhos vendados.
            </h4>
        </div>
    )
}   

export default Conteudo01