import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap' 

import HeaderSlider from '../components/home/HeaderSlider'
import LeftMenu from '../components/home/LeftMenu'
import Content from '../components/home/Content'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="mb-5">
                                <HeaderSlider />
                            </Col>
                            <Col md="3">
                                <LeftMenu />
                            </Col>
                            <Col md="9">
                                <Content />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
