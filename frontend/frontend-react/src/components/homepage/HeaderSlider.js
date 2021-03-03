import React, { Component } from "react";
import { Row, Col, Carousel } from "react-bootstrap";

class HeaderSlider extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col xs="12">
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.lovinglifeafter55.com/wp-content/uploads/2017/06/black-header_bg-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.lovinglifeafter55.com/wp-content/uploads/2017/06/black-header_bg-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.lovinglifeafter55.com/wp-content/uploads/2017/06/black-header_bg-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderSlider;
