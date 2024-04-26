import React from 'react'
import "./CounterModelOne.scss"
const CounterModelOne = ({ data }) => {
  return (
    <div className='CounterModelOne'>
      <img src="/images/compteur1.png" alt="" /><span>{data ? data.TENSION_PHASE_1 : ""}</span>
      <img src="/images/compteur1.png" alt="" /><span>{data && data.TENSION_PHASE_2}</span>
      <img src="/images/compteur1.png" alt="" /><span>{data && data.TENSION_PHASE_3}</span>
    </div>
  )
}

export default CounterModelOne