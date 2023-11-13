import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Auth() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight }}
    >
      <Card style={{ width: 600 }} className="p-5 pt-3 pb-4">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3">
            <Button variant={'outline-primary'}>Войти</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
