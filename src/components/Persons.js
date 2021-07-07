
import React from 'react'
import DeleteBtn from './DeleteBtn'

const Persons = (props) => {
    return(
      <div id="parent">
        <li> {props.persons.name} {props.persons.number} </li>
        <DeleteBtn persons={props.persons.name} onRemove={props.onRemove}/>
      </div>
    )
  }

  export default Persons