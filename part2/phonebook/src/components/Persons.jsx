import List from './List'
const Persons = ({allPersons}) => 
        <ul>
            {allPersons.map(person => <List key={person.key} personName={person.name} personNumber={person.number}/>)}
        </ul>


export default Persons;