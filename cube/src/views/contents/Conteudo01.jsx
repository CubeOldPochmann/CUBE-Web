import React from "react"
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {

    const { usuario } = useParams()

    return (
        <div>
            <b><h3>Sobre Nós</h3></b>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit, diam at posuere vestibulum, sapien nunc tempor lorem, ac rutrum nibh sapien non nisi. Integer tincidunt dui at aliquet blandit. Aenean ut risus aliquam libero maximus aliquet ut in nisi. Curabitur id lectus ac ante eleifend tincidunt. Nulla a odio vitae est luctus dapibus. Integer varius, elit a porttitor varius, purus nibh maximus justo, in viverra lacus risus sed enim. Donec et suscipit orci. Proin suscipit nibh diam, id gravida velit sodales ac. Vestibulum dictum ligula sed interdum ultricies. Nunc ac ligula id tortor blandit hendrerit id at turpis. Nulla at quam lectus. Maecenas imperdiet imperdiet neque, in sodales felis efficitur ac. Vestibulum molestie semper lectus viverra pellentesque.
            <br/>
                Vivamus faucibus ornare metus non consequat. Etiam hendrerit eget eros eu vehicula. Sed aliquam diam id feugiat imperdiet. Integer vitae quam interdum est imperdiet ullamcorper a vitae lorem. Pellentesque eleifend sapien elementum dui pharetra, vitae vulputate metus pharetra. In hac habitasse platea dictumst. Morbi consequat lorem commodo imperdiet hendrerit. Etiam eu est eget orci sollicitudin maximus quis sit amet mauris. Nunc nec malesuada metus, non cursus nisl. Duis pharetra efficitur ligula. Praesent purus velit, mollis id augue vel, tincidunt imperdiet est. Nulla eu porta turpis. Nulla facilisi. Fusce a aliquam dolor. Vestibulum vulputate, felis sed elementum ultricies, elit turpis ornare nibh, sed sollicitudin massa arcu sit amet orci.
            </h4>
        </div>
    )
}   

export default Conteudo01