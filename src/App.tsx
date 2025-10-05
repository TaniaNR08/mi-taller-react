import React from 'react';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import UncontrolledForm from './components/UncontrolledForm';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1>🌸 Mi Taller React Tania 🌸</h1>
      <section className="section">
        <Counter />
      </section>
      <section className="section">
        <LoginForm />
      </section>
      <section className="section">
        <UncontrolledForm />
      </section>
    </div>
  );
}

export default App;
