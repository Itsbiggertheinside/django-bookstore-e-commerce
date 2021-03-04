import React, { Component } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { SliderBookCard } from '../commons/Card/SliderBookCard';



const colors = [
    '#ff5b5b35', '#bd5bff35', '#5bffba35', '#ff000035',
    '#ff5b5b35', '#bd5bff35', '#5bffba35', '#ff000035',
    '#ff5b5b35', '#bd5bff35', '#5bffba35', '#ff000035'
]

const book = {
    id: 1,
    image: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000720273-1.jpg',
    title: 'Dedemin Bakkalı',
    author: 'Şermin Yaşar',
    publisher: 'Kırmızı Kedi Yayınevi',
    category: 'Roman',
    price: 239.99,
    stock: 4
}


SwiperCore.use([Autoplay]);

class HeaderSlider extends Component {
  render() {
    return (
        <div className="mb-4">
            <Swiper spaceBetween={5} slidesPerView={2.3} loop={true} autoplay={{delay: 1500, disableOnInteraction: false}} >
                <SwiperSlide><SliderBookCard book={book} bgColor={colors[0]} /></SwiperSlide>
                <SwiperSlide><SliderBookCard book={book} bgColor={colors[1]} /></SwiperSlide>
                <SwiperSlide><SliderBookCard book={book} bgColor={colors[2]} /></SwiperSlide>
                <SwiperSlide><SliderBookCard book={book} bgColor={colors[3]} /></SwiperSlide>
            </Swiper>
        </div>
    );
  }
}

export default HeaderSlider;
