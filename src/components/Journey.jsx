import FadeIn from './FadeIn';
import './Journey.css';

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
              The journey of the IUB Dance Club began in 2018 with just 15 passionate members who shared a simple love for dance. Over the years, that small group has grown into a vibrant and dynamic family of more than 1000 members, making it one of the most active and energetic communities on campus.
            </p>
            <p>
              Throughout this journey, the club has continuously created opportunities for students to express themselves and develop their skills. We regularly organize exciting dance shows, energetic flashmobs, and dedicated practice sessions that help members improve and prepare for performances. These activities not only build talent but also create strong bonds among members.
            </p>
            <p>
              Collaboration is an important part of our growth. We actively work with other clubs and participate in various university events, which allows us to explore new ideas and reach wider audiences. By constantly experimenting with different dance styles and creative concepts, we continue to evolve, learn, and keep the spirit of dance alive within the IUB community.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn className="journey-image-wrapper" delay={200}>
          <div className="journey-image">
            <img src="/General Images/everyone.jpg" alt="IUB Dance Club Members" />
            <div className="image-accent"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Journey;
