import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MyProjects from "./project";

const Carousel = props => {
  const [loading, setLoading] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: event => {
      handleAnimation(event);
    }
  };

  useEffect(() => {
    setTimeout(function() {
      //Start the timer
      setLoading(false); //After 1 second, set render to true
    }, 3000);
  });

  const handleAnimation = event => {
    console.log(event);
    if (event === 1) {
      console.log("here");
      setHide1(false);
    } else if (event === 2) {
      setHide2(false);
    }
  };

  return (
    <>
      <div className="hideSm">
        {(loading && (
          <div className="loader" onLoad={() => console.log("LOADED")}>
            <Loader
              type="Triangle"
              color="#3f3333"
              height={200}
              width={200}
              timeout={3000} //3 secs
            />
          </div>
        )) || (
          <>
            <div className="contactMe ">
              <p>
                <i class="fas fa-envelope"></i>noel.an.lyon@gmail.com
              </p>
              <p>
                <i class="fas fa-phone"></i>06 83 07 54 48
              </p>
              <a href="https://www.linkedin.com/in/noel-an-704482186/">
                <p>
                  <i class="fab fa-linkedin"></i>Linkedin
                </p>
              </a>
            </div>
            <Fade>
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className="carouselSlide myBlack">
                  <Slide top>
                    <h3 className="myTitle text-center">Noël AN</h3>
                  </Slide>
                  <Fade right>
                    <p className="underTitle">Je suis développeur web</p>
                  </Fade>
                </div>
                {/* End Slide 1 */}
                {/* Slide 2 */}
                <div className="carouselSlide  myGrey">
                  <div className={hide1 ? "hide" : ""}>
                    <Slide top>
                      <h3 className="myTitleAboutMe">About me</h3>
                    </Slide>
                    <Fade right>
                      <div className="textAboutMe test">
                        <p>
                          Bonjour je me présente Noël AN. Après avoir travaillé
                          principalement dans la restauration et la logistique,
                          j'ai décidé de me reconvertir dans un domaine qui m'a
                          toujours passionné, le devéloppement Web.
                        </p>
                        <p>
                          J'ai effectué une formation de développeur web à la
                          Wild Code School qui m'a permis de découvrir ce métier
                          et me spécialiser en PHP Symfony.
                        </p>
                        <p>
                          Je continue de m'auto-former continuellement,
                          récemment j'ai pu découvrir React et Api platform
                        </p>
                        <p>
                          Ayant terminé un stage en application mobile pour
                          Senzu je suis actuellement à lécoute d'oportunité !
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
                {/* End Slide 2 */}

                {/* Slide 3 */}
                <div className="carouselSlide  myCyan">
                  <div className={hide2 ? "hide" : ""}>
                    <Slide top></Slide>
                    <Fade right>
                      <div id="SkillBox">
                        <h3 className="mySkills">Mes compétences</h3>

                        <div className="SkillBar">
                          <div id="Skill-C">
                            <span className="Skill-Area ">Symfony</span>
                            <span className="PercentText ">70%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-XML">
                            <span className="Skill-Area ">React </span>
                            <span className="PercentText ">60%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-JAVA">
                            <span className="Skill-Area ">Api platform </span>
                            <span className="PercentText ">50%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-JS">
                            <span className="Skill-Area ">Javascript</span>
                            <span className="PercentText ">65%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-PHP">
                            <span className="Skill-Area ">PHP </span>
                            <span className="PercentText ">70%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-SQL">
                            <span className="Skill-Area ">SQL </span>
                            <span className="PercentText ">80%</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-HTML">
                            <span className="Skill-Area ">HTML</span>
                            <span className="PercentText ">99% ?</span>
                          </div>
                        </div>

                        <div className="SkillBar">
                          <div id="Skill-CSS">
                            <span className="Skill-Area ">CSS/CSS3</span>
                            <span className="PercentText ">70%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                {/* End Slide 3 */}
              </Slider>
            </Fade>
            <MyProjects></MyProjects>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;
