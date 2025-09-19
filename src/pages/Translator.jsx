import React, { useState } from 'react';

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" }
];

function fakeTranslate(text, from, to) {
  // Fake translation: reverse string & append lang code
  if (!text) return "";
  return `[${to}] ${text.split("").reverse().join("")}`;
}

function Translator() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('es');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    setOutput(fakeTranslate(input, from, to));
  };

  return (
    <div className="card" style={{ maxWidth: 340 }}>
      <h2 style={{ color: 'var(--accent)' }}>Translator</h2>
      <textarea
        rows={3}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter text"
        style={{ width: '100%', padding: 7, fontSize: 16, borderRadius: 6, border: '1px solid #ddd', marginBottom: 10 }}
      />
      <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
        <select value={from} onChange={e => setFrom(e.target.value)} style={{ fontSize: 15 }}>
          {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)})}
        </select>
        <span style={{ fontSize: 18 }}>&rarr;</span>
        <select value={to} onChange={e => setTo(e.target.value)} style={{ fontSize: 15 }}>
          {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)})}
        </select>
      </div>
      <button
        onClick={handleTranslate}
        style={{ padding: '9px 18px', fontSize: 16, borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#fff', marginBottom: 12, cursor: 'pointer' }}
      >
        Translate
      </button>
      <div style={{ fontSize: 16, background: '#f7f7f7', minHeight: 40, borderRadius: 8, padding: 8 }}>{output}</div>
    </div>
  );
}

export default Translator;