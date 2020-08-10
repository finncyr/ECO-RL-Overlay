import React from 'react';
import './App.css';
import background from './RL_screen.jpg';

function App() {
  return (
    <div class="Overlay">
            <img src={background} alt="Ein Hintergrund" />

            <div class="team-left">
                <h2 class="team-name">ECO E-Zpörts</h2>
                <div class="points-left">
                    <div id="left-1"></div>
                    <div id="left-2"></div>
                    <div id="left-3"></div>
                </div>   
            </div>

            <div class="team-right">
                <h2 class="team-name">Hamburger Haie</h2>
                <div class="points-right">
                    <div id="right-1"></div>
                    <div id="right-2"></div>
                    <div id="right-3"></div>
                </div>
            </div>
        </div>
  );
}

export default App;
