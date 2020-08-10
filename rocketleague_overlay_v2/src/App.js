import React from 'react';
import './App.css';
import background from './RL_screen.jpg';
import Scorepoint from './Scorepoint';

let max_score = 3;

function App() {
  return (
    <div class="Overlay">
            <img src={background} alt="Ein Hintergrund" />

            <div className="team-left">
                <h2 className="team-name">ECO E-Zpörts</h2>
                <div className="points-left">
                    <Scorepoint max_score={max_score}/>
                </div>   
            </div>

            <div className="team-right">
                <h2 className="team-name">Hamburger Haie</h2>
                <div className="points-right">
                    <div id="right-1"></div>
                    <div id="right-2"></div>
                    <div id="right-3"></div>
                </div>
            </div>
        </div>
  );
}

export default App;
