import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Button, Tabs, Tab } from 'react-bootstrap';

import { SuggestedsSlider } from '../components/detail/SuggestedsSlider'
import CommentForm from '../components/detail/CommentForm'

import { getBookDetail } from '../redux/actions/detail';
import { createOrderItem } from '../redux/actions/orderItem';


export default function DetailPage() {

    const params = useParams();
    const book = useSelector(state => state.getBookDetailReducer.book)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getBookDetail(params.slug));

    }, [])
    

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
                        <Image src={book.image} thumbnail />
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>{book.title}</h1>
                        <h4>{book.author}</h4>
                        <h6>{book.publisher}</h6>
                        <Card bg='danger' text='light' style={{ minHeight: '12rem' }} className="my-5">
                            <Card.Header>Satın alım</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <h2>{book.discount_percent}% indirim</h2>
                                        <h4><span className='mr-2 '><s>{book.price}₺</s></span> <span>{book.discounted_price} ₺</span></h4>
                                        <p>{book.stock} adet ürün şuan stoklarda</p>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant='light' onClick={() => dispatch(createOrderItem(book.id))} block>Sepete Ekle</Button>
                                        <Button variant='light' block>Takip Listeme Ekle</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Tabs defaultActiveKey="Description" id="book-detail-tabs" className='my-5'>
                            <Tab eventKey="Description" title="Açıklama">
                                <p>{book.description}</p>
                            </Tab>
                            <Tab eventKey="Detail" title="Detaylar" variant='danger'>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <h4>Özellikler</h4>
                                        {book.details ? (
                                            <div>
                                                <p>Cilt Durumu	:	{book.details.skin_condition}</p>
                                                <p>Basım Tarihi	:	{book.details.date_of_publication}</p>
                                                <p>Basım Yeri	:	{book.details.place_of_publication}</p>
                                                <p>Boyutlar	:	{book.details.dimesion}</p>
                                                <p>Basım Dili	:	Türkçe</p>
                                                <p>Orijinal Dil	:	{book.details.language_of_publication}</p>
                                                <p>Kağıt Tipi	:	{book.details.paper_type}</p>
                                                <p>Sayfa Sayısı	:	{book.details.number_of_pages}</p>
                                                <p>Barkod	:	{book.details.barcode}</p>
                                            </div>
                                        ) : (<p></p>)}
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <h4>Kategoriler</h4>
                                        <p>{book.category}</p>
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
                                <CommentForm />
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
                        <SuggestedsSlider book={sliderBook} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}