import React from 'react'
import "./Btn.scss";

const Btn = (props) => {
  return (
    <div className={`button ${props.class}`} >
        <h5>{props.text}</h5>
    </div>
  )
}

export default Btn
