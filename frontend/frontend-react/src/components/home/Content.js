import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Nav, Pagination, Button } from 'react-bootstrap';
import { BookCard } from '../commons/Card/BookCard';
import { getBooks } from '../../redux/actions/filter';




export default function Content() {

    const filter = useSelector(state => state.filterByCategoryReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks(''))
    }, [])

    
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
                    {filter.books.map((book) => (
                        <Col xs="6" className="mt-4" key={book.id}>
                            <BookCard book={book} />
                        </Col>
                    ))}
                </Row>
                {console.log(filter)}
                <Pagination className="justify-content-center my-4">
                    <Pagination.Prev href={filter.previous} />
                    <Pagination.Ellipsis />
                    <Pagination.Next href={filter.next} />
                </Pagination>
            </Container>
        </div>
    )
}
    