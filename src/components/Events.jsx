import FadeIn from './FadeIn';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events-section">
      {/* Section 2: Events Intro */}
      <div className="section intro-section">
        <FadeIn>
          <h2 className="section-title text-center">
            Our <span className="text-gradient">Events & Activities</span>
          </h2>
          <p className="intro-text">
            Throughout the year, we host and participate in numerous high-energy events. From our signature "Intra-IUB Dance Competition" to our grand festival "Rongobilash," we offer our members the stage to perform across multiple genres. Beyond competitions, our team proudly performs at university orientations, welcoming ceremonies, and cultural festivals like Pohela Boishakh and Saraswati Puja. The IUB Dance Club brings life to every stage it steps on. From large university programs to national platforms and cultural celebrations, our events reflect energy, creativity, and a deep love for dance.
          </p>
        </FadeIn>
      </div>

      {/* Section 3: Major Hosted Events */}
      <div className="section major-events">
        <FadeIn>
          <h3 className="subsection-title">Major Hosted Events</h3>
          <p className="event-desc">
            One of our proudest achievements is the Intra-IUB Dance Competition 2.0, held on November 9, 11, and 12, 2025. This three-day event brought together talented dancers from across the university, featuring categories like Classical, Folk, K-pop, and Modern. With 35 participants, the competition created an exciting space for performance, creativity, and healthy rivalry.
          </p>
          <div className="image-grid-3">
            <img src="/General Images/dance.jpg" alt="Dance Performance" className="grid-img" />
            <img src="/General Images/iubdnc cover.jpg" alt="Dance Competition" className="grid-img" />
            <img src="/General Images/booth.jpg" alt="Competition Booth" className="grid-img" />
          </div>
        </FadeIn>
      </div>

      {/* Sections 4, 5, 6: Cards Layout */}
      <div className="section event-categories">
        <div className="cards-grid">
          
          {/* Section 4: External Performances */}
          <FadeIn delay={100}>
            <div className="card">
              <img src="/General Images/National Football Stadium.jpg" alt="AFC Asian Cup" />
              <div className="card-content">
                <h4 className="card-title">External Performances</h4>
                <p className="card-text">
                  Our club has had the honor of performing on prestigious stages beyond IUB. In October 2025, we performed at the opening match of the AFC Asian Cup Qualifier, marking a proud moment for the team. We also lit up the stage at Mana Bay on October 31, celebrating Halloween with vibrant “spooky season” performances. Additionally, we showcased our talent at the Southeast Cultural Fest (Folk Fest 2025) and performed at events organized by the UAP Drama Club.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Section 5: University Events */}
          <FadeIn delay={200}>
            <div className="card">
              <img src="/General Images/Convo.jpg" alt="IUB Convocation" />
              <div className="card-content">
                <h4 className="card-title">University Events</h4>
                <p className="card-text">
                  The IUB Dance Club plays a key role in major university occasions. We welcomed around 1,000 new students with a lively performance at the Spring 2026 Orientation on January 15, 2026. At the IUB 26th Convocation on January 21, 2026, held at ICCB, we performed in the evening cultural program alongside Pritom Hasan and Boga Taleb, celebrating the achievements of nearly 2,500 graduates.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Section 6: Cultural Celebrations */}
          <FadeIn delay={300}>
            <div className="card">
              <img src="/General Images/21 Feb.jpg" alt="21 February" />
              <div className="card-content">
                <h4 className="card-title">Cultural Celebrations</h4>
                <p className="card-text">
                  Celebrating culture is at the heart of our identity. On April 14, 2025, we performed during Pohela Boishakh 1432, welcoming the Bengali New Year with joyful morning performances at the university’s daylong festival. We also took part in 21st February programs, honoring the spirit of language and heritage, and celebrated the colors of spring through our performances in Falgun Celebrations.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Section 7: Recent Club Activities */}
      <div className="section recent-activities">
        <FadeIn>
          <h3 className="subsection-title text-center">Recent Club Activities</h3>
          <p className="event-desc text-center" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
            Our journey continues with exciting and dynamic performances. We energized the crowd at JUKTIverse, stealing the spotlight with a high-energy show. We also collaborated with the Football Club for an intra-departmental futsal flashmob, blending sports and dance in a fun and engaging way.
          </p>
          <div className="carousel-grid">
            <img src="/General Images/juktiverse.jpg" alt="JUKTIverse Performance 1" className="carousel-img" />
            <img src="/General Images/juktiverse 2.jpg" alt="JUKTIverse Performance 2" className="carousel-img" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
};

export default Events;
