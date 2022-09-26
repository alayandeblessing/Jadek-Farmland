import React from 'react'
import farmland from './images/tra.jpeg'
import og from './images/immg.jpeg'

const Main = () => {
  return (
    <div className='Main'>
    <h1 className='pt-2 affordable'>Buy Affordable Farmland</h1>
     <div className='land_img'>
     {/* <img src={og} alt="" /> */}
     <p></p>
      </div>
        <div className='service_sec'>
           <h2>Our Service</h2>
           <div className='service_box'>
            <h3 className='service_semBox'>Farmland Acquisition and Sales</h3>
            <h3 className='service_semBox'>Farm Setup</h3>
            <h3 className='service_semBox'>Farm Management</h3>
           </div>
           <h3>Become Farmland Owner in Nigeria </h3>
           <p className='Become'>Become a farmland owner in Nigeria <br/>
Our farmland in Oyo state.<br/>Take advantage of our current price 150,000 naira per Acres 
Our Acres is 8 plots. All Our farmland are fertile and appropriate for a wide range of crops : Cashew . Yam etc
You will get Jadek  Document , Allocation letter  and Deed of Assigment
CALL US TODAY <br/>
08082350184</p>
        </div>
    </div>
  )
}

export default Main