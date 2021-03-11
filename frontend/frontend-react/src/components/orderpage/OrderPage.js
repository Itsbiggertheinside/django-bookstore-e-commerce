import React from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OrderCard from '../commons/Order/OrderCard'


function OrderPage() {
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col xs="12" md="8" className='mt-5'>
                        <Card bg='light'>
                            <OrderCard />
                            <OrderCard />
                            <OrderCard />
                        </Card>
                    </Col>
                    <Col xs="12" md="4" className='mt-5'>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title className=''><h2>Sipariş Özeti</h2></Card.Title>
                                <Card.Title className='mt-5'>Adres bilgileriniz</Card.Title>
                                <Card.Text className='text-muted'>Muharrem Candaş sk. No: 54. Daire: 2. Bostanlı / Karşıyaka</Card.Text>
                                <Link to='/'>Bu sipariş için adres bilgilerini değiştir</Link>

                                <Card.Title className='mt-5'>Sepet Toplamı: </Card.Title>
                                <Form.Group>
                                    <Form.Label>İndirim kuponu:</Form.Label>
                                    <Form.Control type='text' />
                                    <Button variant='info' className='mt-2 w-100'>Kupon Kodunu Onayla</Button>
                                    <Button variant='info' className='mt-2 w-100'>SATIN AL</Button>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OrderPage
