
import React from 'react'
import { Button,  CardHeader } from 'react-bootstrap';
//import {  FaMobileAlt, FaPhone, FaPhoneSquare, FaTh, FaUser } from "react-icons/fa";
//import TableData from './TableData';
import'../App.css'



export default function Home() {
  const shoot = () => {
    alert("Great Shot!");
  }

  const clickme = (a) => {
    alert(a);

  }
  const datalist = data.map((list, i) => {
    return (
      <div className='m-3 card w-100 '>
        <div className="m-2" key={i} >
          <CardHeader className='h4'>
            {list.name}
          </CardHeader>
          <div>
            Enter the class name : {list.class}
          </div>
          <div>Mobile Number : {list.number}</div>
          <div className='mt-3'>
            <Button className=' gap-2 btn-sm' onClick={shoot}>Onclick</Button>
            <Button className="float-end ml-3  btn-sm" variant='outline-primary' onClick={() => clickme(list.name)}>Onclick</Button>

          </div>
        </div>
      </div>
    )
  });
  return (
    <div className='d-inline'>
     
      <div className=' w-25 m-3 p-3 align-center' > {datalist} </div>
     


{/* 
      <div>


        <Form className='w-25 mt-3'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>



      </div>
        </Form> */}

    </div>
  )
}

const data = [
  {
    name: 'rajkumar',
    class: '11th',
    number: '254234343582'
  },
  {
    name: 'rajnish',
    class: '10th',
    number: '254bcvbvb582'
  }, {
    name: 'ramesh',
    class: '20th',
    number: '254582'
  }, {
    name: 'ramankumar',
    class: '10th',
    number: '2231232354582'
  }, {
    name: 'manoj lumar',
    class: '16th',
    number: '254cvcxvc582'
  },
];