import React from 'react';
import '../css/Contact.css';

function Contact() {
  const people = [
    {
      name: 'Oliver Oniate',
      title: 'Full-Stack Develoment',
      email: 'mailto:oliver.oniate@msj.edu',
    },
    {
      name: 'Jake Sanders',
      title: 'Front End Development',
      email: 'mailto:jake.sanders@msj.edu',
    },
    {
      name: 'Evan Webb',
      title: 'Back End Development',
      email: 'mailto:evan.webb@msj.edu',
    },
    {
      name: 'Hunter Frank',
      title: 'Web Design',
      email: 'mailto:hunter.frank@msj.edu',
    },
    {
      name: 'Alex Willett',
      title: 'Web Design',
      email: 'mailto:hunter.frank@msj.edu',
    },
    {
      name: 'Mason Jewell',
      title: 'Database Management',
      email: 'mailto:mason.jewell@msj.edu',
    },
    {
      name: 'Gabe Smorey',
      title: `Minesweeper Engineer`,
      email: 'mailto:gabriel.smorey@msj.edu',
    },
  ];

  return (
    <div>
      <h2>Contact Page</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <span className="contact-person" onClick={() => window.location.href = person.email}>{person.name}</span> -<span className="contact-title">{person.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
