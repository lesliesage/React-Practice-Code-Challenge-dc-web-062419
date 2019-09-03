import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.data.slice(props.pos,props.pos+4).map(sushi => 
          ( 
            <Sushi sushi={sushi} eatSushi={props.eatSushi} key={sushi.id} />
          )
        )}
        <MoreButton updatePosition={props.updatePosition}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer