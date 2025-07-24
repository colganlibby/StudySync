import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>✅ To-Do List</h3>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: '1',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button onClick={addTask} style={{ marginLeft: '0.5rem' }}>
          Add
        </button>
      </div>
      <ul style={{ paddingLeft: '1rem' }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(i)}
              style={{ marginRight: '0.5rem' }}
            />
            <span
              onClick={() => toggleTask(i)}
              style={{
                textDecoration: task.done ? 'line-through' : 'none',
                cursor: 'pointer',
                color: task.done ? '#888' : '#000',
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
