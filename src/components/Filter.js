import React from 'react'

const Filter = ({filterName}) => {
    return (
      <div>
        Filter this name: 
        <input
        onChange={filterName} />
      </div>
    );
  }

  export default Filter;