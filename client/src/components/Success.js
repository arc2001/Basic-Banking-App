import React from 'react'
import {Card, Container} from "react-bootstrap"
export default function Success() {
    return (
        <Container>
         <Card bg ="info" 
          style={{ width: '28rem' }}
               className="heading" 
                text={"bg" === 'light' ? 'dark' : 'white'}>
                    <Card.Header>
                        <h1 className="headtext">Transaction Successful</h1>
                    </Card.Header>
                </Card>
          </Container>
    )
}
