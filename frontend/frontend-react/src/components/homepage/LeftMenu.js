import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { ListItemWithAvatar } from '../commons/List/ListItemWithAvatar';

class LeftMenu extends Component {
    render() {

        const dataAuthor = [
            {
                avatar: 'https://img.labirint.ru/images/upl/descripts/pic_1576161293.jpg',
                title: 'Robert Greene'
            },
            {
                avatar: 'https://literary-arts.org/wp-content/uploads/2019/04/Barry-Lopez.jpg',
                title: 'Barry Lopez'
            },
            {
                avatar: 'https://wonderthebook.com/img/site/author.jpg',
                title: 'R. J. Palacio'
            },
            {
                avatar: 'https://nerdalicious.com.au/wp-content/uploads/2014/06/JRR-Tolkien-BW1.jpg',
                title: 'J. R. R. Tolkien'
            }
        ]

        const dataBook = [
            {
                avatar: 'https://productimages.hepsiburada.net/s/34/1500/10459542585394.jpg',
                title: 'E. A. Poe Bütün Hikayeleri'
            },
            {
                avatar: 'https://i.dr.com.tr/cache/600x600-0/originals/0001901111001-1.jpg',
                title: 'Özgürlüğün Rengi Mavidir'
            },
            {
                avatar: 'https://i.dr.com.tr/cache/500x400-0/originals/0001861479001-1.jpg',
                title: 'Arsen Lüpen Seti 3 Kitap'
            },
            {
                avatar: 'https://img.kitapyurdu.com/v1/getImage/fn:11384326/wh:true/wi:220',
                title: 'Veba Geceleri'
            }
        ]

        return (
            <div>
                <Container>
                    <h5 className="ml-3">Haftanın Yazarları</h5>
                    <ListGroup className="mb-5">
                        {dataAuthor.map(author=> (
                            <ListItemWithAvatar data={author} rounded={true} />
                        ))}
                    </ListGroup>
                    <h5 className="ml-3">Yılın Kitapları</h5>
                    <ListGroup className="mb-5">
                        {dataBook.map(book=> (
                            <ListItemWithAvatar data={book} />
                        ))}
                    </ListGroup>
                </Container>
            </div>
        )
    }
}


export default LeftMenu;