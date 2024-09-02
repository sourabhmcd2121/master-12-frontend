// Filename - pages/Services.js

import React from "react";
import { Container, Col, Row, Stack, Form, InputGroup,Button } from "react-bootstrap";
import '../css/Support.css'
export const Services = () => {
  return (



    <Container className="card" >
      <Row className="row">
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ , offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ s, offset: 3 }}`}</Col>
      </Row>
      <Stack direction="horizontal" gap={4}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check // prettier-ignore
          disabled
          type="switch"
          label="disabled switch"
          id="disabled-custom-switch"
        />
      </Stack>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>
    </Container>

  );
};

export const ServicesOne = () => {
  return (
    <div className="continer">
      <h1> 
        
      </h1>

      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>
    </div>
  );
};

export const ServicesTwo = () => {
  return (
    <div className="services">
      <h1> Service2</h1>
    </div>
  );
};

export const ServicesThree = () => {
  return (
    <div className="services3">
    <Container>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
      </Container>
    </div>
  );
};




