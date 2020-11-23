import React from 'react'


function BlogWrapper(props) {
  return (
    <div style={{padding: '20px', backgroundColor: 'lightgray', borderRadius: '20px', color: 'black', marginBottom: '30px'}}>
      {props.children}
    </div>
  )
}

export { BlogWrapper }
