import React from 'react';

const styles = require( './Header.module.css');

type HeaderProps = {
    text: string;
}

export default ( {text}: HeaderProps ) => {
    return(
        <div className={styles.header}>
            <h1>{text}</h1>
        </div>
    )
}