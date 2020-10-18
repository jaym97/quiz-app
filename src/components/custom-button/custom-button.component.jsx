import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ primary, secondary, transparent, children, ...otherProps }) => {
    return (
        <button 
            className={`custom-button ${primary ? 'primary' : secondary ? 'secondary' : transparent ? 'transparent' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton
