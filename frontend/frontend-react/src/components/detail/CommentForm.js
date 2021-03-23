import React, { Component } from 'react'
import { Col, Button, Form } from 'react-bootstrap';


export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <Form className='px-2'>
                    <Form.Row>
                        <Col md={8} className='py-3'>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Yorumunuz: </Form.Label>
                                <Form.Control type="text" as='textarea' />
                            </Form.Group>
                        </Col>
                        <Col md={4} className='py-3'>
                            <Form.Label>Puanınız: </Form.Label>
                            <Form.Control as="select" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <Button variant='danger' className='my-4' block>Yorumu Gönder</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}
