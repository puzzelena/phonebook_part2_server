import React from 'react'

const PersonForm = ({addName, 
    newName, 
    handleNameChange, 
    newNumber, 
    handleNumberChange}) => {

return (
<form onSubmit={addName}>
Name: 
<input
value={newName}
onChange={handleNameChange}
/>
<br/>
Phone Number: 
<input
value={newNumber}
onChange={handleNumberChange}
/>
<br/>
<button type="submit">save</button>
</form>  
)
}

export default PersonForm;