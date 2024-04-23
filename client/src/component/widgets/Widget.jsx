import React from 'react'
import './widget.scss'
import EngineeringIcon from '@mui/icons-material/Engineering';

const Widget = ({type}) => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{type}</span>
        <span className="state">{type}</span>
        <span className="link">see all ...</span>
      </div>
      <div className="right">
        <div className="percentage">
            <EngineeringIcon />
            <p className="state">14</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
