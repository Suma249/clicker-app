import React, { useState } from 'react'

function Clicker() {
  const [count, setCount]=useState(0)
  return (
    <div className="container">
      <div className='clickerParent border border-secondary rounded mt-4'>
        <div className='clickerDisplay d-flex align-items-center justify-content-center bg-light display-2'>
           {count}
        </div>
      <div className='clickerButtonContainer d-flex flex-row'>
      <button onClick={ () => setCount(count+1)} className='btn btn-success w-100'><i className='fa fa-2x fa-plus'/></button>
      <button onClick={ () => setCount(0)} className='btn btn-warning w-100'><i className='fa fa-2x fa-refresh'/></button>
      <button onClick={ () => setCount(count-1)} className='btn btn-danger w-100'><i className='fa fa-2x fa-minus'/></button>
      </div>
      </div>
    </div>
  )
}

export default Clicker