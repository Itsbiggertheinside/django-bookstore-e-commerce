import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import HeaderSlider from './HeaderSlider';
import LeftMenu from './LeftMenu';
import Content from './Content';

class Homepage extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}


export default Homepage;