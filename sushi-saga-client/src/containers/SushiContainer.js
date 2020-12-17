import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiCollection.map(sushi => {
            return <Sushi key={sushi.id} eatSushi={props.eatSushi} sushi={sushi}/>
          })
        }
        <MoreButton handleMoreBtnClick={props.handleMoreBtnClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer