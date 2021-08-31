import React from 'react';
import Review from './Review';
import data from './data';
import './index.css'

function App() {
  return (
    <main>
      <section className="container"> 
      <div className="title">
    <h2>Our Review</h2>
    <div className="underline"></div>
    </div> 
    < Review/>
    </section>
    </main>
  );
}

export default App;
