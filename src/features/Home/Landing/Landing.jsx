import React from 'react'
import Btn from '../../../ui/button/Btn'
import './Landing.scss'

const Landing = () => {
  return (
    <section className="landing container">
        <div className="cta">
            <div className="header">
                <h1>Make a <span>Pawsitive</span> Change</h1>
            </div>
            <div className="body">
                <h4>Help bring every paw back home! Start your search now, your furry friends can’t wait to see you!</h4>
            </div>
            <div className="btns">
                <div className="button bg-orange">
                    <h5>Find Pets</h5>
                </div>
                <div className="button bg-blue">
                    <h5>Join Us</h5>
                </div>
            </div>
        </div>
        <div className="img">
            <div><h1>hello</h1></div>
        </div>
    </section>
  )
}

export default Landing