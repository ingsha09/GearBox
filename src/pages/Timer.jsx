import React, { useState, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef();

  const handleStart = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setSeconds(0);
  };

  return (
    <div className="card" style={{ maxWidth: 340 }}>
      <h2 style={{ color: 'var(--accent)' }}>Timer</h2>
      <div style={{ fontSize: 34, fontWeight: 700, marginBottom: 10 }}>
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={handleStart}
          disabled={running}
          style={{ padding: '9px 18px', fontSize: 16, borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
        >
          Start
        </button>
        <button
          onClick={handlePause}
          disabled={!running}
          style={{ padding: '9px 18px', fontSize: 16, borderRadius: 8, border: 'none', background: '#888', color: '#fff', cursor: 'pointer' }}
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          style={{ padding: '9px 18px', fontSize: 16, borderRadius: 8, border: 'none', background: '#e77', color: '#fff', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;