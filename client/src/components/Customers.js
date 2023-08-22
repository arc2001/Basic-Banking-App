import React, { useContext, useEffect, useState } from 'react'
import globalContext from '../context/globalContext';
import {Table ,Card ,Row, Col ,Button,Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Customers = () => {
  const history =useHistory();
  const { customers, getCustomers, loading } = useContext(globalContext)
  
  
  useEffect(() => {
    getCustomers()
  }, [])
  return (
    <Container>
    <div >
      {loading && <h2 >loading ...</h2>}
      {!loading && (
        <Table striped bordered hover  >
<thead>
    <tr>
        <th>S.No</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Contact Number</th>
        <th>Amount available</th>      
        <th>Transfer to</th>

    </tr>
</thead>
<tbody>
    {customers?.map((customer,i)=>(
<tr key ={customer?._id}
>
    <td>{i+1}</td>
    <td>{customer.name}</td>
    <td>{customer.email}</td>
    <td>{customer.contact}</td>
    <td>{customer.balance}</td>
   
    <td><Button variant="info" onClick={()=>{
       
       history.push({pathname:`/transfer/${customer._id}`})}}
       >Transfer</Button></td>
</tr>
    ))}
</tbody>
                </Table>
      )}

      
    </div>
    </Container>
  )
}

export default Customers
