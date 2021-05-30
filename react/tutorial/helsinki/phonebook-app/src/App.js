import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const newObject = { name: newName };
    setPersons(persons.concat(newObject));
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
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
              <p>{person.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
