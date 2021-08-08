import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSearch, setSearch] = useState('');

  const addName = (event) => {
    event.preventDefault();

    const newObject = { name: newName, number: newPhone };

    persons.filter((person) => person.name === `${newName}`).length > 0
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newObject));
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchInputField = (event) => {
    setSearch(event.target.value);
  };

  // const contactToShow = (event) => {
  //   persons.filter((contact) => )
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="searchfield">
        <form>
          filter shown with
          <input type="text" />
        </form>
      </div>{' '}
      <h2>Add a new one</h2>
      <form onSubmit={addName}>
        <div className="name">
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div className="phoneNum">
          number:{' '}
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={newPhone} onChange={handlePhoneInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div className="names">
        {persons.map((person) => {
          return (
            <div key={person.name}>
              <p>
                {person.name} {person.number}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
