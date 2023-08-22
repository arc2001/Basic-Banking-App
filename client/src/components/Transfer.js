import React, { useContext, useState } from 'react'
import globalContext from '../context/globalContext'
import { Form, Button, Container ,Card,Row ,CoL} from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Transfer = (props) => {
  const history = useHistory();
  const { customers,  makeTransaction } = useContext(globalContext)
  const [sender] = useState(props.match.params.id);
  const Sender = customers.find((customer) => customer._id === props.match.params.id)

  const [formData, setFormData] = useState({
    to: null,
    amount: 0,
  })
  const onChangeData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const formSubmit = e => {
    e.preventDefault()
    if (formData.amount === 0 || formData.to === null) {
      alert('Please fill the all data')
    }
    makeTransaction({
      from: sender,
      to: formData.to,
      amount: formData.amount,
    })
    history.push("/Success");
    
  }

  
  return (
    
         <Container>

        <h3>{Sender?.name}</h3>
        <p>{Sender?.email}</p>
        <div >
          <p>Balance</p>
          <h3>{Sender?.balance}</h3>
        </div>
        <h2>Make a Transaction</h2>
        <Form onSubmit={formSubmit} action='#'>
        <Form.Group>
          <Form.Label htmlFor='amount'>Amount</Form.Label>
          <Form.Control
            type='number'
           
            name='amount'
            value={formData.amount}
            onChange={onChangeData}
          />
          </Form.Group>
          <br/>
         <Form.Group>
          <Form.Label htmlFor='receiver'>Select to Send</Form.Label>
          <Form.Control as="select" defaultValue='DEFAULT' name='to' onChange={onChangeData}>
            <option value='DEFAULT' disabled>
              -- select a person --
            </option>
            {customers?.map(customer => (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            ))}
          </Form.Control>
          </Form.Group>
          <br />
          <Button  variant="light" size="lg" type='submit'>Submit</Button>
        </Form>
        </Container> 
  )
}

export default Transfer;
