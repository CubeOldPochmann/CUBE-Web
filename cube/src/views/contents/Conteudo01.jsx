import React from "react"
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {

    const { usuario } = useParams()

    return (
        <div>
            <b><h3>Sobre Nós</h3></b>
            <h4>
                A ideia do projeto saiu do interesse dos membros do projeto, em relação ao cubo mágico. Escolhemos explicar e ensinar como montar o cubo mágico de olhos vendados por conta da falta de informações escritas em português, o que se torna uma barreira para muitos.
                Para realização, escolhemos explicar o método "Old Pochmann", que é o método de iniciantes para resolução do cubo mágico de olhos vendados. Sendo o site o passo inicial para aqueles que querem montar o cubo 3X3X3 com os olhos vendados.
            </h4>
        </div>
    )
}   

export default Conteudo01