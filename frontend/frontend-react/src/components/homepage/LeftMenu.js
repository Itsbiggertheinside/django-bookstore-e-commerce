import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { ListItemWithAvatar } from '../commons/List/ListItemWithAvatar';

class LeftMenu extends Component {
    render() {

        const data = {
            avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fbd87a8-6e06-44a7-aa1f-2fb54bc522ba/d6bzng9-40e7d38c-ddaa-49c6-946d-9b8f480cebd1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2ZiZDg3YTgtNmUwNi00NGE3LWFhMWYtMmZiNTRiYzUyMmJhXC9kNmJ6bmc5LTQwZTdkMzhjLWRkYWEtNDljNi05NDZkLTliOGY0ODBjZWJkMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.s24EnU_ANgpOJjBXIjA9dtr_6SGSIS49Ujk4wSkYWP8',
            title: 'Lorem ipsum dolor.'
        }

        return (
            <div>
                <Container>
                    <h5 className="ml-3">Haftanın Yazarları</h5>
                    <ListGroup className="mb-5">
                        <ListItemWithAvatar data={data} rounded={true} />
                        <ListItemWithAvatar data={data} rounded={true} />
                        <ListItemWithAvatar data={data} rounded={true} />
                        <ListItemWithAvatar data={data} rounded={true} />
                    </ListGroup>
                    <h5 className="ml-3">Yılın Kitapları</h5>
                    <ListGroup className="mb-5">
                        <ListItemWithAvatar data={data} />
                        <ListItemWithAvatar data={data} />
                        <ListItemWithAvatar data={data} />
                        <ListItemWithAvatar data={data} />
                    </ListGroup>
                </Container>
            </div>
        )
    }
}


export default LeftMenu;