import React from "react"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MateriaisCards = props => (
    <div>
        <b><h3>Materiais</h3></b>
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Rubiks_cube_by_keqs.jpg/1200px-Rubiks_cube_by_keqs.jpg" />
                        <Card.Body>
                            <Card.Title>O que é cubo mágico</Card.Title>
                            <Card.Text>
                            Cubo Mágico, também conhecido como Cubo de Rubik, é um quebra-cabeça tridimensional...
                            </Card.Text>
                            <Button variant="primary" href="*">Saiba Mais...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://cinoto.com.br/cubomagico/wp-content/uploads/2020/02/bld.jpg" />
                        <Card.Body>
                            <Card.Title>O que é o Old Pochmann</Card.Title>
                            <Card.Text>
                            É conhecido como o método mais básico para resolução do cubo mágico de olhos vendados...
                            </Card.Text>
                            <Button variant="primary" href="*">Saiba Mais...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
)

export default MateriaisCards