import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { BookCard } from '../commons/Card/BookCard';
// import { getBookDetail } from '../../redux/actions/filter';


export default function DetailPage() {
    const params = useParams();
    const [bookData, setBookData] = useState({})
    

    useEffect(() => {
        getBookDetail();
    }, [])
    
    const getBookDetail = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/${params.slug}/`)
        const data = await response.json()
        setBookData(data)
    }

    console.log(bookData)

    return (
        <div>
            <p>{bookData.author.name}</p>
            <p>{bookData.category}</p>
            <p>{bookData.publisher}</p>
            <p>{bookData.price}</p>
            <p>{bookData.stock}</p>
            <p>{bookData.title}</p>
        </div>
    )
}