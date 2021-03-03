import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';


class Content extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Nav className="justify-content-end" activeKey="/home">
                        <p className="mr-auto">Popular by Genre</p>
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}


export default Content;