import React from 'react'
import lag from './images/img (5).jpeg'
import ogb from './images/img6.jpeg'
import og from './images/immg.jpeg'
import farm from './images/trac.jpeg'
import far from './images/yam.jpeg'
import ogbb from './images/img.jpeg'




const Section1 = () => {
  return (
    <div className='project'>
    <div className='col sec1'>
      <p></p>
      <h2>Recent Project</h2>
        <div className='row'>
        <div className='col-4 ogb'>
            <img src={lag} alt="" />
        </div>
        <div className='col-4 oyo'>
             <img src={ogb} alt="" />
        </div>
        <div className='col-4 lag'>
             <img src={og} alt="" />
        </div>
        </div>
        </div>
        <div className='col sec1'>
        <div className='row'>
        <div className='col-4  ogbb'>
            <img src={farm} alt="" />
        </div>
        <div className='col-4 oyoo'>
             <img src={far} alt="" />
        </div>
        <div className='col-4 lagg'>
             <img src={ogbb} alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Section1