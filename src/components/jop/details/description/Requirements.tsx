import React from 'react'
import Lists from '../../../ui/listsDisc'
import Desc from '../../../ui/Desc'
import Text from '../../../ui/Text'
type props ={
  requirements:object
}
const Requirements = ({requirements}:props) => {
  return (<>
    <Text name={"Requirements"}/>
    <Desc text={"v dfdsvf"}/>
      <Lists type={"disc"}/>
  </>

  )
}

export default Requirements