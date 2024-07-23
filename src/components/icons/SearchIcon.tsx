import React from 'react'
type props ={
  color:string
}
const SearchIcon = ({color}:props) => {
  return (
    <div className={`${color === 'cardL'?'':'absolute'} inset-y-0 start-0 flex items-center m-1   font-bold `}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={` ${color ==="cardL"? 'size-5':'size-8'} font-bold text-${color}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </div>
  )
}

export default SearchIcon