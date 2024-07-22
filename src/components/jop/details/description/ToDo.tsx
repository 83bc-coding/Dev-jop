import React from 'react'
import Text from '../../../ui/Text'
import Desc from '../../../ui/Desc'
import Lists from '../../../ui/listsDisc'
type props ={
  role:object
}
const ToDo = ({role}:props) => {
  return (
    <>
    <Text name={"What You Will Do"}/>
    <Desc text={" v sgf gf"}/>
      <Lists type={"disc"}/>
  </>
  )
}

export default ToDo