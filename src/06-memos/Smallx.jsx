import React from 'react'




export const Smallx = React.memo(({value}) => {
  console.log('Me volvi a dibujar :X .l.')
  return (
    <small> {value} </small>
  )
})
