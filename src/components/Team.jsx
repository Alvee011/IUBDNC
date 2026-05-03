import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import './Team.css';

const teamData = [
  // Top Tier
  {
    name: 'Jannatul Ferdous Bornali',
    designation: 'President',
    email: '2130192@iub.edu.bd',
    image: '/EB Photos/Jannatul Ferdous Bornali.jpeg',
    group: 'top'
  },
  {
    name: 'Tasnova Reza',
    designation: 'Vice President',
    email: '2131066@iub.edu.bd',
    image: '/EB Photos/Tasnova Reza.jpeg',
    group: 'top'
  },
  {
    name: 'Aysha Fairuz',
    designation: 'General Secretary',
    email: '2030956@iub.edu.bd',
    image: '/EB Photos/Aysha.png',
    group: 'top'
  },
  {
    name: 'Avishek Banerjee',
    designation: 'Joint Secretary',
    email: '2221423@iub.edu.bd',
    image: '/EB Photos/Avishek Banerjee.jpeg',
    group: 'top'
  },
  {
    name: 'Fozle Rahim Noyon',
    designation: 'Treasurer',
    email: '2110276@iub.edu.bd',
    image: '/EB Photos/Noyon.png',
    group: 'top'
  },
  
  // Event
  {
    name: 'Maidul Islam Shohan',
    designation: 'Head Of Event Organiser',
    email: '2211634@iub.edu.bd',
    image: '/EB Photos/Maidul Islam Shohan.jpeg',
    group: 'event'
  },
  {
    name: 'Ali Adnan Aadar',
    designation: 'Assistant Event Organizer',
    email: '2330081@iub.edu.bd',
    image: '/EB Photos/Ali Adnan Aadar.jpg',
    group: 'event'
  },
  {
    name: 'Sye Hasibul Hasan',
    designation: 'Assistant Event Organizer',
    email: '2321368@iub.edu.bd',
    image: '/EB Photos/Hasibul.png',
    group: 'event'
  },

  // Logistics
  {
    name: 'Md. Mahtabur Rahman',
    designation: 'Head of Logistics',
    email: '2220660@iub.edu.bd',
    image: '/EB Photos/Md. Mahtabur Rahman.jpeg',
    group: 'logistics'
  },
  {
    name: 'Mostofa Nazer Hasan',
    designation: 'Assistant Logistics',
    email: '2330566@iub.edu.bd',
    image: '/EB Photos/Mostofa Nazer.jpeg',
    group: 'logistics'
  },
  {
    name: 'Abdullah Al Tuhin',
    designation: 'Assistant Logistics',
    email: '2230338@iub.edu.bd',
    image: '/EB Photos/Abdullah Al Tuhin.jpg',
    group: 'logistics'
  },

  // Choreography
  {
    name: 'Tanha Tahbub',
    designation: 'Head of Choreography',
    email: '2210332@iub.edu.bd',
    image: '/EB Photos/Tanha Tahbub.jpeg',
    group: 'choreo'
  },
  {
    name: 'Monalisa Rahman Mim',
    designation: 'Assistant Choreographer',
    email: '2311279@iub.edu.bd',
    image: '/EB Photos/Monalisa Rahman Mim.jpg',
    group: 'choreo'
  },
  {
    name: 'Tahima Faizah Khona',
    designation: 'Assistant Choreographer',
    email: '2220530@iub.edu.bd',
    image: '/EB Photos/Tahima Faizah Khona.jpeg',
    group: 'choreo'
  },

  // Media & PR
  {
    name: 'Md. Sakib Al Hasan',
    designation: 'Head Of Media',
    email: '2210128@iub.edu.bd',
    image: '/EB Photos/Md. Sakib Al Hasan.jpeg',
    group: 'media'
  },
  {
    name: 'Khandaker Eshrak Alam (Apurbo)',
    designation: 'Head of Public Relations',
    email: '2211303@iub.edu.bd',
    image: '/EB Photos/Khandaker Eshrak Alam.jpeg',
    group: 'pr'
  },
  {
    name: 'Aditto Arian (Foysal)',
    designation: 'Assistant PR',
    email: '2031208@iub.edu.bd',
    image: '/EB Photos/FOYSAL MIAH.jpg',
    group: 'pr'
  },

  // Visualization & Creative Team
  {
    name: 'Jahin Awshad Ishad',
    designation: 'Head of Visualization',
    email: '2430432@iub.edu.bd',
    image: '/EB Photos/Zaid Ishaad.png',
    group: 'visual'
  },
  {
    name: 'Faruque Azam Alvee',
    designation: 'Assistant Visualization',
    email: '2331106@iub.edu.bd',
    image: '/EB Photos/Faruque Azam Alvee.jpeg',
    group: 'visual'
  },

  // Videography
  {
    name: 'Md Osman Goni',
    designation: 'Head Of Videographer',
    email: '2210606@iub.edu.bd',
    image: '/EB Photos/Md Osman Goni.jpeg',
    group: 'visual'
  },
  {
    name: 'A.B.M Siam Sadat',
    designation: 'Assistant Videographer',
    email: '2311798@iub.edu.bd',
    image: '/EB Photos/Siam.png',
    group: 'visual'
  }
];

const TeamCarousel = () => {
  const images = [
    "/General Images/all EB.jpg",
    "/General Images/iubdnc cover.jpg",
    "/General Images/faculty.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="team-carousel-container">
      <div className="team-carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, idx) => (
          <div key={idx} className="team-carousel-slide">
            <img src={src} alt={`Group ${idx}`} className="all-eb-image" />
          </div>
        ))}
      </div>
      <div className="team-carousel-dots">
        {images.map((_, idx) => (
          <button 
            key={idx} 
            className={`team-carousel-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ member, delay }) => (
  <FadeIn delay={delay}>
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={member.image} alt={member.name} className="team-img" />
      </div>
      <div className="team-info">
        <h4 className="team-name">{member.name}</h4>
        <p className="team-designation text-gradient">{member.designation}</p>
        <a href={`mailto:${member.email}`} className="team-email">{member.email}</a>
      </div>
    </div>
  </FadeIn>
);

const Team = () => {
  return (
    <section id="team" className="team-section section">
      <FadeIn>
        <h2 className="section-title text-center">
          Our <span className="text-gradient">Executive Body</span>
        </h2>
        <p className="intro-text" style={{marginBottom: '3rem'}}>
          Meet the passionate individuals who lead and inspire the IUB Dance Club community.
        </p>
      </FadeIn>

      <div className="team-grid top-tier">
        {teamData.filter(m => m.group === 'top').map((member, i) => (
          <TeamMember key={i} member={member} delay={i * 100} />
        ))}
      </div>

      <div className="team-grid others-tier">
        {teamData.filter(m => m.group !== 'top').map((member, i) => (
          <TeamMember key={i} member={member} delay={(i % 4) * 100} />
        ))}
      </div>

      <FadeIn delay={200}>
        <TeamCarousel />
      </FadeIn>
    </section>
  );
};

export default Team;
