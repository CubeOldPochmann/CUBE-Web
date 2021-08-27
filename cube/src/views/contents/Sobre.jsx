import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import ContatoHome from '../../views/contents/ContatoHome'

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
        <div>
            <br /> <br />
            <b><h3>Sobre nosso projeto</h3></b>
            <h4>
                A ideia do projeto saiu do interesse dos membros do projeto, em relação ao cubo mágico. Escolhemos explicar e ensinar como montar o cubo mágico de olhos vendados por conta da falta de informações 
                escritas em português, o que se torna uma barreira para muitos. Para realização, escolhemos explicar o método "Old Pochmann", que é o método de iniciantes para resolução do cubo mágico de olhos 
                vendados. Sendo o site o passo inicial para aqueles que querem montar o cubo 3X3X3 com os olhos vendados. O site possuirá um layout simples, no qual o usuário irá criar uma conta no site, nos 
                permitindo melhor controle. Após a criação da conta, o usuário terá acesso a todos os materiais disponíveis para o seu aprendizado.
            </h4>
        </div>
        <br />
        <div className="rodape">
            <a id="contato"> <ContatoHome /> </a>
        </div>
    </div>
)

export default Sobre