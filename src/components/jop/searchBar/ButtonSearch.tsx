import React, { ReactNode } from 'react'
import Button from '../../ui/Button'
 type props ={
     w?:string,
    children?: ReactNode;

}
const ButtonSearch = ({children,w}:props) => {
  return (
   <Button w={w}>

  {children}
   </Button>
  )
}

export default ButtonSearch