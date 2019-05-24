import React from 'react';
import styles from './Burger.module.css';

class Salad extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.salad}></div>
            </div>
        );
    }
}

export default Salad;