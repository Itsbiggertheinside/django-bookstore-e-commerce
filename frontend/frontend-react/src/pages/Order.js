import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card } from 'react-bootstrap'
import OrderCard from '../components/commons/Order/OrderCard'
import Information from '../components/order/Information'
import { getOrder } from '../redux/actions/order'

export default function Order() {

    const state = useSelector(state => state.getOrderItemsReducer.orderItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrder())
    }, [])

    return (
        <div className='mb-5'>
            <Container>
                {console.log(state.items)}
                <Row>
                    <Col xs="12" md="8" className='mt-5'>
                        <Card bg='light'>
                            {state.items ? state.items.map(item => (
                                <div key={item.id}>
                                    <OrderCard orderItem={item} />
                                </div>
                            )) : <p></p>}
                        </Card>
                    </Col>
                    <Col xs="12" md="4" className='mt-5'>
                        <Information total={state.total} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
