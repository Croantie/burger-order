import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class MyVerticallyCenteredModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Ваш заказ</Modal.Title>
                </Modal.Header>
                <Modal.Body><strong>Выбранные Вами ингредиенты:</strong>
                    <div>
                        <ul>
                            <li>Bacon: {this.props.bacon}</li>
                            <li>Salad: {this.props.salad}</li>
                            <li>Cheese: {this.props.cheese}</li>
                            <li>Meat: {this.props.meat}</li>
                        </ul>
                        <h4>Общая стоимость: {this.props.price} KGS</h4>
                        <p>Продолжить оформление заказа?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onClose}>
                        Отмена
                    </Button>
                    <Button variant="success" onClick={this.props.continueOrder}>
                        Продолжить
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default MyVerticallyCenteredModal;