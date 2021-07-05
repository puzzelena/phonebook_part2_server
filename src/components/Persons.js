import React from 'react'

const Persons = ({filterNames}) => {
    return (
      <div>
      {filterNames.map(person => 
            <li>{person.name} {person.number}</li>
        )}
      </div>
    )
  }

  export default Persons;