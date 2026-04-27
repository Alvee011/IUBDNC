import FadeIn from './FadeIn';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-background" style={{ backgroundImage: 'url("/General Images/dance.jpg")' }}></div>
      <div className="hero-content">
        <FadeIn>
          <h1 className="hero-title">
            <span className="text-gradient">IUB</span> Dance Club
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p className="hero-quote">
            "Dance is the best way to run away without venturing out from home."
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <p className="hero-description">
            The IUB Dance Club is a friendly and energetic group where students come together to enjoy dance. We practice many styles like Classical, Folk, Modern, and Hip-Hop. Anyone can join as a beginner or expert. Here, you can learn new skills, perform on stage, and make great friends.
            <br/><br/>
            We help students build confidence and express themselves through dance. Our club also represents IUB in different events and creates a lively campus environment.
          </p>
        </FadeIn>
        
        <FadeIn delay={600}>
          <div className="hero-buttons">
            <a href="#events" className="btn">Explore More</a>
            <a href="#team" className="btn btn-outline">Meet The Team</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
