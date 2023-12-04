import React from 'react'
import Btn from '../../../ui/button/Btn'
import './Landing.scss'

const Landing = () => {
  return (
    <section class="landing">
        <div class="cta">
            <div class="header">
                <h1>Make a <span>Pawsitive</span> Change</h1>
            </div>
            <div class="body">
                <h4>Help bring every paw back home! Start your search now, your furry friends can’t wait to see you!</h4>
            </div>
            <div class="btns">
                <div class="btn">
                <Btn class = "bg-orange" text="Find pet"/>
                </div>
                <div class="btn">
                    <Btn class = "bg-blue" text="Join Us"/>
                </div>
            </div>
        </div>
        <div class="img">
            <div><h1>hello</h1></div>
        </div>
    </section>
  )
}

export default Landing