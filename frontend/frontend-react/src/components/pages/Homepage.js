import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import HeaderSlider from '../partials/HeaderSlider';
import LeftMenu from '../partials/LeftMenu';
import Content from '../partials/Content';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <HeaderSlider />
                    </Col>
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


export default Homepage;