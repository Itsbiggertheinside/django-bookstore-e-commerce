import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CategoryNavbar from '../navs/CategoryNavbar';
import BookList from '../books/BookList';


class Content extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CategoryNavbar />
                    <BookList />
                </Container>
            </div>
        )
    }
}


export default Content;