import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookCard } from '../commons/Card/BookCard';

export const SuggestedsSlider = ({book}) => {

    return (
        <div>
            <h2 className='my-5 justify-content-center'>İlginizi Çekebilir</h2>
            <Swiper spaceBetween={50} loop={true} autoplay={{delay: 1500, disableOnInteraction: false}}
                    breakpoints={{ 0: {slidesPerView: 2}, 768: {slidesPerView: 2.4}, 1024: {slidesPerView: 3}}} navigation>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
                <SwiperSlide><BookCard book={book} /></SwiperSlide>
            </Swiper>
        </div>
    )

}
