import React from 'react'

const DeleteBtn = (props) => {
    return(
        <div>
          <button onClick={() => props.onRemove(props.persons)}>
              delete</button>
        </div>
    )
}

export default DeleteBtn