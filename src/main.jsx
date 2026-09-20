import mintImg from './assets/mint.jpg';
import bankImg from './assets/bank.jpg';
import goldImg from './assets/gold.jpg';


import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const operations = [
  { code: 'OP-01', title: 'Foozy', type: 'WEB OPERATION', text: 'A food-delivery interface built from scratch. HTML structure, CSS styling and a little obsession with details.', tags: ['HTML', 'CSS', 'UI'] },
  { code: 'OP-02', title: 'KaarigarSetu', type: 'HACKATHON OPERATION', text: 'A problem-solving mission around artisans: research, storytelling, teamwork and a digital-first solution.', tags: ['RESEARCH', 'TEAM', 'IDEA'] },
  { code: 'OP-03', title: 'DSA TRAINING', type: 'ACTIVE OPERATION', text: 'The current mission: turn C++ basics into actual problem-solving ability, one problem at a time.', tags: ['C++', 'DSA', 'LEETCODE'] }
];

const skills = [
  ['C', 68, 'THE FIRST TOOL'], ['C++', 55, 'CURRENT WEAPON'], ['DSA', 42, 'UNDER TRAINING'],
  ['HTML / CSS', 76, 'WEB CRAFT'], ['JavaScript', 45, 'NEW OPERATION'], ['Linux', 60, 'CONTROL ROOM']
];

