import React from 'react';
import styles from './Burger.module.css';
import OrderBlock from "../OrderBlock/OrderBlock";
import Bacon from "./Bacon";
import Salad from "./Salad";
import Cheese from "./Cheese";
import Meat from "./Meat";
import MyVerticallyCenteredModal from "./Modal";
import TwoBtns from "./twoBtns";
import OrderForm from "./Form";

const newBaconItems = [];
const newSaladItems = [];
const newCheeseItems = [];
const newMeatItems = [];

class Burger extends React.Component {

    state = {
        baconItems: [],
        saladItems: [],
        cheeseItems: [],
        meatItems: [],
        price: 20,
        prices: {bacon: 30, salad: 5, cheese: 20, meat: 50},
        showOrderBlock: true,
        showForm: false,
        show: false,
        variant: "secondary"
    }


    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        if (this.state.variant === "warning") {
            this.setState({show: true});
        }
    }

    activateOrderBtn() {
        this.setState({variant: "warning"})
    }

    addBacon() {
        if (newBaconItems.length < 2) {
            newBaconItems.push("");
            this.setState({baconItems: newBaconItems});
            this.setState({price: this.state.price + this.state.prices.bacon});
        }
        this.activateOrderBtn();
    }

    deleteBacon() {
        if (newBaconItems.length > 0) {
            newBaconItems.pop();
            this.setState({baconItems: newBaconItems});
            this.setState({price: this.state.price - this.state.prices.bacon});
        }
    }

    addSalad() {
        if (newSaladItems.length < 2) {
            newSaladItems.push("");
            this.setState({saladItems: newSaladItems});
            this.setState({price: this.state.price + this.state.prices.salad})
        }
        this.activateOrderBtn();
    }

    deleteSalad() {
        if (newSaladItems.length > 0) {
            newSaladItems.pop();
            this.setState({saladItems: newSaladItems});
            this.setState({price: this.state.price - this.state.prices.salad})
        }
    }

    addCheese() {
        if (newCheeseItems.length < 2) {
            newCheeseItems.push("");
            this.setState({cheeseItems: newCheeseItems});
            this.setState({price: this.state.price + this.state.prices.cheese})
        }
        this.activateOrderBtn();
    }

    deleteCheese() {
        if (newCheeseItems.length > 0) {
            newCheeseItems.pop();
            this.setState({cheeseItems: newCheeseItems});
            this.setState({price: this.state.price - this.state.prices.cheese})
        }
    }

    addMeat() {
        if (newMeatItems.length < 2) {
            newMeatItems.push("");
            this.setState({meatItems: newMeatItems});
            this.setState({price: this.state.price + this.state.prices.meat})
        }
        this.activateOrderBtn();
    }

    deleteMeat() {
        if (newMeatItems.length > 0) {
            newMeatItems.pop();
            this.setState({meatItems: newMeatItems});
            this.setState({price: this.state.price - this.state.prices.meat})
        }
    }

    continueOrder() {
        this.handleClose();
        this.setState({showOrderBlock: false});
    }

    cancelOrder() {
        this.setState({showOrderBlock: true});
        this.setState({showForm: false});
    }

    showForm() {
        this.setState({showForm: true})
    }


    render() {

        return (
            <div>
                {!this.state.showOrderBlock ? <h1>We hope it tasted well!</h1> : <div></div>}
                <div className={styles.burger}>
                    <div className={styles.topBun}></div>
                    {this.state.baconItems.map(() => {
                        return (
                            <Bacon key={Math.random()}/>
                        )
                    })
                    }
                    {this.state.saladItems.map(() => {
                        return (
                            <Salad key={Math.random()}/>
                        )
                    })
                    }
                    {this.state.cheeseItems.map(() => {
                        return (
                            <Cheese key={Math.random()}/>
                        )
                    })
                    }
                    {this.state.meatItems.map(() => {
                        return (
                            <Meat key={Math.random()}/>
                        )
                    })
                    }
                    <div className={styles.bottomBun}></div>
                </div>
                {this.state.showOrderBlock ? <OrderBlock addBacon={this.addBacon.bind(this)}
                                                         deleteBacon={this.deleteBacon.bind(this)}
                                                         addSalad={this.addSalad.bind(this)}
                                                         deleteSalad={this.deleteSalad.bind(this)}
                                                         addCheese={this.addCheese.bind(this)}
                                                         deleteCheese={this.deleteCheese.bind(this)}
                                                         addMeat={this.addMeat.bind(this)}
                                                         deleteMeat={this.deleteMeat.bind(this)}
                                                         price={this.state.price}
                                                         variant={this.state.variant}
                                                         showModal={this.handleShow.bind(this)}
                                                         closeModal={this.handleClose.bind(this)}
                /> : <TwoBtns showForm={this.showForm.bind(this)}
                              cancelOrder={this.cancelOrder.bind(this)}/>}

                {this.state.showForm && <OrderForm/>}

                <MyVerticallyCenteredModal show={this.state.show}
                                           onHide={this.handleClose.bind(this)}
                                           onClose={this.handleClose.bind(this)}
                                           bacon={newBaconItems.length}
                                           salad={newSaladItems.length}
                                           cheese={newCheeseItems.length}
                                           meat={newMeatItems.length}
                                           price={this.state.price}
                                           continueOrder={this.continueOrder.bind(this)}
                />
            </div>
        );
    }

}

export default Burger;
