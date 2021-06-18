import React from 'react'
import './Button.css';

const Styles = ['btn--primary', 'btn--outline', 'btn-test']
const Sizes  = ['btn--medium', 'btn--large']


export const Button = ({
    type,
    checkStyle, 
    checkSize, 
    children, 
    onClick,
}) => {
    //to give me the value by default
    const checkStyleButton = Styles.includes(checkStyle) ? checkStyle : Styles[0]; 
    const checkSizeButton = Sizes.includes(checkSize) ? checkSize : Sizes[0];

    return (
        <div>
           <button className={`btn ${checkStyleButton} ${checkSizeButton}`}
                   type={type}
                   onClick={onClick}
           >{children}
           </button>
        </div>
    )
}

