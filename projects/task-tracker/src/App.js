import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'get vaccinated',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'get back to school',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'catch pikaccu',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
