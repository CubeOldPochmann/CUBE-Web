import React from "react"
import { Link } from 'react-router-dom'

const NaoEncontrado = props => (
    <div>
        <Link to="/">
            <img 
            src="https://economaster.com.br/wp-content/uploads/cubosolution.gif" 
            style={{height: '200px', width: '200px', align: 'center'}}
            />
            Voltar a home
        </Link>
        
        <h1>Página não encontrada.</h1>
        
    </div>
)

export default NaoEncontrado