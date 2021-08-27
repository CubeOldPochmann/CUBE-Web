import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom' 
import Home from '../../views/contents/Home'
import Conteudo01 from '../../views/contents/Conteudo01'
import Sobre from '../../views/contents/Sobre'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/"> 
                <Home />
            </Route>
            <Route path="/conteudo01/:usuario">
                <Conteudo01 />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content