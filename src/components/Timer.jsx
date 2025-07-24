import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval;
    if (active && time > 0) {
      interval = setInterval(() => setTime(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [active, time]);

  const format = (t) => `${Math.floor(t / 60)}:${('0' + t % 60).slice(-2)}`;

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>⏱️ Pomodoro Timer</h3>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{format(time)}</h2>
      <button onClick={() => setActive(!active)}>
        {active ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