function App() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState('home');
  const [showPlan, setShowPlan] = useState(false);
  const [typed, setTyped] = useState('');
  const target = 'THE PLAN IS SIMPLE: ALWAYS HAVE A PLAN.';

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!booted) return;
    let i = 0;
    const timer = setInterval(() => {
      setTyped(target.slice(0, i + 1));
      i++;
      if (i >= target.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, [booted]);

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!booted) return <BootScreen />;

  return (
    <div className="site">
      <div className="noise" />
      <Header active={active} go={go} />

      <main>
        <section id="home" className="hero section">
          <div className="stamp">CONFIDENTIAL // CASE FILE 02</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">THE PROFESSOR'S FILE</p>
              <h1>VIKAS<br /><span>THE PROFESSOR</span></h1>
              <p className="hero-line">I don't break into systems.<br /><b>I build the systems worth breaking into.</b></p>
              <p className="muted">CSE student • developer in training • professional overthinker</p>
              <div className="actions">
                <button className="red-btn" onClick={() => go('operations')}>VIEW OPERATIONS</button>
                <button className="ghost-btn" onClick={() => go('contact')}>OPEN CHANNEL</button>
              </div>
            </div>
            <div className="professor-card">
              <div className="card-top"><span>IDENTITY: ACTIVE</span><span>◆</span></div>
              <div className="silhouette"><div className="head" /><div className="glasses" /><div className="body" /></div>
              <div className="quote">“The most important part of a plan is knowing what to do when the plan changes.”</div>
              <div className="card-bottom"><span>VIKAS</span><span>INDIA // 2026</span></div>
            </div>
          </div>
          <div className="scroll-note">SCROLL TO ENTER THE PROFESSOR'S ARENA ↓</div>
        </section>

        <section id="story" className="section story">
          <div className="section-head"><span>01</span><h2>THE STORY</h2></div>
          <div className="story-layout">
            <div className="big-number">02</div>
            <div>
              <p className="eyebrow">THE ORIGIN</p>
              <h3>Every heist starts<br />with a problem.</h3>
              <p>I started with the basics: C, loops, arrays, patterns and the classic question — “why is this code not working?”</p>
              <p>Then came C++, DSA, HTML, CSS, JavaScript and Linux. I am not pretending the journey is finished. That is the interesting part.</p>
              <div className="typed-line">&gt; {typed}<span className="cursor">_</span></div>
            </div>
          </div>
        </section>

        <section id="operations" className="section operations">
          <div className="section-head"><span>02</span><h2>OPERATIONS</h2></div>
          <p className="section-sub">Not “projects”. Operations. Every build has a target, a constraint and a lesson.</p>
          <div className="operation-grid">
            {operations.map((op, i) => <Operation key={op.code} op={op} i={i} />)}
          </div>
        </section>

        <section id="arsenal" className="section arsenal">
          <div className="section-head"><span>03</span><h2>THE ARSENAL</h2></div>
          <div className="skill-grid">
            {skills.map(([name, value, label]) => (
              <div className="skill" key={name}>
                <div className="skill-meta"><b>{name}</b><span>{label}</span></div>
                <div className="bar"><i style={{ width: `${value}%` }} /></div>
                <small>{value}% // CURRENT STATUS</small>
              </div>
            ))}
          </div>
          <p className="arsenal-note">The percentages are not a rating. They are the running mission.</p>
        </section>

        <section id="plan" className="section plan">
          <div className="section-head"><span>04</span><h2>THE PLAN</h2></div>
          <div className="plan-board">
            <div className="plan-line" />
            {['MASTER DSA', 'SHIP REAL PROJECTS', 'LEARN JS / REACT', 'GET INTERNSHIP READY'].map((x, i) => (
              <div className="plan-step" key={x}>
                <div className="step-no">0{i + 1}</div>
                <div><b>{x}</b><p>{['Stop memorising. Start solving.', 'Build things people can actually use.', 'Turn the web from pages into products.', 'Make preparation visible through proof.'][i]}</p></div>
              </div>
            ))}
          </div>
          <button className="red-btn reveal" onClick={() => setShowPlan(v => !v)}>{showPlan ? 'HIDE SECRET NOTE' : 'REVEAL SECRET NOTE'}</button>
          {showPlan && <div className="secret-note">SECRET NOTE // I am not trying to become “the smartest person in the room”. I am trying to become the person who keeps learning after the room changes.</div>}
        </section>

        <section id="contact" className="section contact">
          <div className="section-head"><span>05</span><h2>OPEN CHANNEL</h2></div>
          <div className="terminal">
            <div className="terminal-top"><span>● ● ●</span><span>secure-channel.sh</span></div>
            <div className="terminal-body">
              <p><span className="green">Professor-Arena</span></p>
              <p className="white">A CSE student building his way from basics to better systems.</p>
              <p><span className="green">control-room</span> connect</p>
    <div className="links my-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
  {/* Target 01: Royal Mint / Email */}
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=vikasawasthi.1412@gmail.com" 
    target="_blank" 
    rel="noreferrer"
    className="group border border-red-900/60 p-2 rounded bg-black/80 hover:border-red-500 transition-all block text-decoration-none"
  >
    <img 
      src={mintImg} 
      alt="Royal Mint" 
      style={{ width: '100%', height: '120px', objectFit: 'cover' }}
      className="rounded group-hover:scale-105 transition-transform duration-300 block" 
    />
    <span className="block text-center text-[10px] text-red-500 mt-2 font-bold">[ TARGET 01 // ROYAL MINT // EMAIL ]</span>
  </a>

  {/* Target 02: Bank of Spain / GitHub */}
  <a 
    href="https://github.com/vikasawasthi1412" 
    target="_blank" 
    rel="noreferrer"
    className="group border border-red-900/60 p-2 rounded bg-black/80 hover:border-red-500 transition-all block text-decoration-none"
  >
    <img 
      src={bankImg} 
      alt="Bank of Spain" 
      style={{ width: '100%', height: '120px', objectFit: 'cover' }}
      className="rounded group-hover:scale-105 transition-transform duration-300 block" 
    />
    <span className="block text-center text-[10px] text-red-500 mt-2 font-bold">[ TARGET 02 // BANK OF SPAIN // GITHUB ]</span>
  </a>

  {/* Target 03: Gold Vault / LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/vikas-awasthi-48baa6371/" 
    target="_blank" 
    rel="noreferrer"
    className="group border border-red-900/60 p-2 rounded bg-black/80 hover:border-red-500 transition-all block text-decoration-none"
  >
    <img 
      src={goldImg} 
      alt="Gold Vault" 
      style={{ width: '100%', height: '120px', objectFit: 'cover' }}
      className="rounded group-hover:scale-105 transition-transform duration-300 block" 
    />
    <span className="block text-center text-[10px] text-red-500 mt-2 font-bold">[ TARGET 03 // GOLD VAULT // LINKEDIN ]</span>
  </a>
</div>    
    
    
              <p><span className="green">La Casa de papel</span> <span className="cursor">_</span></p>
            </div>
          </div>
        </section>
      </main>

      <footer><span>VIKAS // THE PROFESSOR</span><span>FAN-MADE PORTFOLIO CONCEPT • MONEY HEIST INSPIRED</span><span>© 2026</span></footer>
    </div>
  );
}

function BootScreen() {
  const [line, setLine] = useState(0);
  const lines = ['INITIALISING CONTROL ROOM...', 'VERIFYING IDENTITY...', 'LOADING THE PLAN...', 'ACCESS GRANTED.'];
  useEffect(() => { const t = setInterval(() => setLine(v => Math.min(v + 1, lines.length - 1)), 400); return () => clearInterval(t); }, []);
  return <div className="boot"><div className="boot-box"><div className="boot-mark">◆</div>{lines.map((x, i) => <p className={i <= line ? 'on' : ''} key={x}>{i <= line ? '✓' : '○'} {x}</p>)}<div className="boot-bar"><i /></div></div></div>;
}

function Header({ active, go }) {
  return <header><div className="brand" onClick={() => go('home')}><span>◆</span> THE PROFESSOR</div><nav>{[['home', 'HOME'], ['story', 'STORY'], ['operations', 'OPERATIONS'], ['arsenal', 'ARSENAL'], ['plan', 'PLAN'], ['contact', 'CONTACT']].map(([id, label]) => <button className={active === id ? 'active' : ''} key={id} onClick={() => go(id)}>{label}</button>)}</nav><div className="status"><i /> LIVE</div></header>;
}

function Operation({ op, i }) {
  return <article className="op-card"><div className="op-number">{String(i + 1).padStart(2, '0')}</div><div className="op-content"><span className="op-code">{op.code} // {op.type}</span><h3>{op.title}</h3><p>{op.text}</p><div className="tags">{op.tags.map(t => <span key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></article>;
}

createRoot(document.getElementById('root')).render(<App />);
