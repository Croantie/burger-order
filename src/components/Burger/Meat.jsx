import React from 'react';
import styles from './Burger.module.css';

class Meat extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.meat}></div>
            </div>
        );
    }
}

export default Meat;