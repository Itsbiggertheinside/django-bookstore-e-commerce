import React from 'react'
import { Card, Image, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

function OrderCard({orderItem}) {
    return (
        <div>
            <Card border="light" className='mb-4 order-card'>
                <Card.Header>{orderItem.category}</Card.Header>
                <Card.Body>
                    <Row noGutters='true'>
                        <Col xs="6" md="2">
                            <Image src={orderItem.image} rounded />
                        </Col>
                        <Col xs="12" md="4" className="my-auto">
                            <Card.Title>{orderItem.title}</Card.Title>
                            <Card.Text className='text-muted'>{orderItem.author}</Card.Text>
                            <Card.Text className='small text-success'>Teslimat süresi 2 - 3 iş günü</Card.Text>
                        </Col>
                        <Col xs="8" md="3" className="my-auto">
                            <InputGroup>
                                <FormControl />
                                <InputGroup.Append>
                                    <Button variant='outline'>
                                        <Image src="https://img.icons8.com/cotton/32/000000/check-dollar--v1.png" style={{width: '32px', height: '32px', transform: 'translate(-30%, -15%)'}} />
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col xs="12" md="3" className="my-auto cart-product-price">
                            <Card.Text className='small text-danger'>40% indirim</Card.Text>
                            <Card.Text className='text-muted'><s>{orderItem.price} ₺</s></Card.Text>
                            <Card.Title>{orderItem.discounted_price} ₺</Card.Title>
                            <Card.Link href='#' className="small">Favorilere Ekle</Card.Link>
                            <Card.Link href='#' className="small">Kaldır</Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderCard
