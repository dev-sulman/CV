import zone2 from "./zone2.jpg";

function About() {
    return(
        <>
        {/* <!-- About Section --> */}
      <section className="about" id="about">
         <div className="section-header">
            <h2 className="section-title">About <span>Me</span></h2>
            <p className="section-subtitle">Get to know me better</p>
         </div>
         <div className="about-content">
            <div className="about-image">
               <div className="image-container">
                  <img src={zone2} alt="Sulman Bashir" className="about-img"/>
                  <div className="experience-badge">
                     <span className="years">3+</span>
                     <span className="text">Years Experience</span>
                  </div>
               </div>
            </div>
            <div className="about-text">
              
               <div className="about-details">
                  <div className="detail-item">
                     <span className="detail-label">Name:</span>
                     <span className="detail-value">Sulman Bashir</span>
                  </div>
                  <div className="detail-item">
                     <span className="detail-label">Email:</span>
                     <span className="detail-value">sulmanmehar4@gmail.com</span>
                  </div>
                  <div className="detail-item">
                     <span className="detail-label">From:</span>
                     <span className="detail-value">Islamabad, Pakistan</span>
                  </div>
                  <div className="detail-item">
                     <span className="detail-label">Freelance:</span>
                     <span className="detail-value available">Available</span>
                  </div>
               </div>
              
               <a href="#contact" className="down-btn">Hire Me</a>
               
            </div>
         </div>
      </section>
        </>
    )
}
export default About;