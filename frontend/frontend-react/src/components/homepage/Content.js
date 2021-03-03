import React, { Component } from 'react';
import { Container, Nav, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../../redux/actions/filterActions';


class Content extends Component {

    componentDidMount() {
        this.props.actions.getFilteredBooks()
    }

    render() {
        return (
            <div>
                <Container>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item className="mr-auto align-self-center">
                            <h5>{this.props.currentCategory}</h5>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Tümü</Nav.Link>
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
                    {this.props.books.map(book => (
                        <Card style={{ width: '18rem' }} key={book.id}>
                            <Card.Img variant="top" src={book.image} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.price} TL</Card.Text>
                                <Card.Text>{book.stock} adet stok var</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() => this.props.actions.changeCategory(book.category)}>change category</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        books: state.filterByCategoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getFilteredBooks: bindActionCreators(filterActions.filterBooks, dispatch),
            changeCategory: bindActionCreators(filterActions.changeCategory, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);