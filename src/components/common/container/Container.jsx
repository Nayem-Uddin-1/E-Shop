import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-325 mx-auto border'>
        {children}
    </div>
  )
}

export default Container