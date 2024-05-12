import meter from "../assets/img/star.gif";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
<section className="skill" id="skills">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="skill-bx wow zoomIn">
          <h2>Skills</h2>
          <span className="tagline">A Rundown On My Skillset</span> {/* Added tagline */}
          <p> Ratings</p>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="item">
              <img src={meter} alt="Web Development Skill" id="meter1" />
              <h5>Web Development</h5>
            </div>
            <div className="item">
              <img src={meter} alt="Backend Development Skill" id="meter2" />
              <h5>Game Development</h5>
            </div>
            <div className="item">
              <img src={meter} alt="Game Development Skill" id="meter3" />
              <h5>Software Development</h5>
            </div>
            <div className="item">
              <img src={meter} alt="Backend Development Skill" id="meter2" />
              <h5>UI Design</h5>
            </div>
            <div className="item">
              <img src={meter} alt="Backend Development Skill" id="meter2" />
              <h5>Product Design</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
