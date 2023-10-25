import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer. </p>
            <p>It doesn't matter if your business is large or small, B2B or B2C, selling tangible goods or providing remote services. Companies need to meet their customers in the right place to increase their sales, and today's customers increasingly want to connect and shop online.</p>
        </div>
    </div>
  )
}
export default DescriptionBox
