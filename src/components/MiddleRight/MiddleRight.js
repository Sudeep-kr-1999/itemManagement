import React from 'react'
import "./middleright.css";
function MiddleRight({description}) {
  return (
    <div className='footermiddleright relative block'>
        {description}
    </div>
  )
}

export default React.memo(MiddleRight);