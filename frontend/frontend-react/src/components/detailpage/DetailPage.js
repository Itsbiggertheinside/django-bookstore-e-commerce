import React from 'react'
import { useParams } from 'react-router-dom';

const DetailPage = () => {

    const {name} = useParams();

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}


export default DetailPage;