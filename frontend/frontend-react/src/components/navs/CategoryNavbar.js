import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class CategoryNavbar extends Component {
    render() {
        return (
            <div>
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
                <h3>Current category: {this.props.currentCategory.name}</h3>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.filterByCategoryReducer
    }
}


export default connect(mapStateToProps)(CategoryNavbar);