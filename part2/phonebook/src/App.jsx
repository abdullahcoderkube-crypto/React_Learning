import { useState, useEffect} from 'react'
import axios from "axios"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearchBar] = useState('')

  useEffect(()=> {
    console.log("effect")
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const fetchedPersons = response.data
      setPersons(fetchedPersons) 
    })
  }, [])

  console.log("promise fulfilled");
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



  return (
    <div>
      <h2>Phonebook</h2>
      <p>Search Bar 🔎</p>
      <Filter searchValue={newSearch} onChange={handleSearchInput}/>
      <PersonForm name={newName} number={newNumber} onSubmit={handleSubmit} onNameChange={handleNewNameInput} onNumberChange={handleNewNumberInput} />
      <h2>Numbers</h2>
      <Persons allPersons={visiblePersons}/>
    </div>
  )
}

export default App