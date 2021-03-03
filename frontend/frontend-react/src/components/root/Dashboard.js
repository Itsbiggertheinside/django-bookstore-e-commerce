import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import LeftMenu from '../main/LeftMenu';
import Content from '../main/Content';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="3">
                        <LeftMenu />
                    </Col>
                    <Col md="9">
                        <Content />
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Dashboard