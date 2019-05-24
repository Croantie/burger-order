import React from 'react';
import styles from './Burger.module.css';

class Cheese extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.cheese}></div>
            </div>
        );
    }
}

export default Cheese;