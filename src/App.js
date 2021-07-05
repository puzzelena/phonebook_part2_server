import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

    const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

    const [ newName, setNewName ] = useState('')

    const [ newNumber, setNewNumber ] = useState('')

    const [filterNames, setFilterNames] = useState(persons);

    useEffect(() => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })
    }, [])

const addName = (event) => {
      event.preventDefault()

      if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return false;
    }
    
      const nameObject = {
          name: newName,
          number: newNumber,
      }

      axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
      setPersons([...persons,response.data])
      setNewName('')
      setNewNumber('')
    })

}

const handleNameChange = (event) => {
    setNewName(event.target.value)
}

const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
}

const filterName = (e) => {
    setFilterNames(persons.filter(person => 
    person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1))
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} />
      <h3>Add new user</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />  
      <h2>Numbers</h2>
      <ul>
      <Persons filterNames={filterNames} />
      </ul>
    </div>
  )
}

export default App;