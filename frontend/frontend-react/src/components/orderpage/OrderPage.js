import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OrderCard from '../commons/Order/OrderCard'


function OrderPage() {

    const [state, setState] = useState({items: []})

    useEffect(() => {
        getOrder()
    }, [])

    const getOrder = () => {

        // const loginOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: 'fakinmayk@gmail.com',
        //         password: '6DsPG55gK!'
        //     })
        // }

        // fetch('http://127.0.0.1:8000/rest-auth/login/', loginOptions)
        // .then(response => response.json())
        // .then(data => {
        //     const token = data.key
        //     console.log(token)
        //     sessionStorage.setItem('token', token)
        // })

        fetch('http://127.0.0.1:8000/api/order/', {
            method: 'get',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {setState(data)})
    }

    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col xs="12" md="8" className='mt-5'>
                        <Card bg='light'>
                            {state.items.map(item => (
                                <div key={item.id}>
                                    <OrderCard orderItem={item} />
                                </div>
                            ))}
                        </Card>
                    </Col>
                    <Col xs="12" md="4" className='mt-5'>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title className=''><h2>Sipariş Özeti</h2></Card.Title>
                                <Card.Title className='mt-5'>Adres bilgileriniz</Card.Title>
                                <Card.Text className='text-muted'>Ali Karataş sk. No: 24. Daire: 5. Alsancak / İzmir</Card.Text>
                                <Link to='/'>Bu sipariş için adres bilgilerini değiştir</Link>

                                <Card.Title className='mt-5'>Sepet Toplamı: 52.0 ₺</Card.Title>
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
