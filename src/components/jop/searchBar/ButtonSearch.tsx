import React from 'react'
import Button from '../../ui/Button'
import SearchIcon from '../../ui/SearchIcon'
type props ={
    T?:boolean
}
const ButtonSearch = ({T}:props) => {
  return (
   <Button>
 {T? <SearchIcon color='cardL'/>:"Search"}
  
   </Button>
  )
}

export default ButtonSearch