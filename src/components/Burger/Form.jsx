import React from 'react';
import { Form, Button } from "react-bootstrap";
import styles from './Form.module.css';

const OrderForm = () => {
    return (
        <Form className={styles.orderForm}>
            <h4>Enter Your Contact Data</h4>
            <Form.Control type="text" placeholder="Your Name"/>
            <Form.Control type="email" placeholder="Your Mail"/>
            <Form.Control type="text" placeholder="Street"/>
            <Form.Control type="text" placeholder="Postal Code"/>
            <Button type="submit" variant="success">ORDER</Button>
        </Form>
    );
}

export default OrderForm;