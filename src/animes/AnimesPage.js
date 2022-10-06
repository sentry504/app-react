//Importacion del parametro establecido en la ruta de user/:id
//Importacion del parametro establecido en la ruta de user/:id
import { Container, Row } from 'react-bootstrap';
import Listado from '../components/Listado'
import Data from './animesData.js'

function AnimesPage() {
    return (
        <div>
            <h1 className='text-center'>Linovels - animes</h1>
            <Container fluid>
                <Row>
                    {Data && Data.map((dato, index) => {
                        return (
                            <Listado nombre={dato.anime} portada={dato.portada}></Listado>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default AnimesPage

//<Link to="Overlord">Overlord</Link