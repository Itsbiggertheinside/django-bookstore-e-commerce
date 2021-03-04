import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Homepage from '../homepage/HomePage'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Homepage />
                </Container>
            </div>
        )
    }
}
