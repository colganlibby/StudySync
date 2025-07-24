import React, { useState } from 'react';

function MoodSlider() {
  const [mood, setMood] = useState(3);

  const moodFaces = {
    1: '😞',
    2: '😐',
    3: '🙂',
    4: '😄',
    5: '🤩',
  };

  return (
    <div style={{ margin: '2rem 0' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>🧠 How are you feeling?</h3>
      <input
        type="range"
        min="1"
        max="5"
        value={mood}
        onChange={(e) => setMood(Number(e.target.value))}
        style={{ width: '100%' }}
      />
      <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
        Mood: {moodFaces[mood]} ({mood})
      </p>
    </div>
  );
}

export default MoodSlider;
