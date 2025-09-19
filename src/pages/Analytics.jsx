import React, { useState } from 'react';

function randomData(n=8) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 80 + 20));
}

function Analytics() {
  const [data, setData] = useState(randomData());

  return (
    <div className="card" style={{ maxWidth: 440 }}>
      <h2 style={{ color: 'var(--accent)' }}>Analytics</h2>
      <div style={{ marginBottom: 15, color: '#555' }}>Sample data chart</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: 180, gap: 8, marginBottom: 18 }}>
        {data.map((val, i) => (
          <div key={i} style={{
            width: 30,
            height: `${val * 2}px`,
            background: 'var(--accent)',
            borderRadius: '6px 6px 0 0',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: 13,
            boxShadow: '0 1px 6px rgba(0,0,0,0.07)'
          }}>
            <span style={{ marginBottom: 4 }}>{val}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => setData(randomData())}
        style={{ padding: '9px 18px', fontSize: 16, borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
      >
        Refresh Data
      </button>
    </div>
  );
}

export default Analytics;