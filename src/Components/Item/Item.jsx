import React from 'react'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices-new">
            ${props.new_price}
        </div>
        <div className="item-prices-old">
            ${props.old_price}
        </div>
    </div>
  )
}

export default Item