import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './twoBtns.module.css';

const TwoBtns = (props) => {
    return(
        <div className={styles.buttonToolbar}>
            <Button onClick={props.cancelOrder} variant="danger">Отмена</Button>
            <Button onClick={props.showForm} variant="success">Продолжить</Button>
        </div>
    )
}

export default TwoBtns;