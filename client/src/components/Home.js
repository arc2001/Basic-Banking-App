import React from 'react'
import "../App.css";
import BankImage from "../images/img5.svg";
import { Col, Container, Row } from 'react-bootstrap';
export default function Home() {
    return (
      <React.Fragment>
     
     
        <Container   className="justify-content-md-center">
          <Row>
          <Col sm={2}></Col>
            <Col
              style={{
                position: 'relative',
                top: '5rem',
              }}
              sm={12} lg={6}
            >
              <h1 >
                Welcome,
                <br /> to TSF Online Banking 
              </h1>
              <br />
              <h3 className="responsive" style={{ fontWeight: '600' }}>
              Now transfer money Faster and Simpler!
              </h3>
            </Col>
            <Col  sm={12} lg={4}>
              <img
               
                src={BankImage}
                alt=""
                className="bankImage"
              />
            </Col>
          </Row>
        </Container>
     
    </React.Fragment>
    )
}
