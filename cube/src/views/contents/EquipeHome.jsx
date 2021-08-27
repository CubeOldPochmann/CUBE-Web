import React from "react"
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Gabriel from '/workspace/CUBE-Web/cube/src/views/contents/Gabriel.png'

const EquipeHome = props => (
    <div>
        <b><h3>A equipe</h3></b>
        <Container>
            <Row>
                <Col></Col>   
                <Col></Col>         
                <Col>
                    <Image src="https://w7.pngwing.com/pngs/884/512/png-transparent-person-shadow-computer-icons-person-symbol-meridian-energy-group-inc-person-icon-145444-bryan-le-graphy-miscellaneous-silhouette-black.png" 
                    width="200"
                    heigth="200"
                    roundedCircle 
                    />
                    <br/>
                    Gabriel Martins Ezequiel
                </Col>       
                <Col></Col>         
                <Col>
                    <Image src="https://w7.pngwing.com/pngs/884/512/png-transparent-person-shadow-computer-icons-person-symbol-meridian-energy-group-inc-person-icon-145444-bryan-le-graphy-miscellaneous-silhouette-black.png"
                    width="200"
                    heigth="200"
                    roundedCircle 
                    /> 
                    <br/>
                    Paola Toledo Rampazzo
                </Col>
                <Col></Col>  
                <Col></Col>
            </Row>
        </Container>
    </div>
)

export default EquipeHome