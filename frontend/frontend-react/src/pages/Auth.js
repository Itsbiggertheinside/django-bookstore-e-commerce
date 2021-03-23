import React, { Component } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

import LoginTab from '../components/auth/LoginTab'
import RegisterTab from '../components/auth/RegisterTab'


export default class Auth extends Component {
    render() {
        return (
            <div>
                <Container className='mt-5'>
                    <Row>
                        <Col xs={12} md={4} className='mx-auto mt-5'>
                            <Tabs defaultActiveKey="login" id="authenticate-section" className='mb-4'>
                                <Tab eventKey="login" title="Giriş Yap">
                                    <LoginTab />
                                </Tab>
                                <Tab eventKey="register" title="Üye Ol">
                                    <RegisterTab />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
