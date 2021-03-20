import React from 'react';
import { Link } from 'react-router-dom';
import './SliderBookCardStyle.css';


export const SliderBookCard = ({book, bgColor}) => {
    return (
        <div className="row">
            <div className="col-12 mt-3">
                <div className="card card-slider text-white" style={{backgroundColor: bgColor}}>
                    <div className="card-horizontal-slider">
                        <div className="img-square-wrapper-slider">
                            <img className="" src={book.image} alt="Card image cap" />
                        </div>
                        <div className="card-body card-body-slider">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{book.publisher}</p>
                            <p className="card-text">{book.category}</p>
                            <Link to={'/detail/' + book.slug} className="btn rounded-pill w-75 btn-light">Kitabı İncele</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}