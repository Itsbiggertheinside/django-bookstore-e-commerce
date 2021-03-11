import React from 'react';
import { Link } from 'react-router-dom';
// import { getBooks } from '../../redux/actions/filter';
// import { useSelector, useDispatch } from 'react-redux';
import './BookCardStyle.css';


export const BookCard = ({book}) => {

    // const book = useSelector(state => state.filterByCategoryReducer)
    // const getBook = useDispatch()

    return (
        <div className="list mb-2">
            <div className="list-header">
                <a href="#" className="list-header-image">
                    <img src={book.image} />
                </a>
            </div>
            <div className="list-content">
                <h2><Link to={'detail/' + book.slug} className='text-black'>{book.title}</Link></h2>
                <h6><a href="#" className="text-black">{book.author}</a></h6> 
                <h6><a href="#" className="text-black">{book.publisher}</a></h6> 
                <span className="list-meta">
                    <span className="list-meta-item"><i className="fa fa-clock-o"></i> {book.category}</span> 
                    <a href="#" className="list-meta-item"><i className="fa fa-star"></i> 9.33</a>
                </span>
            </div>
        </div>
    )
}