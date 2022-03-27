import React from 'react'
import styles from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={styles.myInp} {...props}/>
    )
});

export default MyInput;
