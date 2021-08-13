import React from "react"
import { Link } from 'react-router-dom'

const Home = props => (
    <div>
        <b><h1>CUBE: Old Pochmann</h1></b>
        <img 
            src="https://images.wallpaperscraft.com/image/rubiks_cube_cube_puzzle_colorful_111816_2560x1024.jpg" 
            style={{width: '100%'}}
        />
        <h2><Link to="/conteudo01/Gabriel">Veja mais sobre<br></br>o projeto aqui!</Link></h2>
    </div>
)

export default Home