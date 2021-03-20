import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Image, Button, Tabs, Tab, Form, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BookCard } from '../commons/Card/BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { getBookDetail } from '../../redux/actions/detail';


export default function DetailPage() {
    const params = useParams();
    const [filter, setFilter] = useState({})
    // const book = useSelector(state => state.getBookDetailReducer)
    // const dispatch = useDispatch()

    useEffect(() => {
        // setFilter(dispatch(getBookDetail(params.slug)));
        fetch('http://127.0.0.1:8000/api/book/' + params.slug + '/')
        .then(response => response.json())
        .then(data => setFilter(data))

    }, [])

    const createOrderItem = (bookId, bookTitle) => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://127.0.0.1:8000/api/item/?book_id=${bookId}`, requestOptions)
        .then(response => {if(response.ok) {
            return (
                <Toast>
                    <Toast.Header>
                        <img className="rounded mr-2" alt="" />
                        <strong className="mr-auto">${bookTitle}</strong>
                        <small>Şimdi</small>
                    </Toast.Header>
                    <Toast.Body>Ürün sepetinize eklendi!</Toast.Body>
                </Toast>
            )
        }})

    }
    

    const sliderBook = {
        id: 1,
        image: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000720273-1.jpg',
        title: 'Dedemin Bakkalı',
        author: 'Şermin Yaşar',
        publisher: 'Kırmızı Kedi Yayınevi',
        category: 'Roman',
        price: 239.99,
        stock: 4,
    }

    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Image src={filter.image} thumbnail />
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>{filter.title}</h1>
                        <h4>{filter.author}</h4>
                        <h6>{filter.publisher}</h6>
                        <Card bg='danger' text='light' style={{ minHeight: '12rem' }} className="my-5">
                            <Card.Header>Satın alım</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <h2>40% indirim</h2>
                                        <h4><span className='mr-2 '><s>{filter.price}₺</s></span> <span>{filter.discounted_price} ₺</span></h4>
                                        <p>{filter.stock} adet ürün şuan stoklarda</p>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant='light' onClick={() => createOrderItem(filter.id, filter.title)} block>Sepete Ekle</Button>
                                        <Button variant='light' block>Takip Listeme Ekle</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Tabs defaultActiveKey="Description" id="book-detail-tabs" className='my-5'>
                            <Tab eventKey="Description" title="Açıklama">
                                <p>{filter.description}</p>
                            </Tab>
                            <Tab eventKey="Detail" title="Detaylar" variant='danger'>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <h4>Özellikler</h4>
                                        {filter.details ? (
                                            <div>
                                                <p>Cilt Durumu	:	{filter.details.skin_condition}</p>
                                                <p>Basım Tarihi	:	{filter.details.date_of_publication}</p>
                                                <p>Basım Yeri	:	{filter.details.place_of_publication}</p>
                                                <p>Boyutlar	:	{filter.details.dimesion}</p>
                                                <p>Basım Dili	:	Türkçe</p>
                                                <p>Orijinal Dil	:	{filter.details.language_of_publication}</p>
                                                <p>Kağıt Tipi	:	{filter.details.paper_type}</p>
                                                <p>Sayfa Sayısı	:	{filter.details.number_of_pages}</p>
                                                <p>Barkod	:	{filter.details.barcode}</p>
                                            </div>
                                        ) : (<p></p>)}
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <h4>Kategoriler</h4>
                                        <p>{filter.category}</p>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <h4>Katkıda Bulunanlar</h4>
                                        <p>Çevirmen</p>
                                        <p>Ali Berktay</p>

                                        <p>Editör</p>
                                        <p>Korkut Erdur</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Comments" title="Yorumlar">
                                <Form className='px-2'>
                                    <Form.Row>
                                        <Col md={8} className='py-3'>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Label>Yorumunuz: </Form.Label>
                                                <Form.Control type="text" as='textarea' />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4} className='py-3'>
                                            <Form.Label>Puanınız: </Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                            <Button variant='danger' className='my-4' block>Yorumu Gönder</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col xs={12} className='mt-5'>
                        <Card border='danger'>
                            <Card.Header>İade Koşulları</Card.Header>
                            <Card.Body>
                                <Card.Title>İade işlemlerinizi aşağıdaki şekilde yapmalısınız:</Card.Title>
                                <Card.Text>
                                    Ürünün adresinize teslim tarihinden itibaren 14 gün içinde "Sipariş Takibi" sayfasından "İade ve Geri gönderim" başvurusunda bulunarak iade sürecinizi başlatabilirsiniz.
                                    Ürünü iade etmek için, orijinal kutusuyla ve faturasıyla birlikte KitapSepeti.com’a göndermelisiniz. İadenizin kabul edilmesi için, ürünün hasar görmemiş ve kullanılmamış olması gerekmektedir.
                                    Daha detaylı bilgi için Çözüm Merkezi sayfasını ziyaret edebilirsiniz.
                                    <br></br>
                                    <br></br>
                                    Bedel İadesi:
                                    İade işlemi sonuçlandıktan sonra bedel ödemesi kredi kartınıza/banka hesabınıza 24 saat içinde yapılmaktadır. Ödeme işlemlerinin hesabınıza yansıma süresi bankanıza göre değişkenlik gösterebilir.
                                    <br></br>
                                    <br></br>
                                    Alışveriş kredisi ile satın alınan ürün iadelerinde; standart prosedür geçerlidir.
                                    <br></br>
                                    <br></br>
                                    Ürün iptal/iadeniz gerçekleştiği durumda, ürün tutarınız KitapSepeti tarafından tanımladığınız hesabınıza geri ödenir.
                                    <br></br>
                                    <br></br>
                                    Kredili siparişiniz iptal/iade alındığında krediniz kapanmış sayılmamaktadır. Ürün iptal/iadesinden sonra ayrıca krediden cayma talebiniz olur ise banka ile bireysel olarak iletişime geçmeniz gerekmektedir. Sipariş tarihinizden kredi kapama tarihinize kadar oluşan faizden sorumlu olacaksınız.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} className='mt-5'>
                        <h2 className='my-5 justify-content-center'>İlgini Çekebilir</h2>
                        <Swiper spaceBetween={50} loop={true} autoplay={{delay: 1500, disableOnInteraction: false}}
                                breakpoints={{ 0: {slidesPerView: 2}, 768: {slidesPerView: 2.4}, 1024: {slidesPerView: 3}}} navigation>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                            <SwiperSlide><BookCard book={sliderBook} /></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}