// Home.js
import React from 'react';
import '../css/Home.css'; // Import your CSS file

function Home() {
  return (
    <div>
      <nav class="schedule-navbar">
        <ul>
          <button class="schedule-previous">{`<`}</button>
          <li>
            <span class="sport">Basketball</span>
            <span class="datetime">2023-12-10 18:00</span>
            <span class="teams">Team A vs. Team B</span>
          </li>
          <li>
            <span class="sport">Football</span>
            <span class="datetime">2023-12-11 14:30</span>
            <span class="teams">Team C vs. Team D</span>
          </li>
          <li>
            <span class="sport">Baseball</span>
            <span class="datetime">2023-12-17 12:30</span>
            <span class="teams">Team B vs. Team D</span>
          </li>
          <li>
            <span class="sport">Volleyball</span>
            <span class="datetime">2023-12-14 12:30</span>
            <span class="teams">Team A vs. Team C</span>
          </li>
          <button class="schedule-next">{`>`}</button>
          <button class="full-schedule" ></button>
        </ul>
    </nav>
    </div>
  );
}

export default Home;
