import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import LoginTab from './LoginTab'
import RegisterTab from './RegisterTab'

function AuthPage() {
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

export default AuthPage
