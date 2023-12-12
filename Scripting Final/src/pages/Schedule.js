import '../css/Schedule.css';
import React, { useEffect, useState } from 'react';

function Schedule() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const response = await fetch('/path/to/events');
        const eventData = [{ sport: 'Basketball', datetime: '2023-12-10 18:00', teams: 'Team A vs. Team B', location: 'Stadium XYZ' },
        { sport: 'Football', datetime: '2023-12-11 14:30', teams: 'Team C vs. Team D', location: 'Field ABC' },
        { sport: 'Baseball', datetime: '2023-12-12 19:45', teams: 'Team E vs. Team F', location: 'Diamond 123' },
        { sport: 'Soccer', datetime: '2023-12-13 16:15', teams: 'Team G vs. Team H', location: 'Soccer Park' },
        { sport: 'Tennis', datetime: '2023-12-14 12:30', teams: 'Player I vs. Player J', location: 'Tennis Court 7' },
        { sport: 'Golf', datetime: '2023-12-15 10:00', teams: 'Player K vs. Player L', location: 'Green Valley Golf Club' },
        { sport: 'Hockey', datetime: '2023-12-16 17:30', teams: 'Team M vs. Team N', location: 'Ice Arena XYZ' },
        { sport: 'Swimming', datetime: '2023-12-17 14:00', teams: 'Swimmer O vs. Swimmer P', location: 'Community Pool' },
        { sport: 'Volleyball', datetime: '2023-12-18 19:15', teams: 'Team Q vs. Team R', location: 'Volleyball Arena' },
        { sport: 'Cycling', datetime: '2023-12-19 08:45', teams: 'Cyclist S vs. Cyclist T', location: 'Cycling Track' },]
        setEventData(eventData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    }

    fetchEventData();
  }, []);

  function formatDateTime(dateTimeString) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleDateString('en-US', options);
  }

  return (
    <body>
        <h1>Full Schedule</h1>
        <div>
            {eventData.map((event, index) => (
            <div key={index} className="event">
                <span className="sport">{event.sport}</span>
                <span className="datetime">{formatDateTime(event.datetime)}</span>
                <span className="teams">{event.teams}</span>
                <span className="location">{event.location}</span>
            </div>
            ))}
        </div>
    </body>
    
  );
}

export default Schedule;
