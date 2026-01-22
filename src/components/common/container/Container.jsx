import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-325 mx-auto'>
        {children}
    </div>
  )
}

export default Container