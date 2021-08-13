import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/conteudo04">Entrar/Cadastrar</Link>
                </li>
                <li>
                    <Link to="/">
                        <img 
                            src="https://economaster.com.br/wp-content/uploads/cubosolution.gif" 
                            style={{height: '200px', width: '200px', align: 'center'}}
                        />
                    </Link> 
                </li>
                <li>
                    <Link to="/conteudo01/Gabriel">Sobre</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Materiais</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Contato</Link>
                </li>      
            </ul>
        </nav>
    </aside>
)    

export default Menu