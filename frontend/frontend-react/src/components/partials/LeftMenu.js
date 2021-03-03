import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class LeftMenu extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h5>Haftanın Yazarları</h5>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <hr></hr>
                    <h5>Yılın Kitapları</h5>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                    <p>Ahmet Hamdi Tanpınar</p>
                </Container>
            </div>
        )
    }
}


export default LeftMenu;