import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import './ListStyle.css';


export const ListItemWithAvatar = ({data, rounded=false}) => {
    return (
        <ListGroup.Item className="list-group-item-with-avatar">
            <Image src={data.avatar} roundedCircle={rounded} />
            <span className="ml-3">{data.title != undefined ? data.title : data.name}</span>
        </ListGroup.Item>
    )
}