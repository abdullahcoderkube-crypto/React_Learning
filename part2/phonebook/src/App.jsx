import { useState } from 'react'

const List = ({personName, personNumber}) => <li> {personName}: {personNumber}</li>

const App = () => {
  const [persons, setPersons] = useState([
    { key: 'arto-hellas',name: 'Arto Hellas', number: '9999999999'},
    { key: 'abdullah-aakukara',name: 'Abdullah Aakukara', number: '8155895245'},
    { key: 'jasmine',name: 'Jasmine', number: '9998280391'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearchBar] = useState('')

  const visiblePersons = newSearch.trim() === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(newSearch.toLowerCase())
      )

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const doesPersonNameExist = persons.some(person => person.key === newName.trim().toLowerCase().split(' ').join('-'))
    const doesNumberExist = persons.some(person => person.number === newNumber.trim())

    if (newName === '' || newName.trim() === '') {
      window.alert("ENTER VALID NAME!")
    }
    else if(newNumber === '' || newNumber.trim() === '') {
      window.alert("ENTER VALID NUMBER!")
    }
    else if (doesPersonNameExist) {
      window.alert(`${newName} already exists in Phonebook!`)
    } else if (doesNumberExist) {
      window.alert(`This number (${newNumber}) already exists in Phonebook!`)
    }
    else {
      const newPerson = {
      key: newName.trim().toLowerCase().split(" ").join("-"), 
      name: newName, 
      number: newNumber.trim()
    }
      setNewName('')
      setNewNumber('')
      setPersons(persons.concat(newPerson))
    }
  }

  //Person Name input change event handler
  const handleNewNameInput = (event) => {
    setNewName(event.target.value)
  }

  //Person's Number input change event handler
  const handleNewNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  // Search bar input change event handler
  const handleSearchInput = (event) => {
    setSearchBar(event.target.value)
  }

  // Search button click handler
  const handleSearchClick = () => {
    if (newSearch.trim() === '') {
      window.alert('INVALID SEARCH!')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Search Bar 🔎</p>
      <input value={newSearch} onChange={handleSearchInput}/> <button onClick={handleSearchClick}> Search 🔎</button>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {visiblePersons.map(person => <List key={person.key} personName={person.name} personNumber={person.number}/>)}
      </ul>
    </div>
  )
}

export default App