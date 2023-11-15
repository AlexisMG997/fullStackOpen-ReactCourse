import React from 'react'

const Filter = ({filterResult}) => {
  return (
    <div>
      Filter shown with <input onChange={filterResult} />
    </div>
  )
}

export default Filter