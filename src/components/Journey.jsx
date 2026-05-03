import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import './Journey.css';
import './Journey.css';

const StackImages = () => {
  const images = ['/General Images/everyone.jpg', '/General Images/ebs.jpg'];
  const [frontIndex, setFrontIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-stack-container">
      {images.map((src, idx) => {
        const isFront = idx === frontIndex;
        return (
          <div key={idx} className={`stack-card ${isFront ? 'front' : 'back'}`}>
            <img src={src} alt={`Journey ${idx}`} />
            <div className="image-accent"></div>
          </div>
        );
      })}
    </div>
  );
};

const Journey = () => {
  return (
    <section id="about" className="section journey-section">
      <div className="journey-container">
        <FadeIn className="journey-content">
          <h2 className="section-title">
            <span className="text-gradient">Our Journey</span> and Activities
          </h2>
          
          <div className="journey-text">
            <p>
              The IUB Dance Club started in 2018 with just 15 passionate members who shared a love for dance. Today, it has grown into a vibrant family of over 1000 members, making it one of the most active communities on campus.
            </p>
            <p>
              We regularly organize dance shows, flashmobs, and practice sessions to help members improve their skills and perform with confidence. These activities not only develop talent but also build strong friendships.
            </p>
            <p>
              Collaboration plays a key role in our growth. We work with other clubs and take part in various university events, exploring new styles and ideas while continuing to spread the joy of dance across the IUB community.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn className="journey-image-wrapper" delay={200}>
          <StackImages />
        </FadeIn>
      </div>
    </section>
  );
};

export default Journey;
