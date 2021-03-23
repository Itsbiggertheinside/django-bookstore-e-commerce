import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Information({total}) {
    return (
        <div>
            <Card bg='light'>
                <Card.Body>
                    <Card.Title className=''><h2>Sipariş Özeti</h2></Card.Title>
                    <Card.Title className='mt-5'>Adres bilgileriniz</Card.Title>
                    <Card.Text className='text-muted'>Ali Karataş sk. No: 24. Daire: 5. Alsancak / İzmir</Card.Text>
                    <Link to='/'>Bu sipariş için adres bilgilerini değiştir</Link>

                    <Card.Title className='mt-5'>Sepet Toplamı: {total} ₺</Card.Title>
                    <Form.Group>
                        <Form.Label>İndirim kuponu:</Form.Label>
                        <Form.Control type='text' />
                        <Button variant='info' className='mt-2 w-100'>Kupon Kodunu Onayla</Button>
                        <Button variant='info' className='mt-2 w-100'>SATIN AL</Button>
                    </Form.Group>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Information