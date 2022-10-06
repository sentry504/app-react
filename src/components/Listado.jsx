import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function listado({nombre,portada}) {
    return (
        <Col className='py-2' xs="6" sm="4" md="3" lg="3" xl="2">
            <Card className="bg-secondary">
                <Link className='link' to={nombre}>
                    <Card.Img src={portada} alt="" />
                    <Card.Title className='px-1 text-center text-white'>{nombre}</Card.Title>
                </Link>
            </Card>
        </Col>
    )
}
export default listado