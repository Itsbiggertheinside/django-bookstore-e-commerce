import React, { Component } from 'react';
import { Container, Nav, Card, Button } from 'react-bootstrap';
import { getBooks } from '../../redux/actions/filter';
import { useSelector, useDispatch } from 'react-redux';



export default function Content() {

    const filter = useSelector(state => state.filterByCategoryReducer)
    const dispatch = useDispatch();

    return (
        <div>
            <Container>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item className="mr-auto align-self-center">
                        <h5>Türünün Popülerleri</h5>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(getBooks(''))}>Tümü</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(getBooks('roman'))}>Roman</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(getBooks('business'))}>İş Hayatı</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(getBooks('bilim'))}>Bilim Yenilikleri</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(getBooks('gelisim'))}>Kişisel Gelişim</Nav.Link>
                    </Nav.Item>
                </Nav>
                {filter.map(book => (
                    <Card style={{ width: '18rem' }} key={book.id}>
                        <Card.Img variant="top" src={book.image} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.price} TL</Card.Text>
                            <Card.Text>{book.stock} adet stok var</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button>Detaylı İncele</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
}
    


// class Content extends Component {

//     render() {
//         return (
//             <div>
//             {filter}
//                 <Container>
//                     <Nav className="justify-content-end" activeKey="/home">
//                         <Nav.Item className="mr-auto align-self-center">
//                             <h5>Popular</h5>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link>Tümü</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item onClick={() => dispatch(filterByCategoryAction)}>
//                             <Nav.Link>Roman</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link>İş Hayatı</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link>Bilim Yenilikleri</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link>Kişisel Gelişim</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                     {this.props.books.map(book => (
//                         <Card style={{ width: '18rem' }} key={book.id}>
//                             <Card.Img variant="top" src={book.image} />
//                             <Card.Body>
//                                 <Card.Title>{book.title}</Card.Title>
//                                 <Card.Text>{book.price} TL</Card.Text>
//                                 <Card.Text>{book.stock} adet stok var</Card.Text>
//                             </Card.Body>
//                             <Card.Body>
//                                 <Button onClick={() => this.props.actions.getFilteredBooks('roman')}>buton</Button>
//                             </Card.Body>
//                         </Card>
//                     ))}
//                 </Container>
//             </div>
//         )
//     }
// }



// export default Content;