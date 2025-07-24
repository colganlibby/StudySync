import React from 'react';
import './StudySync.css';
import Timer from './components/Timer';
import MoodSlider from './components/MoodSlider';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
  <h1>📚 StudySync</h1>
      <Timer />
      <MoodSlider />
      <TaskList />
    </div>
  );
}

export default App;

