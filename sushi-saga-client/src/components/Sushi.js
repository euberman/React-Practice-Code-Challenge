import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name, img_url, price} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushi.eaten ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi