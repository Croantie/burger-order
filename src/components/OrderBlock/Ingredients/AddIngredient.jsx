import React from 'react';
import styles from "./Ingredient.module.css";
import {Button} from "react-bootstrap";

const AddIngredient = (props) => {
    return (
        <div className={styles.ingredient}>
            <p>{props.item}</p>
            <Button onClick={props.deleteIngr} variant="dark">Less</Button>
            <Button onClick={props.addIngr} variant="primary">More</Button>
        </div>
    );
}

export default AddIngredient;