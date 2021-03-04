import React from 'react';
import './SliderBookCardStyle.css';


export const SliderBookCard = ({book, bgColor}) => {
    return (
        <div className="row">
            <div className="col-12 mt-3">
                <div className="card text-white" style={{backgroundColor: bgColor}}>
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="" src={book.image} alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{book.publisher}</p>
                            <p className="card-text">{book.category}</p>
                            <button className="btn rounded-pill w-75 btn-light">Kitabı İncele</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}