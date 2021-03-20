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

const bookData = [
    {
        id: 827,
        image: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000720273-1.jpg',
        title: 'Dedemin Bakkalı',
        author: 'Şermin Yaşar',
        publisher: 'Kırmızı Kedi Yayınevi',
        category: 'Roman',
        price: 49.99,
        stock: 4,
        slug: 'dedemin-bakkali-sermin-yasar'
    },
    {
        id: 216,
        image: 'https://www.yapikrediyayinlari.com.tr/dosyalar/2021/03/veba-geceleri_kapak.jpg',
        title: 'Veba Geceleri',
        author: 'Orhan Pamuk',
        publisher: 'Yapı Kredi Yayınları',
        category: 'Roman',
        price: 27.23,
        stock: 8,
        slug: 'veba-geceleri-orhan-pamuk'
    },
    {
        id: 476,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11346127/wh:true/wi:220',
        title: '1984',
        author: 'George Orwell',
        publisher: 'Can Yayınları',
        category: 'Roman',
        price: 13.65,
        stock: 14,
        slug: '1984-george-orwell'
    },
    {
        id: 2716,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11381738/wh:true/wi:220',
        title: 'Fahrenheit 451',
        author: 'Ray Bredbury',
        publisher: 'İthaki Yayınları',
        category: 'Roman',
        price: 15.00,
        stock: 23,
        slug: 'fahrenheit-451-ray-bredbury'
    }
]


SwiperCore.use([Autoplay]);

class HeaderSlider extends Component {
  render() {
    return (
        <div className="mb-4">
            <Swiper spaceBetween={5} loop={true} autoplay={{delay: 1500, disableOnInteraction: false}} 
                    breakpoints={{ 0: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2.3}}}>
                {bookData.map((book, index) => (
                    <SwiperSlide><SliderBookCard book={book} bgColor={colors[index]} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
  }
}

export default HeaderSlider;
