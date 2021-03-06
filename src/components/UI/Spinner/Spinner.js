import React from 'react';
import styles from './Spinner.css';

const spinner = (props) => {
    let spanArr = [...Array(9)].map( (e,i) => <span key={i}></span>);
    
    return (
        <div className={styles.Spinner}>
            <div className={styles.SpanContainer}>
                {spanArr}
            </div>
            <div className={styles.Loading}>Loading</div>
        </div>
    )
};

export default spinner;