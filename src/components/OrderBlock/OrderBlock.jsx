import React from 'react';
import AddIngredient from "./Ingredients/AddIngredient";
import styles from "./OrderBlock.module.css";
import {Button} from "react-bootstrap";

const OrderBlock = (props) => {

    return (
        <div className={styles.orderBlock}>
            <p>Current price: <span>{props.price}</span></p>
            <AddIngredient addIngr={props.addBacon} item="Bacon"
                           deleteIngr={props.deleteBacon}
            />
            <AddIngredient addIngr={props.addSalad} item="Salad"
                           deleteIngr={props.deleteSalad}
            />
            <AddIngredient addIngr={props.addCheese} item="Cheese"
                           deleteIngr={props.deleteCheese}
            />
            <AddIngredient addIngr={props.addMeat} item="Meat"
                           deleteIngr={props.deleteMeat}
            />
            <Button onClick={props.showModal} variant={props.variant} size="lg" >ORDER</Button>
        </div>
    );
}

export default OrderBlock;