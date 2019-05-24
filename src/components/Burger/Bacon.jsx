import React from 'react';
import styles from './Burger.module.css';

class Bacon extends React.Component {
    state = {
        show: false
    }

    render() {
        return (
            <div>
                <div className={styles.bacon}></div>
            </div>
        );
    }
}

export default Bacon;