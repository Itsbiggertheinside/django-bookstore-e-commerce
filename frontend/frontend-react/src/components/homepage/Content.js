import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';


class Content extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item className="mr-auto align-self-center">
                            <h5>{this.props.currentCategory.name}</h5>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link active={true}>Tümü</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Roman</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>İş Hayatı</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Bilim Yenilikleri</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Kişisel Gelişim</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.filterByCategoryReducer
    }
}


export default connect(mapStateToProps)(Content);