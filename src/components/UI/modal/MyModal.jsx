import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClases = [style.myModal];
    if(visible){
        rootClases.push(style.active);
    }

    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
           <div className={style.myModalContent} onClick={(e) => e.stopPropagation() }>
                {children}
           </div>
        </div>
    )
}

export default MyModal;