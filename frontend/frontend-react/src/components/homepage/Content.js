import React, { Component, useEffect } from 'react';
import { Container, Row, Col, Nav, Pagination, Button } from 'react-bootstrap';
import { getBooks } from '../../redux/actions/filter';
import { useSelector, useDispatch } from 'react-redux';
import { BookCard } from '../commons/Card/BookCard';



export default function Content() {

    const filter = useSelector(state => state.filterByCategoryReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks(''))
        console.log(filter)
    }, [])

    // const book = {
    //     id: 1,
    //     image: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000720273-1.jpg',
    //     title: 'Dedemin Bakkalı',
    //     author: 'Şermin Yaşar',
    //     publisher: 'Kırmızı Kedi Yayınevi',
    //     category: 'Roman',
    //     price: 239.99,
    //     stock: 4,
    // }

    return (
        <div>
            <Container>
                <Nav className="justify-content-center mb-5">
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks(''))}>Tümü</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('klasik'))}>Dünya Klasikleri</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('polisiye'))}>Polisiye</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('fantastik'))}>Fantastik</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('gerilim'))}>Korku Gerilim</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('macera'))}>Macera</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('romantik'))}>Romantik</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('inceleme'))}>Edebiyat İnceleme</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('çocuk'))}>Çocuk ve Gençlik</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('bilim'))}>Bilim</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('felsefe'))}>Felsefe</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('mizah'))}>Mizah</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('iş'))}>İş</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('söyleşi'))}>Söyleşi</Button>
                    </Nav.Item>
                    <Nav.Item className="mr-2 mt-2">
                        <Button className="navigation-button btn-outline-dark" onClick={() => dispatch(getBooks('röportaj'))}>Röportaj</Button>
                    </Nav.Item>
                </Nav>
                <h3>Türünün Popülerleri</h3>
                <Row>
                    {filter.map((book) => (
                        <Col xs="6" className="mt-4" key={book.id}>
                            <BookCard book={book} />
                        </Col>
                    ))}
                </Row>
                <Pagination className="justify-content-center my-4">
                    <Pagination.Prev />
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                </Pagination>
            </Container>
        </div>
    )
}
    