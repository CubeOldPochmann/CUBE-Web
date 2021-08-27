import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contato = props => (
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
                <Nav.Link href="/sobre">Sobre</Nav.Link>
                    <NavDropdown title="Materiais" id="basic-nav-dropdown">
                        <NavDropdown.Item href="*">O que é cubo mágico</NavDropdown.Item>
                        <NavDropdown.Item href="*">O que é Old Pochmann</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contato">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <b><h3>Contate-nos</h3></b>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nome completo" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Mensagem" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    </div>
)

export default Contato