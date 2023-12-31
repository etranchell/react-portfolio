import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Spin-Cycle',
      image:
        'https://github.com/Tagne13/Spin-Cycle/blob/main/images/Screenshot2.png',
      githubLink: 'https://github.com/Tagne13/Spin-Cycle',
      deployedLink: 'https://spin-cycle.herokuapp.com/',
    },
    {
      id: 2,
      title: 'Know a City',
      image:
        'https://user-images.githubusercontent.com/123092979/228099781-a6ae89d0-8c7e-485b-b88c-17c5c06a186c.png',
      githubLink: 'https://github.com/etranchell/KnowACity',
      deployedLink: 'https://etranchell.github.io/KnowACity/',
    },
    {
      id: 3,
      title: 'Password Generator',
      image:
        'https://user-images.githubusercontent.com/123092979/220446908-65d3a511-ce3c-4759-9514-b29332261aad.png',
      githubLink: 'https://github.com/etranchell/Password-Generator',
      deployedLink: 'https://etranchell.github.io/Password-Generator/',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image:
        'https://user-images.githubusercontent.com/123092979/252453408-47fd5a08-78af-4027-bb5c-1c8409344074.png',
      githubLink: 'https://github.com/etranchell/weather-forecast',
      deployedLink: 'https://weather-dashboard23.netlify.app/',
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <div>
            <a href={project.deployedLink} target='_blank' rel='noreferrer'>
              Deployed Link
            </a>
            <a href={project.githubLink} target='_blank' rel='noreferrer'>
              GitHub Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
