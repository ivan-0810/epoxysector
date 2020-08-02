import React, { Fragment } from 'react';
import translate from '../i18Provider/translate'

const TextDiv = ({text,h1,h3}) => {
    console.log(text);    
    return (
        <Fragment >
           {h3 && <h3>{translate(`${h3}`)}</h3>} 
            {h1 && <h1>{translate(`${h1}`)}</h1>} 
            {text && text.map((txt,inx) => (
                <p key={inx}>{translate(`${txt}`)}</p>
            ))}
           
        </Fragment>
    );
}

export default TextDiv;