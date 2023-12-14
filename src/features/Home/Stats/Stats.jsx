import React from 'react'
import StatsCard from '../../../ui/StatsCard/StatsCard'
import Stats from './Stats.scss'

const Stats = () => {
  return (
    <div>
        <div className="img-paw">
        </div>
        <section className="statistic">
            <div className="container">
                <StatsCard 
                number = "100"
                text = "MISSING PETS"
                image = "/img-paw.png" />
                <StatsCard 
                number = "100"
                text = "FOUND PETS"
                image = "/img-paw.png" />
                <StatsCard 
                number = "100"
                text = "REUNITED PETS"
                image = "/img-paw.png" />
            </div>
        </section>
    </div>
  )
}

export default Stats